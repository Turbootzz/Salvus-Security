import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/buttons/Button";
import Link from "next/link";

export default function Objecten() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-40 md:pt-35 pb-8 md:pb-15">
        <div className="container mx-auto px-4 md:container text-center md:px-64">
          <h1 className="text-4xl font-bold pb-4">Objecten</h1>
          <p className="text-lg pb-6">
            Bij Salvus Security Agency begrijpen we hoe belangrijk het is om uw
            objecten en bezittingen te beschermen. Of het nu gaat om een
            bedrijfsgebouw, schoolgebouw of een bouwplaats, onze
            objectbeveiligingsdiensten zijn erop gericht om een veilige omgeving
            te creëren en te behouden. Onze beveiligers zijn hoog opgeleid en
            uitgerust om snel in te grijpen bij verdachte activiteiten,
            inbraakpogingen of andere dreigingen.
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
