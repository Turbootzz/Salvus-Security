import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/buttons/Button";
import Link from "next/link";

export default function Objecten() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-40 md:pt-35 pb-8 md:pb-15">
        <div className="container mx-auto px-4 md:container md:px-64">
          <h1 className="text-4xl font-bold pb-4">Objectbeveiligers van Salvus Security Agency</h1>
          <p className="text-lg pb-6">
            Objectbeveiliging is een essentiële dienst voor het beschermen van
            gebouwen, terreinen en andere eigendommen tegen inbraak, vandalisme
            en andere risico&apos;s. Salvus Security Agency biedt professionele
            objectbeveiligers die zorgen voor de veiligheid van uw pand, zowel
            binnen als buiten. Onze beveiligers zijn getraind om snel te
            reageren op incidenten, verdachte activiteiten te signaleren en de
            juiste protocollen te volgen om schade en verlies te voorkomen. Met
            Salvus als partner kunt u erop vertrouwen dat uw objecten veilig
            zijn, ongeacht de tijd van de dag of nacht.
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
