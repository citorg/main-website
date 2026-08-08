import { createFileRoute } from "@tanstack/react-router";
import CtaLink from "../components/CtaLink";
import Eyebrow from "../components/Eyebrow";

export const Route = createFileRoute("/hack")({
	component: HackPage,
	head: () => ({
		meta: [{ title: "#HACK Columbus | Christians in Tech" }],
	}),
});

// NOTE: Scaffold page. Fill in dates, venue, registration link, and schedule
// once #HACK Columbus details are finalized. Sections below are intentionally
// structured so content can drop in without redesigning the page.

function HackPage() {
	return (
		<div>
			<section className="bg-ink text-white py-16 md:py-24 px-6 md:px-12 text-center">
				<Eyebrow tone="light" className="mb-4">
					A Christians in Tech event
				</Eyebrow>
				<h1 className="font-display font-extrabold uppercase tracking-[0.02em] text-[40px] md:text-[72px] leading-[1.05] mb-6">
					#HACK Columbus
				</h1>
				<p className="text-base md:text-lg leading-[1.7] max-w-2xl mx-auto mb-10">
					A hackathon where Columbus builds technology that serves — for the
					gospel, the local church, and our neighbors.
				</p>
				{/* TODO: replace with registration link when live */}
				<CtaLink href="https://www.meetup.com/citcbus/" theme="light">
					Get Notified
				</CtaLink>
			</section>

			<section className="bg-paper py-16 md:py-24 px-6 md:px-12">
				<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
					<div>
						<h2 className="text-xs md:text-[13px] font-semibold uppercase tracking-[0.25em] text-mist mb-2">
							When
						</h2>
						<p className="font-display font-bold text-[20px] md:text-[24px]">
							Dates coming soon
						</p>
					</div>
					<div>
						<h2 className="text-xs md:text-[13px] font-semibold uppercase tracking-[0.25em] text-mist mb-2">
							Where
						</h2>
						<p className="font-display font-bold text-[20px] md:text-[24px]">
							Columbus, OH
						</p>
					</div>
					<div>
						<h2 className="text-xs md:text-[13px] font-semibold uppercase tracking-[0.25em] text-mist mb-2">
							Who
						</h2>
						<p className="font-display font-bold text-[20px] md:text-[24px]">
							Developers, designers, and dreamers
						</p>
					</div>
				</div>
			</section>

			<section className="bg-stone py-16 md:py-24 px-6 md:px-12">
				<div className="max-w-4xl mx-auto text-center">
					<Eyebrow className="mb-3">Get in touch</Eyebrow>
					<h2 className="font-display font-bold uppercase tracking-[0.02em] text-[28px] md:text-[36px] mb-6">
						Questions? Want to sponsor?
					</h2>
					<p className="text-base md:text-lg leading-[1.7] mb-8">
						Reach out through our Discord or Meetup page — we'd love to hear
						from you.
					</p>
					<CtaLink href="https://discord.com/invite/s9bQZBVduF" theme="dark">
						Join the Discord
					</CtaLink>
				</div>
			</section>
		</div>
	);
}
