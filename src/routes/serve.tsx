import { createFileRoute } from "@tanstack/react-router";
import { Ear, HandHeart, Wrench } from "lucide-react";
import CtaLink from "../components/CtaLink";
import Eyebrow from "../components/Eyebrow";
import discussionCircleImage from "../images/meetups/meetup-discussion-circle.jpg";

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
			<section className="bg-ink text-white py-16 md:py-24 px-6 md:px-12">
				<div className="max-w-4xl mx-auto text-center md:text-left">
					<Eyebrow tone="light" className="mb-4">
						The outreach arm of Christians in Tech
					</Eyebrow>
					<h1 className="font-display font-bold uppercase tracking-[0.02em] text-[36px] md:text-[56px] leading-[1.1] mb-6">
						CIT Serve
					</h1>
					<p className="text-base md:text-lg leading-[1.7]">
						Faith that works with its hands first — and builds second.
					</p>
				</div>
			</section>

			<section className="bg-paper py-16 md:py-24 px-6 md:px-12">
				<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
					{rhythm.map((step) => (
						<div key={step.title} className="flex flex-col items-center">
							<div className="mb-6">{step.icon}</div>
							<h2 className="font-display font-bold uppercase tracking-[0.02em] text-[20px] md:text-[24px] mb-4">
								{step.title}
							</h2>
							<p className="text-base md:text-lg leading-[1.7]">{step.body}</p>
						</div>
					))}
				</div>
			</section>

			<section className="bg-stone py-16 md:py-24 px-6 md:px-12">
				<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24 text-center md:text-left">
					<div className="w-full md:w-1/2">
						<img
							className="rounded-lg shadow-xl w-full"
							src={discussionCircleImage}
							alt="CIT members gathered in a discussion circle at a Columbus meetup."
							loading="lazy"
						/>
					</div>
					<div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
						<Eyebrow className="mb-3">Where our projects begin</Eyebrow>
						<h2 className="font-display font-bold uppercase tracking-[0.02em] text-[28px] md:text-[36px] mb-6">
							From serving to shipping
						</h2>
						<p className="text-base md:text-lg leading-[1.7] mb-10 max-w-2xl">
							CIT Serve isn't a volunteering program with a tech department
							bolted on — it's where our projects come from. The tools we build
							grow directly out of these serving sessions and the conversations
							they spark.
						</p>
						<CtaLink href="https://www.meetup.com/citcbus/" theme="dark">
							Serve With Us
						</CtaLink>
					</div>
				</div>
			</section>
		</div>
	);
}
