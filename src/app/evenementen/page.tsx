import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/buttons/Button";
import Link from "next/link";

export default function Evenementen() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-40 md:pt-35 pb-8 md:pb-15">
        <div className="container mx-auto px-4 md:container text-center md:px-64">
          <h1 className="text-4xl font-bold pb-4">Evenementen</h1>
          <p className="text-lg pb-6">
            Bij het organiseren van een evenement is veiligheid een van de
            belangrijkste aspecten. Of het nu gaat om een klein privé-evenement
            of een grootschalig festival, Salvus Security Agency zorgt ervoor
            dat uw evenement soepel en veilig verloopt. Onze ervaren beveiligers
            zijn getraind in crowd management, toegangscontrole en het snel
            oplossen van conflicten. We bieden gepersonaliseerde
            beveiligingsoplossingen die passen bij de omvang en het type
            evenement, zodat zowel gasten als organisatoren zich geen zorgen
            hoeven te maken. Met onze uitgebreide ervaring in
            evenementenbeveiliging bent u verzekerd van een professioneel en
            doeltreffend beveiligingsplan voor elke gelegenheid.
          </p>
          <Link href="/contact">
            <Button text="Offerte aanvragen &rarr;" />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
