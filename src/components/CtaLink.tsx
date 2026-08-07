import { Link } from "@tanstack/react-router";

type CtaLinkProps = {
	/** External URL. Use `to` instead for internal routes. */
	href?: string;
	/** Internal route path, e.g. "/serve". */
	to?: string;
	theme?: "light" | "dark";
	children: React.ReactNode;
	className?: string;
};

const base =
	"inline-block border-2 px-8 py-4 text-center font-bold text-base uppercase tracking-wider no-underline transition-colors duration-200";

const themes = {
	light: "border-paper text-paper hover:bg-paper hover:text-ink",
	dark: "border-ink text-ink hover:bg-ink hover:text-paper",
};

/**
 * The site-wide call-to-action link. Renders an external anchor when given
 * `href`, or a router Link when given `to`.
 */
export default function CtaLink({
	href,
	to,
	theme = "dark",
	children,
	className = "",
}: CtaLinkProps) {
	const classes = `${base} ${themes[theme]} ${className}`;

	if (to) {
		return (
			<Link to={to} className={classes}>
				{children}
			</Link>
		);
	}

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={classes}
		>
			{children}
		</a>
	);
}
