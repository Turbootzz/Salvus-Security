"use client";
import AutomaticSlideshow from "../common/slideshows/AutomaticSlideshow";
import Image from "next/image";
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
  }, []);

  const images = [
	{
	  src: "/images/placeholder1.jpg",
	  alt: "Slide 1",
	},
	{
	  src: "/images/placeholder2.webp",
	  alt: "Slide 2",
	},
	{
	  src: "/images/placeholder3.jpeg",
	  alt: "Slide 3",
	},
  ];

  return (
	<section className="bg-dark-blue_c pt-35 pb-20">
	  <div className="container lg:container-lg">
		<h1 className="text-background text-3xl font-bold mt-12 mb-4">
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
			en <span className="text-secondary">snelle</span> verhuisbedrijf
		</h1>
		<p className="text-background mb-7 leading-7">
		  Op zoek naar een betrouwbaar verhuisbedrijf? Quick Move biedt
		  full-service verhuizingen, sterk personeel op locatie, verhuur van
		  verhuisliften en speciaal transport.
		</p>
		
		<Button text="Binnen 24 uur een offerte op maat &rarr;" onClick={() => alert("Klik!")} />
		<AutomaticSlideshow images={images} intervalTime={5000} />
	  </div>
	</section>
  );
}
