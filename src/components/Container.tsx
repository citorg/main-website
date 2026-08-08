import type { ReactNode } from "react";

/**
 * The site's one shared content container: max-w-7xl, centered, with the
 * horizontal gutters inside the constrained box. Every piece of aligned
 * content — header, NextEvent, page sections, footer — must use this so
 * left/right content edges sit on the same vertical line at every viewport.
 * Outer sections keep backgrounds and vertical padding only, never px-*.
 */
export default function Container({
	className = "",
	children,
}: {
	className?: string;
	children: ReactNode;
}) {
	return (
		<div className={`max-w-7xl mx-auto px-6 md:px-12 ${className}`}>
			{children}
		</div>
	);
}
