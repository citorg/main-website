import { createFileRoute } from "@tanstack/react-router";
import CtaLink from "../components/CtaLink";
import Eyebrow from "../components/Eyebrow";
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
		<section className="bg-paper py-16 md:py-24 px-6 md:px-12">
			<div className="max-w-5xl mx-auto">
				<Eyebrow className="mb-3">Bi-weekly in Columbus</Eyebrow>
				<h1 className="font-display font-bold uppercase tracking-[0.02em] text-[36px] md:text-[56px] leading-[1.1] mb-6">
					Events
				</h1>
				<p className="text-base md:text-lg leading-[1.7] mb-12 max-w-2xl">
					We meet bi-weekly in Columbus. RSVP on Meetup so we know you're coming
					— first-timers are always welcome.
				</p>

				{upcoming.length === 0 ? (
					<div className="border border-gray-200 p-10 text-center">
						<p className="text-base md:text-lg leading-[1.7] mb-6">
							Nothing on the calendar right now — new events post to Meetup
							first.
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
									className="group block border border-gray-200 p-8 hover:border-ink transition-colors"
								>
									<p className="text-xs md:text-[13px] font-semibold uppercase tracking-[0.25em] text-mist mb-2">
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
									<h2 className="font-display font-bold text-[20px] md:text-[24px] mb-2">
										{event.name}
									</h2>
									<p className="text-mist">{event.venue}</p>
									<p className="mt-4 font-bold underline underline-offset-4 transition-colors group-hover:text-signal">
										RSVP on Meetup →
									</p>
								</a>
							</li>
						))}
					</ul>
				)}

				<p className="mt-12 text-sm text-mist">
					Event data syncs automatically from{" "}
					<a
						href="https://www.meetup.com/citcbus/events/"
						target="_blank"
						rel="noopener noreferrer"
						className="underline transition-colors hover:text-signal"
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
		</section>
	);
}
