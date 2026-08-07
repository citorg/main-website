type EyebrowProps = {
	children: React.ReactNode;
	/** "dark" for light backgrounds (mist text); "light" for ink backgrounds. */
	tone?: "dark" | "light";
	className?: string;
};

/**
 * The small uppercase label that opens every section (see docs/DESIGN.md,
 * "Section rhythm"): eyebrow → heading → body → single CTA.
 */
export default function Eyebrow({
	children,
	tone = "dark",
	className = "",
}: EyebrowProps) {
	const color = tone === "dark" ? "text-mist" : "text-gray-400";
	return (
		<p
			className={`text-xs md:text-[13px] font-semibold uppercase tracking-[0.25em] ${color} ${className}`}
		>
			{children}
		</p>
	);
}
