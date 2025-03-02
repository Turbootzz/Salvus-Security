import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function OverOns() {
  return (
	<>
	  <Header />
	  <main className="flex-grow max-w-6xl mx-auto px-6 py-12 text-gray-800 pt-40 md:pt-35 pb-15">
		<section className="text-center">
		  <h1 className="text-4xl font-bold text-primary mb-4">Over Ons</h1>
		  <p className="text-lg text-gray-700 max-w-2xl mx-auto">
			Wij beschermen uw digitale wereld met geavanceerde
			beveiligingsoplossingen.
		  </p>
		</section>

		<section className="mt-12 grid md:grid-cols-2 gap-12">
		  <div>
			<h2 className="text-2xl font-semibold text-primary">Onze Missie</h2>
			<p className="mt-4 text-gray-700">
			  Wij streven ernaar om bedrijven en individuen te beschermen tegen
			  cyberdreigingen. Met de nieuwste technologieën en expertise zorgen
			  wij voor een veilige digitale toekomst.
			</p>
		  </div>

		  <div>
			<h2 className="text-2xl font-semibold text-primary">
			  Onze Waarden
			</h2>
			<ul className="mt-4 text-gray-700 space-y-2">
			  <li>
				<span className="font-medium text-primary">
				  ✔ Betrouwbaarheid:
				</span>{" "}
				Uw veiligheid is onze prioriteit.
			  </li>
			  <li>
				<span className="font-medium text-primary">✔ Innovatie:</span>{" "}
				Altijd een stap voor op cybercriminelen.
			  </li>
			  <li>
				<span className="font-medium text-primary">
				  ✔ Transparantie:
				</span>{" "}
				Duidelijke communicatie en eerlijke oplossingen.
			  </li>
			</ul>
		  </div>
		</section>

		<section className="mt-12">
		  <h2 className="text-2xl font-semibold text-primary text-center">
			Ons Team
		  </h2>
		  <div className="mt-6 grid md:grid-cols-3 gap-6">
			<div className="bg-light-blue_c p-6 rounded-xl text-center shadow-lg">
			  <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4"></div>
			  <h3 className="text-lg font-medium">John Doe</h3>
			  <p className="text-gray-700">CEO & Security Expert</p>
			</div>
			<div className="bg-light-blue_c p-6 rounded-xl text-center shadow-lg">
			  <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4"></div>
			  <h3 className="text-lg font-medium">Jane Smith</h3>
			  <p className="text-gray-700">CTO & Cybersecurity Specialist</p>
			</div>
			<div className="bg-light-blue_c p-6 rounded-xl text-center shadow-lg">
			  <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4"></div>
			  <h3 className="text-lg font-medium">Michael Lee</h3>
			  <p className="text-gray-700">Lead Penetration Tester</p>
			</div>
		  </div>
		</section>
	  </main>
	  <Footer />
	</>
  );
}
