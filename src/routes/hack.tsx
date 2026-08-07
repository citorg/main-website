import { createFileRoute } from "@tanstack/react-router";
import CtaLink from "../components/CtaLink";

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
			<section className="bg-black text-white py-28 px-6 md:px-12 text-center">
				<p className="uppercase tracking-[0.3em] text-gray-400 mb-4">
					A Christians in Tech event
				</p>
				<h1 className="font-bold text-5xl md:text-7xl uppercase mb-6">
					#HACK Columbus
				</h1>
				<p className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-10">
					A hackathon where Columbus builds technology that serves — for the
					gospel, the local church, and our neighbors.
				</p>
				{/* TODO: replace with registration link when live */}
				<CtaLink href="https://www.meetup.com/citcbus/" theme="light">
					Get Notified
				</CtaLink>
			</section>

			<section className="py-20 px-6 md:px-12">
				<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
					<div>
						<h2 className="uppercase tracking-widest text-sm text-gray-500 mb-2">
							When
						</h2>
						<p className="text-xl font-bold">Dates coming soon</p>
					</div>
					<div>
						<h2 className="uppercase tracking-widest text-sm text-gray-500 mb-2">
							Where
						</h2>
						<p className="text-xl font-bold">Columbus, OH</p>
					</div>
					<div>
						<h2 className="uppercase tracking-widest text-sm text-gray-500 mb-2">
							Who
						</h2>
						<p className="text-xl font-bold">
							Developers, designers, and dreamers
						</p>
					</div>
				</div>
			</section>

			<section className="bg-gray-100 py-20 px-6 md:px-12">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-bold uppercase mb-6">
						Questions? Want to sponsor?
					</h2>
					<p className="text-lg text-gray-800 mb-8">
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
