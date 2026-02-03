import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../CIT Logo.svg";

const smoothScroll = (targetId: string, onClose?: () => void) => {
	const element = document.getElementById(targetId);
	if (element) {
		const headerOffset = 80; // Account for sticky header height
		const elementPosition = element.getBoundingClientRect().top;
		const offsetPosition = elementPosition + window.scrollY - headerOffset;

		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth",
		});

		// Close mobile menu if provided
		if (onClose) {
			onClose();
		}
	}
};
export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<header className="px-6 md:px-12 py-6 flex items-center justify-between bg-black text-white shadow-lg sticky top-0 z-40">
				<Link to="/" className="flex items-center">
					<img src={logo} alt="logo of CIT" className="h-10 w-auto" />
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center space-x-8 uppercase tracking-wider font-bold text-sm">
					<button
						onClick={() => smoothScroll("about-us")}
						className="hover:text-gray-300 transition-colors bg-transparent border-none text-white cursor-pointer"
					>
						About Us
					</button>
					<button
						onClick={() => smoothScroll("get-involved")}
						className="hover:text-gray-300 transition-colors bg-transparent border-none text-white cursor-pointer"
					>
						Get Involved
					</button>
					<button
						onClick={() => smoothScroll("sponsors-partners")}
						className="hover:text-gray-300 transition-colors bg-transparent border-none text-white cursor-pointer"
					>
						Sponsors & Partners
					</button>
				</nav>

				{/* Mobile Hamburger Button */}
				<button
					type="button"
					onClick={() => setIsOpen(true)}
					className="p-2 md:hidden hover:bg-black rounded-lg transition-colors"
					aria-label="Open menu"
				>
					<Menu size={32} />
				</button>
			</header>

			<aside
				className={`fixed top-0 left-0 h-full w-80 bg-black text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<div className="flex items-center justify-between p-4 border-b border-gray-700">
					<button
						type="button"
						onClick={() => setIsOpen(false)}
						className="p-2 hover:bg-black rounded-lg transition-colors"
						aria-label="Close menu"
					>
						<X size={24} />
					</button>
				</div>

				<nav className="flex-1 p-4 overflow-y-auto">
					<button
						onClick={() => smoothScroll("about-us", () => setIsOpen(false))}
						className="flex items-center gap-3 p-3 rounded-lg bg-black text-white hover:bg-white hover:text-black transition-colors mb-2 w-full text-left border-none cursor-pointer"
					>
						<span className="font-medium">About Us</span>
					</button>
					<button
						onClick={() => smoothScroll("get-involved", () => setIsOpen(false))}
						className="flex items-center gap-3 p-3 rounded-lg bg-black text-white hover:bg-white hover:text-black transition-colors mb-2 w-full text-left border-none cursor-pointer"
					>
						<span className="font-medium">Get Involved</span>
					</button>
					<button
						onClick={() =>
							smoothScroll("sponsors-partners", () => setIsOpen(false))
						}
						className="flex items-center gap-3 p-3 rounded-lg bg-black text-white hover:bg-white hover:text-black transition-colors mb-2 w-full text-left border-none cursor-pointer"
					>
						<span className="font-medium">Sponsors & Partners</span>
					</button>
				</nav>
			</aside>
		</>
	);
}
