"use client";
import AutomaticSlideshow from "../common/slideshows/AutomaticSlideshow";
import Button from "../common/buttons/Button";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Heading() {
  const topicWords = ["ervaren", "betrouwbare", "professionele", "behulpzame"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
	const interval = setInterval(() => {
	  setIndex((prev) => (prev + 1) % topicWords.length);
	}, 4000);

	return () => clearInterval(interval);
  }, [topicWords.length]);

  const images = [
	{
	  src: "/images/placeholder1.jpg",
	  alt: "Slide 1",
	},
	{
	  src: "/images/placeholder2.jpg",
	  alt: "Slide 2",
	},
	{
	  src: "/images/placeholder3.jpg",
	  alt: "Slide 3",
	},
  ];

  return (
	<section className="bg-dark-gray_c pt-20 pb-20">
	  <div className="container mx-auto">
		<div className="md:flex">
		<div className="md:block md:pr-5 mt-12">
		<h1 className="text-background text-3xl md:text-5xl font-bold mb-4 mr-5">
			Het&nbsp;
			<AnimatePresence mode="wait">
			  <motion.span
				key={topicWords[index]}
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 2, y: 0 }}
				exit={{ opacity: 0, y: 10 }}
				transition={{ duration: 0.5 }}
				className="inline-block"
			  >
				{topicWords[index]}
			  </motion.span>
			</AnimatePresence>{" "}
			<br />
			beveiligingsbedrijf
		</h1>
		<p className="text-background mb-7 leading-7 text-base md:text-lg">
		Uw Veilige Keuze: Professionele Beveiligers voor Ongeëvenaarde Bescherming
		</p>
		<Button text="Offerte aanvragen &rarr;" onClick={() => alert("Klik!")} />
		<div className="hidden md:flex md:items-center md:space-x-4">
	  <div className="flex items-center">
		<div className="bg-neutral-800 rounded-full w-6 h-6 flex items-center justify-center">
		  <svg
			className="w-4 h-4 text-white"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		  >
			<path
			  strokeLinecap="round"
			  strokeLinejoin="round"
			  strokeWidth="2.5"
			  d="M5 13l4 4L19 7"
			></path>
		  </svg>
		</div>
		<span className="ml-2 text-white text-sm font-medium">Snel geholpen</span>
	  </div>

	  {/* Second checkbox with text */}
	  <div className="flex items-center">
		<div className="bg-neutral-800 rounded-full w-6 h-6 flex items-center justify-center">
		  <svg
			className="w-4 h-4 text-white"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		  >
			<path
			  strokeLinecap="round"
			  strokeLinejoin="round"
			  strokeWidth="2.5"
			  d="M5 13l4 4L19 7"
			></path>
		  </svg>
		</div>
		<span className="ml-2 text-white text-sm font-medium">Ervaren personeel</span>
	  </div>
	</div>
		</div>
		<AutomaticSlideshow images={images} intervalTime={5000} />
		</div>
	</div>
	</section>
  );
}
