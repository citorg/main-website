import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../images/cit-logo.svg";

const navItems = [
	{ to: "/events", label: "Events" },
	{ to: "/serve", label: "Serve" },
	{ to: "/projects", label: "Projects" },
	{ to: "/hack", label: "#HACK" },
];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	// Close the mobile menu on Escape.
	useEffect(() => {
		if (!isOpen) return;
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") setIsOpen(false);
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [isOpen]);

	return (
		<>
			<header className="px-6 md:px-12 py-5 flex items-center justify-between bg-black text-white shadow-lg sticky top-0 z-40">
				<Link to="/" className="flex items-center" aria-label="CIT home">
					<img
						src={logo}
						alt="Christians in Tech logo"
						className="h-10 w-auto"
					/>
				</Link>

				{/* Desktop navigation */}
				<nav className="hidden md:flex items-center gap-8 uppercase tracking-wider font-bold text-sm">
					{navItems.map((item) => (
						<Link
							key={item.to}
							to={item.to}
							className="hover:text-gray-300 transition-colors [&.active]:underline underline-offset-8"
						>
							{item.label}
						</Link>
					))}
					<a
						href="https://www.meetup.com/citcbus/"
						target="_blank"
						rel="noopener noreferrer"
						className="border-2 border-white px-5 py-2 hover:bg-white hover:text-black transition-colors"
					>
						Join Us
					</a>
				</nav>

				{/* Mobile menu button */}
				<button
					type="button"
					onClick={() => setIsOpen(true)}
					className="p-2 md:hidden hover:bg-gray-800 rounded-lg transition-colors"
					aria-label="Open menu"
					aria-expanded={isOpen}
				>
					<Menu size={32} />
				</button>
			</header>

			{/* Backdrop */}
			{isOpen && (
				<button
					type="button"
					aria-label="Close menu"
					className="fixed inset-0 bg-black/60 z-40 md:hidden cursor-default"
					onClick={() => setIsOpen(false)}
				/>
			)}

			{/* Mobile drawer */}
			<aside
				className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-black text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col md:hidden ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				}`}
				aria-hidden={!isOpen}
			>
				<div className="flex items-center justify-end p-4 border-b border-gray-700">
					<button
						type="button"
						onClick={() => setIsOpen(false)}
						className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
						aria-label="Close menu"
					>
						<X size={24} />
					</button>
				</div>

				<nav className="flex-1 p-4 overflow-y-auto">
					{navItems.map((item) => (
						<Link
							key={item.to}
							to={item.to}
							onClick={() => setIsOpen(false)}
							className="flex items-center gap-3 p-3 rounded-lg hover:bg-white hover:text-black transition-colors mb-2 font-medium"
						>
							{item.label}
						</Link>
					))}
					<a
						href="https://www.meetup.com/citcbus/"
						target="_blank"
						rel="noopener noreferrer"
						className="mt-4 block border-2 border-white p-3 text-center font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
					>
						Join Us
					</a>
				</nav>
			</aside>
		</>
	);
}
