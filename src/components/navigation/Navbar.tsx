"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
//import Phone from "@/components/common/icons/Phone";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const [showDienstenDropdown, setShowDienstenDropdown] = useState(false);
	const [showMobileDienstenDropdown, setShowMobileDienstenDropdown] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const mobileDropdownRef = useRef<HTMLDivElement>(null);

	// Close dropdown when clicking outside
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setShowDienstenDropdown(false);
			}
			if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target as Node)) {
				setShowMobileDienstenDropdown(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const diensten = [
		{ name: "Objectbeveiliging", path: "/objecten" },
		{ name: "Evenementenbeveiliging", path: "/evenementen" },
		{ name: "Horecaportiers", path: "/horeca-portiers" },
		{ name: "Winkelbeveiliging", path: "/winkelbeveiliging" },
	];

  return (
	<nav className="bg-background shadow-md fixed w-full z-10">
	  {/* Mobile phone banner */}
	  {/* <div className="md:hidden bg-dark-header_c p-4 flex justify-center items-center text-center text-white">
		<div className="mx-2">
		  <Phone />
		</div>
		<p>030 - 123 45 67</p>
	  </div> */}

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
		  <div className="hidden lg:flex md:items-center md:space-x-8">
			<Link href="/" className={`${pathname === "/" ? "text-black font-bold" : "text-gray-800 hover:text-black"}`}>
			  Home
			</Link>
			<div className="relative" ref={dropdownRef}>
				<button 
					onClick={() => setShowDienstenDropdown(!showDienstenDropdown)}
					className={`flex items-center ${pathname.startsWith("/diensten") ? "text-black font-bold" : "text-gray-800 hover:text-black"}`}
				>
					Diensten
					<ChevronDown className={`ml-1 w-4 h-4 transition-transform ${showDienstenDropdown ? 'rotate-180' : ''}`} />
				</button>
				{showDienstenDropdown && (
					<div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-10">
						{diensten.map((dienst) => (
							<Link
								key={dienst.name}
								href={dienst.path}
								className={`block px-4 py-2 text-sm ${pathname === dienst.path ? "bg-gray-100 text-black font-medium" : "text-gray-800 hover:bg-gray-100"}`}
								onClick={() => setShowDienstenDropdown(false)}
							>
								{dienst.name}
							</Link>
						))}
					</div>
				)}
			</div>
			<Link
			  href="/over-ons"
			  className={`${pathname === "/over-ons" ? "text-black font-bold" : "text-gray-800 hover:text-black"}`}
			>
			  Over ons
			</Link>
			<Link
			  href="/werken-bij"
			  className={`${pathname === "/werken-bij" ? "text-black font-bold" : "text-gray-800 hover:text-black"}`}
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
		  <div className="hidden lg:flex md:items-center md:space-x-4">
			{/* <Link
			  href="tel:0301234567"
			  className="flex items-center px-4 py-2 border border-black text-black rounded-full hover:bg-blue-50"
			>
			  <Phone />
			  <span className="ml-2">(030) - 1234567</span>
			</Link> */}
			<Link
			  href="/contact"
			  className="px-6 py-2 bg-neutral-800 text-white font-medium rounded-full hover:bg-black"
			>
			  Offerte aanvragen
			</Link>
		  </div>

		  {/* Hamburger Menu (Mobile) */}
		  <div className="lg:hidden flex items-center">
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
			className="lg:hidden absolute w-full bg-white shadow-md"
			// style={{
			//   top: "calc(80px + 56px)",
			// }} /* 80px (h-20) + approx 56px for phone banner */
		  >
			<Link
			  href="/"
			  className={`block px-4 py-3 ${pathname === "/" ? "text-black font-bold" : "text-gray-800 hover:bg-gray-100"}`}
			>
			  Home
			</Link>
			<div className="block px-4 py-3 text-gray-800" ref={mobileDropdownRef}>
				<button 
					onClick={() => setShowMobileDienstenDropdown(!showMobileDienstenDropdown)}
					className="flex items-center w-full text-left"
				>
					Diensten
					<ChevronDown className={`ml-1 w-4 h-4 transition-transform ${showMobileDienstenDropdown ? 'rotate-180' : ''}`} />
				</button>
				{showMobileDienstenDropdown && (
					<div className="pl-4 mt-2 space-y-1">
						{diensten.map((dienst) => (
							<Link
								key={dienst.name}
								href={dienst.path}
								className={`block py-2 text-sm ${pathname === dienst.path ? "text-black font-bold" : "text-gray-700 hover:text-black"}`}
								onClick={() => {
									setShowMobileDienstenDropdown(false);
									setIsOpen(false);
								}}
							>
								{dienst.name}
							</Link>
						))}
					</div>
				)}
			</div>
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
