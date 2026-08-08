import { createFileRoute } from "@tanstack/react-router";
import { Ear, HandHeart, Wrench } from "lucide-react";
import Container from "../components/Container";
import CtaLink from "../components/CtaLink";
import Eyebrow from "../components/Eyebrow";

export const Route = createFileRoute("/serve")({
	component: ServePage,
	head: () => ({
		meta: [{ title: "CIT Serve | Christians in Tech" }],
	}),
});

// NOTE: Draft copy — CIT organizers should review and refine this page.
// See the intro-circle slides for language the community already uses.

const rhythm = [
	{
		icon: <Ear size={48} strokeWidth={1.5} aria-hidden />,
		title: "Learn",
		body: "We sit down with local organizations already serving our community and listen — to their mission, their work, and what a day in their world actually looks like.",
	},
	{
		icon: <HandHeart size={48} strokeWidth={1.5} aria-hidden />,
		title: "Serve",
		body: "Then we show up. We schedule time to serve alongside them, doing the work they need done — no laptops required.",
	},
	{
		icon: <Wrench size={48} strokeWidth={1.5} aria-hidden />,
		title: "Build",
		body: "Serving side by side surfaces the real challenges these organizations face. Where technology can genuinely help, we explore building it — together.",
	},
];

function ServePage() {
	return (
		<div>
			{/* Hero — centered poster treatment. System: event/initiative pages
			    (/serve, /hack) center their heroes; community pages (Home,
			    Events) left-align. */}
			<section className="bg-ink text-white py-16 md:py-24">
				<Container className="text-center">
					<Eyebrow tone="light" className="mb-4">
						The outreach arm of Christians in Tech
					</Eyebrow>
					<h1 className="font-display font-bold uppercase tracking-[0.02em] text-[36px] md:text-[56px] leading-[1.1] mb-6">
						CIT Serve
					</h1>
					<p className="text-base md:text-lg leading-[1.7] italic max-w-2xl mx-auto">
						"As each has received a gift, use it to serve one another."
						<span className="not-italic text-mist"> — 1 Peter 4:10</span>
					</p>
				</Container>
			</section>

			<section className="bg-paper py-16 md:py-24">
				<Container className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
					{rhythm.map((step) => (
						<div key={step.title} className="flex flex-col items-center">
							<div className="mb-6">{step.icon}</div>
							<h2 className="font-display font-bold uppercase tracking-[0.02em] text-[20px] md:text-[24px] mb-4">
								{step.title}
							</h2>
							<p className="text-base md:text-lg leading-[1.7]">{step.body}</p>
						</div>
					))}
				</Container>
			</section>

			<section className="bg-stone py-16 md:py-24">
				<Container className="text-center">
					<Eyebrow className="mb-3">Get involved</Eyebrow>
					<h2 className="font-display font-bold uppercase tracking-[0.02em] text-[28px] md:text-[36px] mb-6">
						Serve With Us
					</h2>
					<p className="text-base md:text-lg leading-[1.7] mb-8 max-w-2xl mx-auto">
						Upcoming serve opportunities are announced through our community.
						Stay up to date:
					</p>
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<CtaLink href="https://www.meetup.com/citcbus/" theme="dark">
							Join our Meetup
						</CtaLink>
						<CtaLink href="https://discord.com/invite/s9bQZBVduF" theme="dark">
							Join the Discord
						</CtaLink>
					</div>
				</Container>
			</section>
		</div>
	);
}
