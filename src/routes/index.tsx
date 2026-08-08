import { createFileRoute } from "@tanstack/react-router";
import { HandHeart, Heart, Users } from "lucide-react";
import CtaLink from "../components/CtaLink";
import Eyebrow from "../components/Eyebrow";
import NextEvent from "../components/NextEvent";
import bgImage from "../images/meetups/meetup-ai-talk-wide.jpg";
import prayerCircleImage from "../images/meetups/meetup-prayer-circle.jpg";
import bethelLogo from "../images/sponsors/bethel.png";
import fruitsAndRootsLogo from "../images/sponsors/fruits-and-roots.png";
import improvingLogo from "../images/sponsors/improving.png";

export const Route = createFileRoute("/")({
	component: HomePage,
	head: () => ({
		meta: [{ title: "Christians in Tech" }],
	}),
});

const sponsors = [
	{
		name: "Bethel World Prayer Center",
		role: "Fiscal Sponsor",
		href: "https://www.bethelworldprayercenter.org/",
		image: bethelLogo,
	},
	{
		name: "Improving",
		role: "Venue Sponsor",
		href: "https://www.improving.com/locations/columbus/",
		image: improvingLogo,
	},
	{
		name: "Fruits and Roots",
		role: "Coffee Partner",
		href: "https://www.fruitsandroots.com/",
		image: fruitsAndRootsLogo,
	},
];

const involvement = [
	{
		icon: <Users size={64} strokeWidth={1.5} className="mb-6" aria-hidden />,
		title: "Join a Meetup",
		body: "We gather bi-weekly in Columbus for conversation, learning, and community — whether you're a seasoned professional or just starting your tech journey.",
		cta: { label: "RSVP on Meetup", href: "https://www.meetup.com/citcbus/" },
	},
	{
		icon: (
			<HandHeart size={64} strokeWidth={1.5} className="mb-6" aria-hidden />
		),
		title: "Serve With Us",
		body: "CIT Serve is our outreach arm: we learn from local organizations, serve alongside them, and explore technical solutions to the challenges they face.",
		cta: { label: "About CIT Serve", to: "/serve" },
	},
	{
		icon: <Heart size={64} strokeWidth={1.5} className="mb-6" aria-hidden />,
		title: "Make a Donation",
		body: "Support our mission to bridge the gap between faith and technology. Your contributions help us host events, serve locally, and expand our reach.",
		cta: { label: "Donate", href: "https://onrealm.org/bwpc/-/form/give/cit" },
	},
];

const sectionHeading =
	"font-display font-bold uppercase tracking-[0.02em] text-[28px] md:text-[36px]";

function HomePage() {
	return (
		<>
			<NextEvent />

			{/* Hero — the one full-bleed photo + ink overlay on the site */}
			<section
				className="w-full text-center md:text-left px-6 md:px-12 flex flex-col justify-center min-h-[400px] md:h-[55vh]"
				style={{
					background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			>
				<div className="max-w-4xl hero-stagger">
					{/* One line at every viewport: nowrap + viewport-scaled clamp, sized
					    so it clears the section padding at 360px wide. */}
					<h1 className="text-white font-display font-extrabold uppercase tracking-[0.02em] whitespace-nowrap text-[clamp(1.625rem,7.3vw,4.5rem)] leading-[1.05] mb-3">
						Christians <span className="font-light">in</span> Tech
					</h1>
					<p className="text-white font-medium text-[clamp(1.125rem,2.5vw,1.75rem)] leading-[1.7] mb-8">
						A community at the intersection of faith and technology.
					</p>
					<CtaLink
						href="https://www.meetup.com/citcbus/"
						theme="solid"
						size="lg"
					>
						Upcoming Events
					</CtaLink>
				</div>
			</section>

			{/* About */}
			{/* biome-ignore lint/correctness/useUniqueElementIds: static anchor for hash navigation */}
			<section
				id="about-us"
				className="bg-paper w-full py-16 md:py-24 px-6 md:px-12"
			>
				<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24 text-center md:text-left">
					<div className="w-full md:w-1/2">
						<img
							className="rounded-lg shadow-xl w-full"
							src={prayerCircleImage}
							alt="CIT members praying together at a Columbus meetup."
						/>
					</div>
					<div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
						<Eyebrow className="mb-3">Who we are</Eyebrow>
						<h2 className={`${sectionHeading} mb-6`}>About Us</h2>
						<p className="text-base md:text-lg leading-[1.7] mb-8">
							Christians in Tech is a community at the intersection of faith and
							technology. Our meetups are designed to spark meaningful
							conversations, promote knowledge sharing, and encourage
							growth—both in your career and your spiritual walk with God.
							Whether you're an experienced professional or just starting your
							tech journey, CIT welcomes you.
						</p>
						<CtaLink href="https://www.meetup.com/citcbus/" theme="dark">
							Join a Chapter
						</CtaLink>
					</div>
				</div>
			</section>

			{/* Get involved */}
			{/* biome-ignore lint/correctness/useUniqueElementIds: static anchor for hash navigation */}
			<section
				id="get-involved"
				className="bg-stone w-full py-16 md:py-24 px-4"
			>
				<div className="text-center mb-16">
					<Eyebrow className="mb-3">Find your place</Eyebrow>
					<h2 className={sectionHeading}>Get Involved</h2>
				</div>
				<div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
					{involvement.map((item) => (
						<div
							key={item.title}
							className="flex flex-col items-center text-center h-full"
						>
							{item.icon}
							<h3 className="font-display font-bold uppercase tracking-[0.02em] text-[20px] md:text-[24px] mb-4">
								{item.title}
							</h3>
							<p className="mb-10 text-base md:text-lg leading-[1.7] flex-grow max-w-md">
								{item.body}
							</p>
							{"to" in item.cta && item.cta.to ? (
								<CtaLink
									to={item.cta.to}
									theme="dark"
									className="w-full max-w-[400px]"
								>
									{item.cta.label}
								</CtaLink>
							) : (
								<CtaLink
									href={item.cta.href}
									theme="dark"
									className="w-full max-w-[400px]"
								>
									{item.cta.label}
								</CtaLink>
							)}
						</div>
					))}
				</div>
			</section>

			{/* Sponsors */}
			{/* biome-ignore lint/correctness/useUniqueElementIds: static anchor for hash navigation */}
			<section
				id="sponsors-partners"
				className="bg-paper w-full py-16 md:py-24 px-6 md:px-12"
			>
				<div className="text-center mb-16">
					<Eyebrow className="mb-3">Thank you</Eyebrow>
					<h2 className={sectionHeading}>Sponsors & Partners</h2>
				</div>
				<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
					{sponsors.map((sponsor) => (
						<a
							key={sponsor.name}
							href={sponsor.href}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex flex-col items-center justify-center gap-4 p-12 border border-gray-100 bg-paper hover:border-gray-200 hover:shadow-sm transition-all duration-300 h-64 md:h-72"
						>
							<img
								src={sponsor.image}
								alt={`${sponsor.name} logo`}
								className="w-full h-full object-contain"
								loading="lazy"
							/>
							<span className="text-xs uppercase tracking-[0.25em] text-mist">
								{sponsor.role}
							</span>
						</a>
					))}
				</div>
			</section>
		</>
	);
}
