import { createFileRoute } from "@tanstack/react-router";
import CtaLink from "../components/CtaLink";
import eventsData from "../data/events.json";

export const Route = createFileRoute("/events")({
	component: EventsPage,
	head: () => ({
		meta: [{ title: "Events | Christians in Tech" }],
	}),
});

function EventsPage() {
	const now = Date.now();
	const upcoming = eventsData.events
		.map((e) => ({ ...e, date: new Date(e.dateTime) }))
		.filter((e) => e.date.getTime() > now - 3 * 60 * 60 * 1000)
		.sort((a, b) => a.date.getTime() - b.date.getTime());

	return (
		<div className="max-w-5xl mx-auto px-6 md:px-12 py-20">
			<h1 className="font-bold text-4xl md:text-5xl uppercase mb-6">Events</h1>
			<p className="text-lg text-gray-700 mb-12 max-w-2xl">
				We meet bi-weekly in Columbus. RSVP on Meetup so we know you're coming —
				first-timers are always welcome.
			</p>

			{upcoming.length === 0 ? (
				<div className="border border-gray-200 p-10 text-center">
					<p className="text-lg mb-6">
						Nothing on the calendar right now — new events post to Meetup first.
					</p>
					<CtaLink href="https://www.meetup.com/citcbus/events/" theme="dark">
						Check Meetup
					</CtaLink>
				</div>
			) : (
				<ul className="space-y-6">
					{upcoming.map((event) => (
						<li key={event.id}>
							<a
								href={event.url}
								target="_blank"
								rel="noopener noreferrer"
								className="block border border-gray-200 p-8 hover:border-black transition-colors"
							>
								<p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
									{event.date.toLocaleString("en-US", {
										weekday: "long",
										month: "long",
										day: "numeric",
										hour: "numeric",
										minute: "2-digit",
										timeZone: "America/New_York",
									})}{" "}
									ET
								</p>
								<h2 className="text-2xl font-bold mb-2">{event.name}</h2>
								<p className="text-gray-700">{event.venue}</p>
								<p className="mt-4 font-bold underline underline-offset-4">
									RSVP on Meetup →
								</p>
							</a>
						</li>
					))}
				</ul>
			)}

			<p className="mt-12 text-sm text-gray-500">
				Event data syncs automatically from{" "}
				<a
					href="https://www.meetup.com/citcbus/events/"
					target="_blank"
					rel="noopener noreferrer"
					className="underline"
				>
					our Meetup page
				</a>
				. Last updated{" "}
				{new Date(eventsData.updatedAt).toLocaleDateString("en-US", {
					month: "long",
					day: "numeric",
					year: "numeric",
				})}
				.
			</p>
		</div>
	);
}
