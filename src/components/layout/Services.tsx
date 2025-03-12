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
		<h2 className="text-2xl text-gray-900 md:text-4xl font-bold mb-3 md:max-w-80">
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
			  description="Uw bedrijf, onze beveiligers – samen sterk in veiligheid
				Van kantoren tot bouwplaatsen: wij bieden maatwerk beveiliging met professionele, getrainde beveiligers. 
				Voorkom risico’s en bescherm uw onderneming met onze betrouwbare beveiligingsdiensten."
			  extendedDescription={`Uw bedrijf, onze beveiligers – samen sterk in veiligheid

				Van kantoren tot bouwplaatsen: wij bieden maatwerk beveiliging met professionele, getrainde beveiligers.
				Voorkom risico's en bescherm uw onderneming met onze betrouwbare beveiligingsdiensten.

				Onze diensten voor objectbeveiliging omvatten:
				• 24/7 surveillance en monitoring
				• Toegangscontrole en registratie
				• Preventieve veiligheidsrondes
				• Calamiteitenafhandeling
				• Sleutelbeheer
				• Rapportage en advisering

				Waarom kiezen voor onze objectbeveiliging:
				• Gecertificeerde beveiligers
				• Flexibele inzet mogelijk
				• Persoonlijke aanpak
				• Moderne beveiligingstechnieken
				• Snelle responstijd bij calamiteiten`}
			  linkText="Lees meer"
			  href="/services/particuliere-verhuizing"
			/>
		  </div>
		  <div className="py-4 h-full">
			<ServiceCard
			  className="mx-auto h-full"
			  icon={<CalendarCheck size={32} className="text-gray-900" />}
			  title="Evenementen"
			  description="Een geslaagd evenement begint met veiligheid
				Een zorgeloos evenement voor uw bezoekers? 
				Onze ervaren evenementenbeveiligers zorgen voor een veilige en gecontroleerde omgeving, 
				zodat uw event soepel verloopt."
			  extendedDescription={`Een geslaagd evenement begint met veiligheid

				Een zorgeloos evenement voor uw bezoekers? Onze ervaren evenementenbeveiligers zorgen voor een veilige en gecontroleerde omgeving, zodat uw event soepel verloopt.

				Wat wij bieden voor evenementenbeveiliging:
				• Crowdmanagement
				• Toegangscontrole
				• VIP-beveiliging
				• Garderobe- en bagagecontrole
				• EHBO-ondersteuning
				• Calamiteitenplan en -coördinatie

				Onze expertise:
				• Festivals en concerten
				• Sportevenementen
				• Bedrijfsevenementen
				• Beurzen en congressen
				• Gemeentelijke evenementen`}
			  linkText="Lees meer"
			  href="/services/particuliere-verhuizing"
			/>
		  </div>
		  <div className="py-4 h-full">
			<ServiceCard
			  className="mx-auto h-full"
			  icon={<Store size={32} className="text-gray-900" />}
			  title="Horeca portiers"
			  description="Een veilig uitgaansleven begint bij de deur
				Onze ervaren en gastvrije horeca-portiers zorgen voor een prettige en veilige sfeer in uw zaak. 
				Professioneel, klantvriendelijk en doortastend wanneer het nodig is."
			  extendedDescription={`Een veilig uitgaansleven begint bij de deur

				Onze ervaren en gastvrije horeca-portiers zorgen voor een prettige en veilige sfeer in uw zaak. Professioneel, klantvriendelijk en doortastend wanneer het nodig is.

				Wat onze portiers bieden:
				• Professionele toegangscontrole
				• Leeftijdscontrole en ID-check
				• Conflictpreventie en -beheersing
				• Drugspreventie
				• EHBO-gecertificeerd
				• Samenwerking met lokale autoriteiten

				Waarom onze portiers:
				• Ruime horeca-ervaring
				• Gastheer/gastvrouw mentaliteit
				• Gecertificeerd en gescreend
				• Kennis van actuele wet- en regelgeving
				• 24/7 bereikbaar voor support`}
			  linkText="Lees meer"
			  href="/services/particuliere-verhuizing"
			/>
		  </div>
		  <div className="py-4 md:col-start-2 h-full">
			<ServiceCard
			  className="mx-auto h-full"
			  icon={<ShoppingCart size={32} className="text-gray-900" />}
			  title="Winkelbeveiliging"
			  description="Diefstal voorkomen in plaats van genezen
				Onze beveiligers zijn getraind in het herkennen van verdacht gedrag en grijpen in voordat schade ontstaat. 
				Minder verliezen, meer veiligheid!"
			  extendedDescription={`Diefstal voorkomen in plaats van genezen

				Onze beveiligers zijn getraind in het herkennen van verdacht gedrag en grijpen in voordat schade ontstaat. Minder verliezen, meer veiligheid!

				Onze winkelbeveiliging omvat:
				• Surveillance in burger of uniform
				• Cameratoezicht en monitoring
				• Toegangscontrole
				• Preventief toezicht
				• Winkeldiefstalprocedures
				• Personeel training en advisering

				Voordelen van onze winkelbeveiliging:
				• Preventieve werking
				• Minder derving
				• Verhoogd veiligheidsgevoel
				• Professionele afhandeling incidenten
				• Flexibele inzet mogelijk
				• Rapportage en analyse`}
			  linkText="Lees meer"
			  href="/services/particuliere-verhuizing"
			/>
		  </div>
		</div>
	  </div>
	</section>
  );
}
