import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/buttons/Button";
import Link from "next/link";
import Image from "next/image";

export default function Objecten() {
  return (
	<>
	  <Header />
	  <main className="flex-grow pt-40 md:pt-35 pb-8 md:pb-15">
		<div className="mx-auto px-4 md:px-1 xl:px-32 2xl:px-64">
		  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 lg:gap-y-20">
			<div>
			  <h1 className="text-4xl font-bold pb-4">Objectbeveiligers</h1>
			  <p className="text-base pb-6">
				Objectbeveiliging is een essentiële dienst voor het beschermen
				van gebouwen, terreinen en andere eigendommen tegen inbraak,
				vandalisme en andere risico&apos;s. Salvus Security Agency biedt
				professionele objectbeveiligers die zorgen voor de veiligheid
				van uw pand, zowel binnen als buiten. Onze beveiligers zijn
				getraind om snel te reageren op incidenten, verdachte
				activiteiten te signaleren en de juiste protocollen te volgen om
				schade en verlies te voorkomen. Met Salvus als partner kunt u
				erop vertrouwen dat uw objecten veilig zijn, ongeacht de tijd
				van de dag of nacht.
			  </p>
			  <Link href="/contact">
				<Button text="Offerte aanvragen &rarr;" />
			  </Link>
			</div>
			<div>
			  <Image
				className="rounded-2xl shadow-xl dark:shadow-gray-600 xl:ml-24"
				src="/images/object-beveiliging.jpeg"
				alt="Objectbeveiliging"
				width={400}
				height={400}
			  />
			</div>
			<div>
			  <Image
				className="hidden md:block rounded-2xl shadow-xl dark:shadow-gray-600 md:mr-24"
				src="/images/object-beveiliging2.jpeg"
				alt="Objectbeveiliging"
				width={400}
				height={400}
			  />
			</div>
			<div>
			  <h2 className="text-2xl font-bold pb-4">
				Waarom Salvus security Agency?
			  </h2>
			  <ul className="list-disc pl-4">
				<li>Inbraakpreventie</li>
				<li>24/7 Toezicht</li>
				<li>Risicoanalyse</li>
				<li>Terreinbeveiliging</li>
				<li>Objectmonitoring</li>
				<li>Snel handelen bij incidenten</li>
			  </ul>
			</div>
			<div>
			  <Image
				className="md:hidden block rounded-2xl shadow-xl dark:shadow-gray-600"
				src="/images/object-beveiliging2.jpeg"
				alt="Objectbeveiliging"
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
