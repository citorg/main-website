#!/usr/bin/env node
/**
 * Fetches upcoming events from the public CIT Meetup page and writes them to
 * src/data/events.json. Run by .github/workflows/sync-events.yml nightly.
 *
 * Design notes:
 * - Meetup locked its iCal/RSS feeds behind login and its API behind Meetup
 *   Pro, so we parse the public events page instead. Meetup embeds
 *   schema.org Event JSON-LD and Next.js page data; we try JSON-LD first,
 *   then fall back to scanning __NEXT_DATA__.
 * - If anything fails, we exit non-zero WITHOUT touching events.json, so the
 *   site keeps serving the last known-good data.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const EVENTS_URL = "https://www.meetup.com/citcbus/events/";
const OUT_PATH = resolve(import.meta.dirname, "../src/data/events.json");

function extractJsonLd(html) {
	const events = [];
	const re =
		/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
	for (const match of html.matchAll(re)) {
		try {
			const parsed = JSON.parse(match[1]);
			const items = Array.isArray(parsed) ? parsed : [parsed];
			for (const item of items) {
				if (item["@type"] === "Event" && item.startDate && item.name) {
					events.push({
						id: (item.url?.match(/events\/(\d+)/) || [])[1] ?? item.url,
						name: item.name,
						url: item.url,
						dateTime: item.startDate,
						venue: [
							item.location?.name,
							item.location?.address?.streetAddress,
							item.location?.address?.addressLocality,
							item.location?.address?.addressRegion,
						]
							.filter(Boolean)
							.join(", "),
					});
				}
			}
		} catch {
			// Ignore malformed JSON-LD blocks; other blocks may still parse.
		}
	}
	return events;
}

function extractNextData(html) {
	const match = html.match(
		/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/,
	);
	if (!match) return [];
	const events = [];
	try {
		const data = JSON.parse(match[1]);
		// Walk the object tree looking for event-shaped nodes.
		const stack = [data];
		while (stack.length) {
			const node = stack.pop();
			if (!node || typeof node !== "object") continue;
			if (node.dateTime && node.title && node.eventUrl) {
				events.push({
					id: String(node.id ?? node.eventUrl),
					name: node.title,
					url: node.eventUrl,
					dateTime: node.dateTime,
					venue: [
						node.venue?.name,
						node.venue?.address,
						node.venue?.city,
						node.venue?.state,
					]
						.filter(Boolean)
						.join(", "),
				});
			}
			for (const value of Object.values(node)) {
				if (value && typeof value === "object") stack.push(value);
			}
		}
	} catch {
		return [];
	}
	return events;
}

async function main() {
	const res = await fetch(EVENTS_URL, {
		headers: { "user-agent": "cit-website-event-sync (christians-in-tech.org)" },
	});
	if (!res.ok) {
		throw new Error(`Meetup responded ${res.status}`);
	}
	const html = await res.text();

	let events = extractJsonLd(html);
	if (events.length === 0) events = extractNextData(html);

	if (events.length === 0) {
		throw new Error(
			"No events parsed — Meetup may have changed its page structure. Keeping existing data.",
		);
	}

	// Deduplicate by id, keep only future-or-today events, sort ascending.
	const seen = new Set();
	const cleaned = events
		.filter((e) => {
			if (seen.has(e.id)) return false;
			seen.add(e.id);
			return true;
		})
		.filter((e) => new Date(e.dateTime).getTime() > Date.now() - 86_400_000)
		.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));

	const output = {
		updatedAt: new Date().toISOString(),
		source: EVENTS_URL,
		events: cleaned,
	};

	const previous = readFileSync(OUT_PATH, "utf8");
	const next = `${JSON.stringify(output, null, "\t")}\n`;

	// Avoid noisy commits when only updatedAt changed.
	const stripTimestamp = (s) => s.replace(/"updatedAt": "[^"]*"/, "");
	if (stripTimestamp(previous) === stripTimestamp(next)) {
		console.log("Events unchanged; not writing.");
		return;
	}

	writeFileSync(OUT_PATH, next);
	console.log(`Wrote ${cleaned.length} event(s) to src/data/events.json`);
}

main().catch((err) => {
	console.error(err.message);
	process.exit(1);
});
