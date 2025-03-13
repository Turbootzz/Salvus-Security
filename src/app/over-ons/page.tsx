import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function OverOns() {
  return (
    <>
      <Header />
      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 text-gray-800 pt-40 md:pt-35 pb-10">
        <section>
          <h1 className="text-4xl font-bold text-primary mb-4">Over Ons</h1>
          <p className="text-base text-gray-700">
            Bij Salvus Security Agency staan veiligheid en professionaliteit
            centraal. Wij zijn een modern en toekomstgericht beveiligingsbedrijf
            dat hoogwaardige beveiligingsdiensten levert aan bedrijven,
            evenementen en instellingen. Onze missie is simpel: het bieden van
            betrouwbare, proactieve en innovatieve beveiligingsoplossingen die
            risico&apos;s minimaliseren en een veilige omgeving garanderen.
          </p>
          
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-primary">
              Onze Beveiligers
            </h2>
            <p className="mt-4 text-base text-gray-700">
              Met een team van goed opgeleide en gecertificeerde beveiligers
              zorgen wij voor maatwerkoplossingen die aansluiten bij de
              specifieke behoeften van onze opdrachtgevers. Of het nu gaat om
              objectbeveiliging, evenementenbeveiliging, horecaportiers of
              winkelbeveiliging – bij Salvus Security Agency bent u verzekerd
              van deskundige en daadkrachtige beveiligers die met de nieuwste
              technologieën en methoden werken.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-primary">Onze Missie</h2>
            <p className="mt-4 text-base text-gray-700">
              Wij geloven in een toekomstgerichte aanpak waarin preventie,
              technologie en menselijk inzicht samenkomen. Daarom blijven we
              voortdurend innoveren en investeren in de beste
              beveiligingsstrategieën.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-primary text-center">
            Ons Team
          </h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="bg-light-gray_c p-6 rounded-xl text-center shadow-lg">
              <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-medium">John Doe</h3>
              <p className="text-gray-700">CEO & Security Expert</p>
            </div>
            <div className="bg-light-gray_c p-6 rounded-xl text-center shadow-lg">
              <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-medium">Jane Smith</h3>
              <p className="text-gray-700">CTO & Cybersecurity Specialist</p>
            </div>
            <div className="bg-light-gray_c p-6 rounded-xl text-center shadow-lg">
              <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-medium">Michael Lee</h3>
              <p className="text-gray-700">Lead Penetration Tester</p>
            </div>
          </div>
		  <p className="text-center text-gray-700 pt-8">Kies voor Salvus Security Agency – uw partner in veiligheid.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
