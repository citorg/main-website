import { Link } from "@tanstack/react-router";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../CIT Logo.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="p-4 flex items-center bg-black text-white shadow-lg">
        <h1 className="ml-4 text-xl font-semibold">
          <Link to="/">
            <img src={logo} alt="logo of CIT" className="h-auto w-22 p-0" />
          </Link>
        </h1>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="p-2 hover:bg-black rounded-lg transition-colors fixed right-1"
          aria-label="Open menu"
        >
          <Menu size={32} />
        </button>
      </header>

      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-black text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "-translate-x-full"
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
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg bg-black text-white hover:bg-white hover:text-black transition-colors mb-2"
          // uncomment once these actually go to their proper routes
          // activeProps={{
          //   className:
          //     "flex items-center gap-3 p-3 rounded-lg bg-gray-500 hover:bg-cyan-700 transition-colors mb-2",
          // }}
          >
            <span className="font-medium">About Us</span>
          </Link>
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg bg-black text-white hover:bg-white hover:text-black transition-colors mb-2"
          // activeProps={{
          //   className:
          //     "flex items-center gap-3 p-3 rounded-lg bg-gray-500 hover:bg-cyan-700 transition-colors mb-2",
          // }}
          >
            <span className="font-medium">Get Involved</span>
          </Link>
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg bg-black text-white hover:bg-white hover:text-black transition-colors mb-2"
          // activeProps={{
          //   className:
          //     "flex items-center gap-3 p-3 rounded-lg bg-gray-500 hover:bg-cyan-700 transition-colors mb-2",
          // }}
          >
            <span className="font-medium">Sponsors & Partners</span>
          </Link>
        </nav>
      </aside>
    </>
  );
}
