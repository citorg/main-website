import { createFileRoute } from "@tanstack/react-router";
import { Ear, HandHeart, Wrench } from "lucide-react";
import CtaLink from "../components/CtaLink";

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
			<section className="bg-black text-white py-24 px-6 md:px-12">
				<div className="max-w-4xl mx-auto text-center md:text-left">
					<h1 className="font-bold text-4xl md:text-6xl uppercase mb-6">
						CIT Serve
					</h1>
					<p className="text-xl md:text-2xl font-light leading-relaxed">
						The outreach arm of Christians in Tech. Faith that works with its
						hands first — and builds second.
					</p>
				</div>
			</section>

			<section className="py-20 px-6 md:px-12">
				<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
					{rhythm.map((step) => (
						<div key={step.title} className="flex flex-col items-center">
							<div className="mb-6">{step.icon}</div>
							<h2 className="text-2xl font-bold uppercase mb-4">
								{step.title}
							</h2>
							<p className="text-gray-700 leading-relaxed">{step.body}</p>
						</div>
					))}
				</div>
			</section>

			<section className="bg-gray-100 py-20 px-6 md:px-12">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-bold uppercase mb-6">
						From serving to shipping
					</h2>
					<p className="text-lg text-gray-800 leading-relaxed mb-10 max-w-2xl mx-auto">
						CIT Serve isn't a volunteering program with a tech department bolted
						on — it's where our projects come from. VolunteerPress, our
						open-source platform for in-person local contribution, grew directly
						out of these serving sessions and conversations.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<CtaLink to="/projects" theme="dark">
							See Our Projects
						</CtaLink>
						<CtaLink href="https://www.meetup.com/citcbus/" theme="dark">
							Serve With Us
						</CtaLink>
					</div>
				</div>
			</section>
		</div>
	);
}
