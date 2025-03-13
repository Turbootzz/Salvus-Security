import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/buttons/Button";
import Link from "next/link";

export default function Evenementen() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-40 md:pt-35 pb-8 md:pb-15">
        <div className="container mx-auto px-4 md:container md:px-64">
          <h1 className="text-4xl font-bold pb-4">
            Evenementenbeveiligers van Salvus Security Agency
          </h1>
          <p className="text-lg pb-6">
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
      </main>
      <Footer />
    </>
  );
}
