import eventsData from "../data/events.json";
import Container from "./Container";

/**
 * Slim banner showing the next upcoming meetup, read from src/data/events.json
 * (kept fresh by .github/workflows/sync-events.yml). Renders nothing if no
 * future event exists in the data.
 */
export default function NextEvent() {
	const now = new Date();
	const next = eventsData.events
		.map((e) => ({ ...e, date: new Date(e.dateTime) }))
		.filter((e) => e.date.getTime() > now.getTime() - 3 * 60 * 60 * 1000) // keep visible while in progress
		.sort((a, b) => a.date.getTime() - b.date.getTime())[0];

	if (!next) return null;

	const when = next.date.toLocaleString("en-US", {
		weekday: "short",
		month: "short",
		day: "numeric",
		hour: "numeric",
		minute: "2-digit",
		timeZone: "America/New_York",
	});

	return (
		<a
			href={next.url}
			target="_blank"
			rel="noopener noreferrer"
			className="group block bg-paper border-b border-gray-200 hover:bg-stone transition-colors"
		>
			<Container className="py-3 flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-sm">
				<span className="font-bold uppercase tracking-widest shrink-0">
					Next meetup
				</span>
				<span className="text-mist">
					{next.name} · {when} ET · {next.venue}
				</span>
				<span className="font-bold underline underline-offset-4 md:ml-auto shrink-0 transition-colors group-hover:text-signal">
					RSVP on Meetup →
				</span>
			</Container>
		</a>
	);
}
