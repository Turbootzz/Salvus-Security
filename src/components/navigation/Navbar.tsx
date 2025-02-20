"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
	<nav className="bg-white shadow-md fixed w-full z-10">
	  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div className="flex justify-between h-20 items-center">
		  {/* Logo */}
		  <div className="flex-shrink-0">
			<Image
			  src="/images/logo1.png"
			  width={156}
			  height={156}
			  alt="Picture of the author"
			/>
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

		  {/* Navigation Links */}
		  <AnimatePresence>
			{isOpen && (
			  <motion.div
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -10 }}
				transition={{ duration: 0.2 }}
				className="absolute top-20 left-0 w-full bg-white md:static md:flex md:items-center md:space-x-6 md:w-auto shadow-md md:shadow-none"
			  >
				<a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 md:hover:bg-transparent md:mt-0">
				  Home
				</a>
				<a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 md:hover:bg-transparent md:mt-0">
				  Diensten
				</a>
				<a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 md:hover:bg-transparent md:mt-0">
				  Over ons
				</a>
				<a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 md:hover:bg-transparent md:mt-0">
				  Contat
				</a>
			  </motion.div>
			)}
		  </AnimatePresence>
		</div>
	  </div>
	</nav>
  );
}