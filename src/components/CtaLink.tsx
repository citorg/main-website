import { Link } from "@tanstack/react-router";

type CtaLinkProps = {
	/** External URL. Use `to` instead for internal routes. */
	href?: string;
	/** Internal route path, e.g. "/serve". */
	to?: string;
	theme?: "light" | "dark" | "solid";
	/** "lg" widens the horizontal padding for anchor CTAs like the hero. */
	size?: "base" | "lg";
	children: React.ReactNode;
	className?: string;
};

const base =
	"inline-block border-2 py-4 text-center font-bold text-base uppercase tracking-wider no-underline transition-colors duration-200";

const sizes = {
	base: "px-8",
	lg: "px-10",
};

const themes = {
	light: "border-paper text-paper hover:bg-paper hover:text-ink",
	dark: "border-ink text-ink hover:bg-ink hover:text-paper",
	solid: "border-paper bg-paper text-ink hover:bg-transparent hover:text-paper",
};

/**
 * The site-wide call-to-action link. Renders an external anchor when given
 * `href`, or a router Link when given `to`.
 */
export default function CtaLink({
	href,
	to,
	theme = "dark",
	size = "base",
	children,
	className = "",
}: CtaLinkProps) {
	const classes = `${base} ${sizes[size]} ${themes[theme]} ${className}`;

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
