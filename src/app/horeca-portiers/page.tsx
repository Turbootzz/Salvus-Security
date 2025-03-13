import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/buttons/Button";
import Link from "next/link";

export default function HorecaPortiers() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-40 md:pt-35 pb-8 md:pb-15">
        <div className="container mx-auto px-4 md:container text-center md:px-64">
          <h1 className="text-4xl font-bold pb-4">Horeca Portiers</h1>
          <p className="text-lg pb-6">
            Horecaportiers van Salvus Security Agency zorgen voor een veilige en
            gastvrije sfeer in uw horecagelegenheid. Of het nu gaat om een
            restaurant, club, bar of andere feestgelegenheden, onze portiers
            zijn erop getraind om zowel de veiligheid te waarborgen als een
            klantvriendelijke omgeving te behouden. Ze controleren de toegang,
            voorkomen ongewenste situaties en zorgen ervoor dat alles volgens de
            huisregels verloopt. Onze horecaportiers beschikken over uitstekende
            communicatieve vaardigheden en weten hoe ze in verschillende
            situaties de juiste balans moeten vinden tussen gastvrijheid en
            veiligheid. Kies voor Salvus Security Agency, professionele
            horecaportiers die uw zaak beschermen en gastvrijheid centraal
            staat.
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
