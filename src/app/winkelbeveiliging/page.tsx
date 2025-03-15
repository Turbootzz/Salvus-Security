import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/buttons/Button";
import Link from "next/link";
import Image from "next/image";

export default function Winkelbeveiliging() {
  return (
	<>
	  <Header />
	  <main className="flex-grow pt-40 md:pt-35 pb-8 md:pb-15">
		<div className="mx-auto px-4 md:px-6 lg:px-16 xl:px-32 2xl:px-64">
		  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 lg:gap-y-20">
			<div>
			  <h1 className="text-4xl font-bold pb-4">Winkelbeveiliging</h1>
			  <p className="text-base pb-6">
				Winkelbeveiliging is cruciaal voor het beschermen van uw winkel
				tegen diefstal, fraude en andere veiligheidsrisico&apos;s. Salvus
				Security Agency levert winkelbeveiligers die zorgen voor een
				veilige winkelomgeving, zowel voor klanten als personeel. Onze
				beveiligers zijn getraind in het herkennen van verdachte
				gedragingen, het voorkomen van winkeldiefstal en het handhaven
				van de orde in de winkel. Ze dragen bij aan het creëren van een
				vertrouwde en veilige winkelervaring, waardoor u zich kunt
				focussen op de groei van uw bedrijf.
			  </p>
			  <Link href="/contact">
				<Button text="Offerte aanvragen &rarr;" />
			  </Link>
			</div>
			<div>
			  <Image
				className="rounded-2xl shadow-xl dark:shadow-gray-600 xl:ml-24"
				src="/images/winkelbeveiliging1.jpeg"
				alt="Winkelbeveiliging"
				width={400}
				height={400}
			  />
			</div>
			<div>
			  <Image
				className="hidden md:block rounded-2xl shadow-xl dark:shadow-gray-600 md:mr-24"
				src="/images/winkelbeveiliging2.jpeg"
				alt="Winkelbeveiliging"
				width={400}
				height={400}
			  />
			</div>
			<div>
			  <h2 className="text-2xl font-bold pb-4">
				Waarom Salvus security Agency?
			  </h2>
			  <ul className="list-disc pl-4">
				<li>Winkeldiefstalpreventie</li>
				<li>Verdachte activiteiten signaleren</li>
				<li>Beveiligingscamera&apos;s toezicht</li>
				<li>Beveiligingsteam op locatie</li>
				<li>Preventieve maatregelen</li>
				<li>Klantenservice en veiligheid</li>
				<li>Incidentenrapportage en opvolging</li>
			  </ul>
			</div>
			<div>
			  <Image
				className="md:hidden block rounded-2xl shadow-xl dark:shadow-gray-600"
				src="/images/winkelbeveiliging2.jpeg"
				alt="Winkelbeveiliging"
				width={400}
				height={400}
			  />
			</div>
		  </div>
		</div>
	  </main>
	  <Footer />
	</>
  );
}
