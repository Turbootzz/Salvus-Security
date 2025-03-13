import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/buttons/Button";
import Link from "next/link";

export default function Winkelbeveiliging() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-40 md:pt-35 pb-8 md:pb-15">
        <div className="container mx-auto px-4 md:container text-center md:px-64">
          <h1 className="text-4xl font-bold pb-4">Winkelbeveiliging</h1>
          <p className="text-lg pb-6">
            Winkeldiefstal is een groot probleem voor veel winkels en
            retailbedrijven. Salvus Security Agency biedt gerichte
            beveiligingsdiensten om winkeldiefstal te voorkomen en te
            bestrijden. Onze beveiligers gebruiken een combinatie van gerichte
            surveillance, discreet toezicht en geavanceerde technologie om
            verdachte activiteiten op te sporen en diefstal in een vroeg stadium
            te voorkomen. Onze doelgerichte aanpak zorgt ervoor dat uw winkel,
            producten en personeel altijd goed beschermd zijn. Kies voor Salvus
            Security Agency en minimaliseer de risico&apos;s van winkeldiefstal
            met professionele beveiliging.
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
