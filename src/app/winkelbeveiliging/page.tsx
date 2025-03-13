import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/buttons/Button";
import Link from "next/link";

export default function Winkelbeveiliging() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-40 md:pt-35 pb-8 md:pb-15">
        <div className="container mx-auto px-4 md:container md:px-64">
          <h1 className="text-4xl font-bold pb-4">
            Winkelbeveiligers van Salvus Security Agency
          </h1>
          <p className="text-lg pb-6">
            Winkelbeveiliging is cruciaal voor het beschermen van uw winkel
            tegen diefstal, fraude en andere veiligheidsrisico&apos;s. Salvus
            Security Agency levert winkelbeveiligers die zorgen voor een veilige
            winkelomgeving, zowel voor klanten als personeel. Onze beveiligers
            zijn getraind in het herkennen van verdachte gedragingen, het
            voorkomen van winkeldiefstal en het handhaven van de orde in de
            winkel. Ze dragen bij aan het creëren van een vertrouwde en veilige
            winkelervaring, waardoor u zich kunt focussen op de groei van uw
            bedrijf.
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
