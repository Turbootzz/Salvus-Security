"use client";
import Button from "../common/buttons/Button";
import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, CalendarCheck, Store, ShoppingCart } from "lucide-react";

export default function Capabilities() {
  const [selected, setSelected] = useState<string>("Objectbeveiliging");
  const buttonNames = [
	{ icon: <Building2 className="mr-2 w-5 h-5" />, label: "Objectbeveiliging" },
	{ icon: <CalendarCheck className="mr-2 w-5 h-5" />, label: "Evenementenbeveiliging" },
	{ icon: <Store className="mr-2 w-5 h-5" />, label: "Horecaportiers" },
	{ icon: <ShoppingCart className="mr-2 w-5 h-5" />, label: "Winkelbeveiliging" },
  ];

  return (
	<section className="bg-background mt-13 mb-13">
	  <div className="container md:container-md lg:container-lg">
		<div className="md:flex">
		  <div className="md:block md:mr-44">
			<p className="text-gray_c font-semibold pb-3">
			  Laat ons het zware werk doen!
			</p>
			<h2 className="text-2xl md:text-4xl font-bold pb-3">
			  Hoe kunnen we helpen?
			</h2>
			<p className="text-gray-700 pb-6 text-base md:text-lg">
			  Wij bieden op maat gemaakte beveiliging voor zowel bedrijven als
			  particulieren. Of het nu gaat om persoonsbeveiliging,
			  bedrijfsbeveiliging of evenementenbeveiliging, onze ervaren
			  beveiligers zorgen voor uw veiligheid.
			</p>
			<Button
			  text="Bekijk onze diensten &rarr;"
			  onClick={() => alert("Klik!")}
			/>
		  </div>

		  <div className="bg-gray-100 flex flex-col gap-0 rounded-lg w-full">
			{/* Buttons */}
			<div className="flex px-0 mx-0 flex-col w-full">
			  {buttonNames.map((button, index) => (
				<button
				  key={button.label}
				  className={`py-4 transition-all duration-200 text-left pl-6 flex font-semibold text-sm ${
					selected === button.label
					  ? "text-black bg-gray-200"
					  : "bg-gray-100 "
				  } ${index === 0 ? "rounded-t-lg" : "rounded-none"}
				${index === 2 ? "rounded-b-xl" : "rounded-none"}`}
				  onClick={() => setSelected(button.label)}
				>
				  {button.icon}
				  {button.label}
				</button>
			  ))}
			</div>

			{/* Display Text with Fade Animation */}
			<div className="mt-6 text-lg font-semibold">
			  <motion.div
				key={selected}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.2 }}
			  >
				{selected === "Objectbeveiliging" && (
				  <div className="pl-8 text-base">
					<p className="mb-4">🥷 Diefstal- en inbraakpreventie</p>
					<p className="mb-4">⏱️ Snelle respons bij incidenten</p>
					<p className="mb-4">🦺 Verhoogd het veiligheidsgevoel</p>
					<p className="mb-4">🔒 Bescherming van bedrijfsmiddelen</p>
				  </div>
				)}
				{selected === "Evenementenbeveiliging" && (
				  <div className="pl-8 text-base">
					<p className="mb-4">🧑‍🤝‍🧑 Crowd control en ordehandhaving</p>
					<p className="mb-4">🥷 Preventie van criminaliteit</p>
					<p className="mb-4">⏱️ Snelle reactie bij noodsituaties</p>
					<p className="mb-4">😄 Verbeterde bezoekerservaring</p>
				  </div>
				)}
				{selected === "Horecaportiers" && (
				  <div className="pl-8 text-base">
					<p className="mb-4">✅ Toegangscontrole</p>
					<p className="mb-4">🥊 Conflictbeheersing</p>
					<p className="mb-4">🦺 Veiligheidsgevoel voor gasten en personeel</p>
					<p className="mb-4">💊 Drugs- en wapenscreening</p>
				  </div>
				)}
				{selected === "Winkelbeveiliging" && (
				  <div className="pl-8 text-base">
					<p className="mb-4">🥷 Diefstalpreventie</p>
					<p className="mb-4">⏱️ Snelle interventie bij incidenten</p>
					<p className="mb-4">🦺 Verhoogd het veiligheidsgevoel</p>
					<p className="mb-4">🔒 Schadebeperking en ordehandhaving</p>
				  </div>
				)}
				{!selected && <p></p>}
			  </motion.div>
			</div>
		  </div>
		</div>
	  </div>
	</section>
  );
}
