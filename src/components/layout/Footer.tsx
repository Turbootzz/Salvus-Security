"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
	<footer className="bg-dark-blue_c text-white py-10">
	  <div className="container mx-auto px-6 md:px-12 lg:px-20">
		<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
		  {/* Logo & Bedrijfsinfo */}
		  <div>
			<h2 className="text-2xl font-semibold">Salvus Security</h2>
			<p className="mt-2 text-gray-400">
			  Uw partner in professionele beveiligingsoplossingen.
			</p>
		  </div>

		  {/* Navigatie */}
		  <div>
			<h3 className="text-lg font-medium">Navigatie</h3>
			<ul className="mt-2 space-y-2">
			  <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
			  <li><a href="#" className="text-gray-400 hover:text-white">Diensten</a></li>
			  <li><a href="#" className="text-gray-400 hover:text-white">Over ons</a></li>
			  <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
			</ul>
		  </div>

		  {/* Contactinformatie */}
		  <div>
			<h3 className="text-lg font-medium">Contact</h3>
			<ul className="mt-2 space-y-2">
			  <li className="flex items-center gap-2 text-gray-400">
				<Phone size={18} /> +31 6 12345678
			  </li>
			  <li className="flex items-center gap-2 text-gray-400">
				<Mail size={18} /> info@salvussecurity.nl
			  </li>
			  <li className="flex items-center gap-2 text-gray-400">
				<MapPin size={18} /> Amsterdam, Nederland
			  </li>
			</ul>
		  </div>
		</div>

		{/* Socials & Copyright */}
		<div className="mt-8 flex flex-col md:flex-row items-center justify-between">
		  <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Savlus Security. Alle rechten voorbehouden.</p>
		  <div className="flex gap-4 mt-4 md:mt-0">
			<a href="#" className="text-gray-400 hover:text-white"><SiFacebook size={20} /></a>
			<a href="#" className="text-gray-400 hover:text-white"><SiInstagram size={20} /></a>
			<a href="#" className="text-gray-400 hover:text-white"><SiLinkedin size={20} /></a>
		  </div>
		</div>
	  </div>
	</footer>
  );
}