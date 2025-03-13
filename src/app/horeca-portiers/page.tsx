import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/buttons/Button";
import Link from "next/link";

export default function HorecaPortiers() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-40 md:pt-35 pb-8 md:pb-15">
        <div className="container mx-auto px-4 md:container md:px-64">
          <h1 className="text-4xl font-bold pb-4">
            Portiers van Salvus Security Agency
          </h1>
          <p className="text-lg pb-6">
            Onze portiers zorgen voor de veiligheid en het welzijn van uw gasten
            en medewerkers bij de ingang van uw bedrijfspand of
            evenementenlocatie. Salvus Security Agency biedt getrainde portiers
            die niet alleen verantwoordelijk zijn voor het controleren van
            toegang en het naleven van toegangsregels, maar ook voor het
            waarborgen van een professionele en gastvrije sfeer. Ze zijn alert,
            vriendelijk en altijd bereid om te reageren op de behoeften van
            bezoekers en klanten, zodat u zich kunt concentreren op het runnen
            van uw bedrijf of evenement.
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
