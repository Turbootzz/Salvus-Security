"use client";
import Button from "../common/buttons/Button";
import { useState } from "react";
import { motion } from "framer-motion";
import { House, UserRound, Truck } from "lucide-react";

export default function Capabilities() {
  const [selected, setSelected] = useState<string>("Verhuizing");
  const buttonNames = [
	{ icon: <House className="mr-2 w-5 h-5" />, label: "Verhuizing" },
	{ icon: <UserRound className="mr-2 w-5 h-5" />, label: "Personeel" },
	{ icon: <Truck className="mr-2 w-5 h-5" />, label: "Transport" },
  ];

  return (
	<section className="bg-background mt-13 mb-13">
	  <div className="container lg:container-lg">
		<p className="text-secondary font-semibold pb-3">
		  Laat ons het zware werk doen!
		</p>
		<h2 className="text-2xl font-bold pb-3">Hoe kunnen we helpen?</h2>
		<p className="text-gray-700 pb-4">
		  Verhuisservice op maat voor particulieren, van kleine appartementen
		  tot grotere woningen. Professionele transportservice voor het
		  verplaatsen van jouw bezittingen naar je nieuwe woning of kantoor.
		</p>
		<Button
		  text="Bekijk onze diensten &rarr;"
		  onClick={() => alert("Klik!")}
		/>

		<div className="bg-light-blue_c flex flex-col gap-0 rounded-lg w-full">
		  {/* Buttons */}
		  <div className="flex px-0 mx-0 flex-col w-full">
			{buttonNames.map((button, index) => (
			  <button
				key={button.label}
				className={`py-4 transition-all duration-200 text-left pl-6 flex font-semibold text-sm ${
				  selected === button.label ? "text-black" : "bg-gray-blue_c "
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
			  {selected === "Verhuizing" && (
				<div className="pl-8 text-base">
				  <p className="mb-4">🏠 Particuliere verhuizing</p>
				  <p className="mb-4">🏢 Zakelijke verhuizing</p>
				  <p className="mb-4">🇪🇺 Internationale verhuizing</p>
				  <p className="mb-4">🎹 Speciale verhuizing</p>
				</div>
			  )}
			  {selected === "Personeel" && (
				<div className="pl-8 text-base">
				  <p className="mb-4">🎪 Op- & afbouw evenementen</p>
				  <p className="mb-4">🏬 Warehouse personeel</p>
				  <p className="mb-4">🦺 Ondersteuning in de bouw</p>
				  <p className="mb-4">📦 Uitruimingen</p>
				</div>
			  )}
			  {selected === "Transport" && (
				<div className="pl-8 text-base">
				  <p className="mb-4">💨 Spoedtransport</p>
				  <p className="mb-4">🖼️ Kunst transport</p>
				  <p className="mb-4">🎸 Speciaal transport</p>
				  <p className="mb-4">🌎 Internationaal transport </p>
				</div>
			  )}
			  {!selected && <p></p>}
			</motion.div>
		  </div>
		</div>
	  </div>
	</section>
  );
}
