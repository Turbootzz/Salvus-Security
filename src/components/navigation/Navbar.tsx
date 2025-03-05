"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Phone from "@/components/common/icons/Phone";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

  return (
	<nav className="bg-background shadow-md fixed w-full z-10">
	  {/* Mobile phone banner */}
	  <div className="md:hidden bg-dark-header_c p-4 flex justify-center items-center text-center text-white">
		<div className="mx-2">
		  <Phone />
		</div>
		<p>030 - 123 45 67</p>
	  </div>

	  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div className="flex justify-between h-20 items-center">
		  {/* Logo */}
		  <div className="flex-shrink-0">
			<img
			  src="/images/logo.png"
			  width={156}
			  height={156}
			  alt="Picture of the author"
			/>
		  </div>

		  {/* Desktop Navigation */}
		  <div className="hidden md:flex md:items-center md:space-x-8">
			<Link href="/" className={`${pathname === "/" ? "text-black font-bold" : "text-gray-800 hover:text-black"}`}>
			  Home
			</Link>
			<Link
			  href="/#diensten"
			  className={`${pathname === "/#diensten" ? "text-black font-bold" : "text-gray-800 hover:text-black"}`}
			>
			  Diensten
			</Link>
			<Link
			  href="/over-ons"
			  className={`${pathname === "/over-ons" ? "text-black font-bold" : "text-gray-800 hover:text-black"}`}
			>
			  Over ons
			</Link>
			<Link
			  href="/werken-bij"
			  className={`${pathname === "/contact" ? "text-black font-bold" : "text-gray-800 hover:text-black"}`}
			>
			  Werken bij
			</Link>
			<Link
			  href="/contact"
			  className={`${pathname === "/contact" ? "text-black font-bold" : "text-gray-800 hover:text-black"}`}
			>
			  Contact
			</Link>
		  </div>

		  {/* Desktop CTA buttons */}
		  <div className="hidden md:flex md:items-center md:space-x-4">
			<Link
			  href="tel:0301234567"
			  className="flex items-center px-4 py-2 border border-black text-black rounded-full hover:bg-blue-50"
			>
			  <Phone />
			  <span className="ml-2">(030) - 1234567</span>
			</Link>
			<Link
			  href="/contact"
			  className="px-6 py-2 bg-black text-white font-medium rounded-full hover:bg-blue-800"
			>
			  Beveiliging binnen 24 uur
			</Link>
		  </div>

		  {/* Hamburger Menu (Mobile) */}
		  <div className="md:hidden flex items-center">
			<button
			  onClick={() => setIsOpen(!isOpen)}
			  className="text-gray-800 focus:outline-none flex items-center"
			>
			  {isOpen ? <X size={28} /> : <Menu size={28} />}
			</button>
		  </div>
		</div>
	  </div>

	  {/* Mobile Navigation Menu */}
	  <AnimatePresence>
		{isOpen && (
		  <motion.div
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			transition={{ duration: 0.2 }}
			className="md:hidden absolute w-full bg-white shadow-md"
			style={{
			  top: "calc(80px + 56px)",
			}} /* 80px (h-20) + approx 56px for phone banner */
		  >
			<Link
			  href="/"
			  className={`block px-4 py-3 ${pathname === "/" ? "text-black font-bold" : "text-gray-800 hover:bg-gray-100"}`}
			>
			  Home
			</Link>
			<Link
			  href="/#diensten"
			  className={`block px-4 py-3 ${pathname === "/#diensten" ? "text-black font-bold" : "text-gray-800 hover:bg-gray-100"}`}
			>
			  Diensten
			</Link>
			<Link
			  href="/over-ons"
			  className={`block px-4 py-3 ${pathname === "/over-ons" ? "text-black font-bold" : "text-gray-800 hover:bg-gray-100"}`}
			>
			  Over ons
			</Link>
			<Link
			  href="/werken-bij"
			  className={`block px-4 py-3 ${pathname === "/werken-bij" ? "text-black font-bold" : "text-gray-800 hover:bg-gray-100"}`}
			>
			  Werken bij
			</Link>
			<Link
			  href="/contact"
			  className={`block px-4 py-3 ${pathname === "/contact" ? "text-black font-bold" : "text-gray-800 hover:bg-gray-100"}`}
			>
			  Contact
			</Link>
		  </motion.div>
		)}
	  </AnimatePresence>
	</nav>
  );
}
