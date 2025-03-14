import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/buttons/Button";
import Link from "next/link";
import Image from "next/image";

export default function HorecaPortiers() {
  return (
	<>
	  <Header />
	  <main className="flex-grow pt-40 md:pt-35 pb-8 md:pb-15">
		<div className="mx-auto px-4 md:px-1 xl:px-32 2xl:px-64">
		  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 lg:gap-y-20">
			<div>
			  <h1 className="text-4xl font-bold pb-4">Horeca Portiers</h1>
			  <p className="text-base pb-6">
				Onze portiers zorgen voor de veiligheid en het welzijn van uw
				gasten en medewerkers bij de ingang van uw bedrijfspand of
				evenementenlocatie. Salvus Security Agency biedt getrainde
				portiers die niet alleen verantwoordelijk zijn voor het
				controleren van toegang en het naleven van toegangsregels, maar
				ook voor het waarborgen van een professionele en gastvrije
				sfeer. Ze zijn alert, vriendelijk en altijd bereid om te
				reageren op de behoeften van bezoekers en klanten, zodat u zich
				kunt concentreren op het runnen van uw bedrijf of evenement.
			  </p>
			  <Link href="/contact">
				<Button text="Offerte aanvragen &rarr;" />
			  </Link>
			</div>
			<div>
			  <Image
				className="rounded-2xl shadow-xl dark:shadow-gray-600 xl:ml-24"
				src="/images/evenement-security.jpeg"
				alt="Horeca Portiers"
				width={400}
				height={400}
			  />
			</div>
			<div>
			  <Image
				className="hidden md:block rounded-2xl shadow-xl dark:shadow-gray-600 md:mr-24"
				src="/images/security3.jpeg"
				alt="Horeca Portiers"
				width={400}
				height={400}
			  />
			</div>
			<div>
			  <h2 className="text-2xl font-bold pb-4">
				Waarom Salvus security Agency?
			  </h2>
			  <ul className="list-disc pl-4">
				<li>Toegangscontrole</li>
				<li>Identificatieprocedures</li>
				<li>Orderhandhaving</li>
				<li>Veiligheidscontrole</li>
				<li>Gastvrijheid en service</li>
				<li>Communicatie en rapportage</li>
				<li>Handelen bij ongewenste incidenten</li>
			  </ul>
			</div>
			<div>
			  <Image
				className="md:hidden block rounded-2xl shadow-xl dark:shadow-gray-600"
				src="/images/security3.jpeg"
				alt="Horeca Portiers"
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
