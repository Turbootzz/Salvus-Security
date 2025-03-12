import ServiceCard from "../common/cards/ServiceCard";
import { Building2, CalendarCheck, Store, ShoppingCart } from "lucide-react";

export default function Services() {
  return (
	<section className="bg-gray-200 mt-13">
	  <div className="container lg:container-lg pt-10">
		<h4
		  id="diensten"
		  className="text-gray-900 border text-sm border-gray-800 rounded-4xl px-3 py-1 inline-block mb-4 scroll-mt-40 md:scroll-mt-25"
		>
		  Onze diensten
		</h4>
		<h2 className="text-2xl text-gray-900 md:text-4xl font-bold mb-3 md:max-w-100">
		  Wat
		  <span className="text-gray-600"> bieden</span> wij aan?
		</h2>
		<p className="text-gray-900 text-base md:text-lg max-w-180">
		Wij bieden diverse beveiligingsdiensten aan zoals object-, evenementen-, winkelbeveiliging en mobiele surveillance. 
		Onze ervaren beveiligers zorgen voor een veilige omgeving en minimaliseren risico&apos;s met 
		maatwerkoplossingen en moderne technieken.
		</p>
		<div className="md:grid md:grid-cols-3 md:gap-4 md:py-10">
		  <div className="py-4 h-full">
			<ServiceCard
			  className="mx-auto h-full"
			  icon={<Building2 size={32} className="text-gray-900" />}
			  title="Objecten"
			  description="Uw bedrijf, onze beveiligers – samen sterk in veiligheid."
			  extendedDescription="
				Van kantoren tot bouwplaatsen: wij bieden maatwerk beveiliging met professionele, getrainde beveiligers. 
				Voorkom risico’s en bescherm uw onderneming met onze betrouwbare beveiligingsdiensten."
			  linkText="Lees meer"
			  href="/services/particuliere-verhuizing"
			/>
		  </div>
		  <div className="py-4 h-full">
			<ServiceCard
			  className="mx-auto h-full"
			  icon={<CalendarCheck size={32} className="text-gray-900" />}
			  title="Evenementen"
			  description="Een geslaagd evenement begint met veiligheid."
			  extendedDescription="
				Een zorgeloos evenement voor uw bezoekers? 
				Onze ervaren evenementenbeveiligers zorgen voor een veilige en gecontroleerde omgeving, 
				zodat uw event soepel verloopt."
			  linkText="Lees meer"
			  href="/services/particuliere-verhuizing"
			/>
		  </div>
		  <div className="py-4 h-full">
			<ServiceCard
			  className="mx-auto h-full"
			  icon={<Store size={32} className="text-gray-900" />}
			  title="Horeca portiers"
			  description="Een veilig uitgaansleven begint bij de deur."
			  extendedDescription="
			  	Onze ervaren en gastvrije horeca-portiers zorgen voor een prettige en veilige sfeer in uw zaak. 
				Professioneel, klantvriendelijk en doortastend wanneer het nodig is."
			  linkText="Lees meer"
			  href="/services/particuliere-verhuizing"
			/>
		  </div>
		  <div className="py-4 md:col-start-2 h-full">
			<ServiceCard
			  className="mx-auto h-full"
			  icon={<ShoppingCart size={32} className="text-gray-900" />}
			  title="Winkelbeveiliging"
			  description="Diefstal voorkomen in plaats van genezen."
			  extendedDescription="
			  	Onze beveiligers zijn getraind in het herkennen van verdacht gedrag en grijpen in voordat schade ontstaat. 
				Minder verliezen, meer veiligheid!"
			  linkText="Lees meer"
			  href="/services/particuliere-verhuizing"
			/>
		  </div>
		</div>
	  </div>
	</section>
  );
}
