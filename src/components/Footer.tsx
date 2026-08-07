import { Link } from "@tanstack/react-router";

const columns = [
	{
		heading: "Community",
		links: [
			{ label: "Meetup", href: "https://www.meetup.com/citcbus/" },
			{ label: "Discord", href: "https://discord.com/invite/s9bQZBVduF" },
			{ label: "Events", to: "/events" },
			{ label: "CIT Serve", to: "/serve" },
		],
	},
	{
		heading: "Build",
		links: [
			{ label: "Projects", to: "/projects" },
			{ label: "#HACK Columbus", to: "/hack" },
			{
				label: "Contribute on GitHub",
				href: "https://github.com/citorg/main-website",
			},
		],
	},
	{
		heading: "Support",
		links: [
			{ label: "Donate", href: "https://onrealm.org/bwpc/-/form/give/cit" },
			// TODO: add Merch link when the Queensboro store launches.
		],
	},
];

const socials = [
	{ label: "Facebook", href: "https://facebook.com/citcbus" },
	{ label: "X", href: "https://twitter.com/citcbus" },
	{ label: "Instagram", href: "https://instagram.com/citcbus" },
	{ label: "LinkedIn", href: "https://www.linkedin.com/showcase/citcbus/" },
];

export default function Footer() {
	return (
		<footer className="bg-black text-white">
			<div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
				<div>
					<p className="font-bold uppercase tracking-widest mb-3">
						Christians in Tech
					</p>
					<p className="text-gray-400 text-sm leading-relaxed">
						A community at the intersection of faith and technology, gathering
						in Columbus, Ohio.
					</p>
				</div>

				{columns.map((col) => (
					<nav key={col.heading} aria-label={col.heading}>
						<p className="font-bold uppercase tracking-widest mb-4 text-sm text-gray-400">
							{col.heading}
						</p>
						<ul className="space-y-2">
							{col.links.map((link) => (
								<li key={link.label}>
									{"to" in link && link.to ? (
										<Link
											to={link.to}
											className="text-sm hover:text-gray-300 transition-colors"
										>
											{link.label}
										</Link>
									) : (
										<a
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm hover:text-gray-300 transition-colors"
										>
											{link.label}
										</a>
									)}
								</li>
							))}
						</ul>
					</nav>
				))}
			</div>

			<div className="border-t border-gray-800">
				<div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
					<span>
						© {new Date().getFullYear()} Christians in Tech. All rights
						reserved.
					</span>
					<div className="flex gap-6">
						{socials.map((s) => (
							<a
								key={s.label}
								href={s.href}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-white transition-colors"
							>
								{s.label}
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
