import { createFileRoute } from "@tanstack/react-router";
import CtaLink from "../components/CtaLink";
import Eyebrow from "../components/Eyebrow";
import floorWideImage from "../images/hack-2025/hack-2025-floor-wide.jpg";

export const Route = createFileRoute("/hack")({
	component: HackPage,
	head: () => ({
		meta: [{ title: "#HACK Columbus | Christians in Tech" }],
	}),
});

// NOTE: 2026 details (challenges, dates, times, venue, registration) are TBD.
// Drop them into the "2026" section below once organizers confirm.

function HackPage() {
	return (
		<div>
			{/* Hero — full-bleed photo of the 2025 hackathon floor + ink overlay */}
			<section
				className="text-white py-24 md:py-36 px-6 md:px-12 text-center flex flex-col justify-center"
				style={{
					background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${floorWideImage})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			>
				<Eyebrow tone="light" className="mb-4">
					A Christians in Tech event
				</Eyebrow>
				<h1 className="font-display font-extrabold uppercase tracking-[0.02em] text-[40px] md:text-[72px] leading-[1.05] mb-6">
					#HACK Columbus
				</h1>
				<p className="text-base md:text-lg leading-[1.7] max-w-2xl mx-auto">
					A hackathon where Columbus builds technology that serves our city and
					its people. Developers, designers, students, and first-timers — all
					are welcome.
				</p>
			</section>

			{/* 2026 */}
			<section className="bg-paper py-16 md:py-24 px-6 md:px-12">
				<div className="max-w-4xl mx-auto text-center">
					<Eyebrow className="mb-3">Coming in 2026</Eyebrow>
					<h2 className="font-display font-bold uppercase tracking-[0.02em] text-[28px] md:text-[36px] mb-6">
						2026 Details Coming Soon
					</h2>
					<p className="text-base md:text-lg leading-[1.7] mb-8 max-w-2xl mx-auto">
						Challenges, dates, and times for the next #HACK Columbus will be
						announced soon. Be the first to know:
					</p>
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<CtaLink href="https://www.meetup.com/citcbus/" theme="dark">
							Join our Meetup
						</CtaLink>
						<CtaLink href="https://discord.com/invite/s9bQZBVduF" theme="dark">
							Join the Discord
						</CtaLink>
					</div>
				</div>
			</section>
		</div>
	);
}
