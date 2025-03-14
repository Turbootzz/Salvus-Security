import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/buttons/Button";
import Link from "next/link";
import Image from "next/image";
export default function Evenementen() {
  return (
	<>
	  <Header />
	  <main className="flex-grow pt-40 md:pt-35 pb-8 md:pb-15">
		<div className="mx-auto px-4 md:px-1 xl:px-32 2xl:px-64">
		  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 lg:gap-y-20">
			<div>
			  <h1 className="text-4xl font-bold pb-4">
				Evenementenbeveiligers
			  </h1>
			  <p className="text-base pb-6">
				De veiligheid van uw evenement is van groot belang. Of het nu gaat
				om een concert, festival, congres of sportevenement, Salvus Security
				Agency levert gespecialiseerde evenementenbeveiligers die zorgen
				voor een vlotte en veilige organisatie van uw evenement. Onze
				beveiligers zijn getraind om proactief te handelen in noodsituaties,
				toezicht te houden op toegangspunten en de orde te bewaren. Ze
				bieden niet alleen fysieke beveiliging, maar ook klantgerichte
				service om een positieve ervaring voor bezoekers en medewerkers te
				garanderen.
			  </p>
			  <Link href="/contact">
				<Button text="Offerte aanvragen &rarr;" />
			  </Link>
			</div>
			<div>
			  <Image 
				className="rounded-2xl shadow-xl dark:shadow-gray-600 xl:ml-24" 
				src="/images/evenement-security.jpeg" 
				alt="Evenementenbeveiligers" 
				width={400} 
				height={400} 
			  />
			</div>
			<div>
			  <Image 
				className="hidden md:block rounded-2xl shadow-xl dark:shadow-gray-600 md:mr-24" 
				src="/images/security3.jpeg" 
				alt="Evenementenbeveiligers" 
				width={400} 
				height={400} 
			  />
			</div>
			<div>
			  <h2 className="text-2xl font-bold pb-4">Waarom Salvus security Agency?</h2>
			  <ul className="list-disc pl-4">
				<li>Toegangscontrole</li>
				<li>Crowd management</li>
				<li>Gedragsanalyse</li>
				<li>Noodplanimplementatie</li>
				<li>De-escalatie technieken</li>
				<li>Preventieve maatregelen</li>
			  </ul>
			</div>
			<div>
			  <Image 
				className="md:hidden block rounded-2xl shadow-xl dark:shadow-gray-600" 
				src="/images/security3.jpeg" 
				alt="Evenementenbeveiligers" 
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
