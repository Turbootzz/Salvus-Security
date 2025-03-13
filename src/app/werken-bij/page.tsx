import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceCard from "@/components/common/cards/ServiceCard";
import { Briefcase, UserRound } from "lucide-react";

export default function WerkenBij() {
  return (
	<>
	<Header />
	<main className="flex-grow pt-20 md:pt-7 pb-8 md:pb-15">
		<section className="bg-neutral-500 mt-13">
			<div className="container lg:container-lg pt-10">
				<h4 className="text-gray-900 border text-sm border-gray-800 rounded-4xl px-3 py-1 inline-block mb-4">
					Werken bij Salvus Security Agency
				</h4>
				<h2 className="text-2xl text-background md:text-4xl font-bold mb-3 md:max-w-80">
					Word onderdeel van ons <span className="text-neutral-800">beveiligingsteam</span>
				</h2>
				<p className="text-background text-base md:text-lg max-w-120">
					Wij zijn altijd op zoek naar enthousiaste en betrouwbare beveiligers. 
					Of je nu als ZZP&apos;er wilt werken of in loondienst, bij ons kun je rekenen op een professionele werkomgeving.
				</p>
				<div className="md:grid md:grid-cols-2 md:gap-4 md:py-10">
					<div className="py-4">
						<ServiceCard
							className="mx-auto"
							icon={<Briefcase size={32} className="text-gray-800" />}
							title="ZZP Beveiliger"
							description="Als ZZP beveiliger bij Salvus Security krijg je de vrijheid om je eigen uren in te delen. Je werkt op verschillende locaties en bent verantwoordelijk voor je eigen administratie."
							linkText="Solliciteer als ZZP'er"
							href="/zzp-contact"
						/>
					</div>
					<div className="py-4">
						<ServiceCard
							className="mx-auto"
							icon={<UserRound size={32} className="text-gray-800" />}
							title="Beveiliger in loondienst"
							description="Als beveiliger in loondienst krijg je een vast contract met alle arbeidsvoorwaarden. Je werkt op vaste locaties en krijgt professionele begeleiding."
							linkText="Solliciteer in loondienst"
							href="/loondienst-contact"
						/>
					</div>
				</div>
			</div>
		</section>

		<section className="bg-background mt-13 mb-13">
			<div className="container lg:container-lg">
				<h2 className="text-2xl md:text-4xl font-bold mb-8">Waarom werken bij Salvus Security?</h2>
				<div className="grid md:grid-cols-3 gap-6">
					<div className="bg-gray-200 p-6 rounded-xl">
						<h3 className="text-xl font-semibold mb-3">Professionele begeleiding</h3>
						<p className="text-gray-700">Je krijgt persoonlijke begeleiding en training om jezelf te ontwikkelen als beveiliger.</p>
					</div>
					<div className="bg-gray-200 p-6 rounded-xl">
						<h3 className="text-xl font-semibold mb-3">Flexibele werktijden</h3>
						<p className="text-gray-700">Wij bieden flexibele werktijden die passen bij jouw agenda en beschikbaarheid.</p>
					</div>
					<div className="bg-gray-200 p-6 rounded-xl">
						<h3 className="text-xl font-semibold mb-3">Competitieve vergoeding</h3>
						<p className="text-gray-700">Een marktconforme vergoeding met extra voordelen voor onze medewerkers.</p>
					</div>
				</div>
			</div>
		</section>
	</main>
	<Footer />
	</>
	);
}
