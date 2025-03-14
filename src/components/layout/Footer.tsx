"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import Link from "next/link";

export default function Footer() {
  return (
	<footer className="bg-dark-gray_c text-gray-100 py-10">
	  <div className="container mx-auto px-6 md:px-12 lg:px-20">
		<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
		  {/* Logo & Bedrijfsinfo */}
		  <div>
			<h2 className="text-2xl font-semibold">Salvus Security</h2>
			<p className="mt-2 text-gray-200">
			  Uw partner in professionele beveiligingsoplossingen.
			</p>
		  </div>

		  {/* Navigatie */}
		  <div>
			<h3 className="text-lg text-gray-100 font-semibold">Navigatie</h3>
			<ul className="mt-2 space-y-2">
			  <li><Link href="/" className="text-gray-200 hover:text-white">Home</Link></li>
			  <li><Link href="/#diensten" className="text-gray-200 hover:text-white">Diensten</Link></li>
			  <li><Link href="/over-ons" className="text-gray-200 hover:text-white">Over ons</Link></li>
			  <li><Link href="/werken-bij" className="text-gray-200 hover:text-white">Werken bij</Link></li>
			  <li><Link href="/contact" className="text-gray-200 hover:text-white">Contact</Link></li>
			</ul>
		  </div>

		  {/* Contactinformatie */}
		  <div>
			<h3 className="text-lg font-semibold text-gray-100">Contact</h3>
			<ul className="mt-2 space-y-2">
			  <li className="flex items-center gap-2 text-gray-200">
				<Phone size={18} /> {process.env.NEXT_PUBLIC_PHONE}
			  </li>
			  <li className="flex items-center gap-2 text-gray-200">
				<Mail size={18} /> info@salvussecurity.nl
			  </li>
			  <li className="flex items-center gap-2 text-gray-200">
				<MapPin size={18} /> Utrecht, Nederland
			  </li>
			</ul>
		  </div>
		</div>

		{/* Socials & Copyright */}
		<div className="mt-8 flex flex-col md:flex-row items-center justify-between">
		  <p className="text-gray-300 text-sm">© {new Date().getFullYear()} Savlus Security. Alle rechten voorbehouden.</p>
		  <div className="flex gap-4 mt-4 md:mt-0">
			<Link href="/" className="text-gray-100 hover:text-white"><SiFacebook size={20} /></Link>
			<Link href="/" className="text-gray-100 hover:text-white"><SiInstagram size={20} /></Link>
			<Link href="/" className="text-gray-100 hover:text-white"><SiLinkedin size={20} /></Link>
		  </div>
		</div>
	  </div>
	</footer>
  );
}