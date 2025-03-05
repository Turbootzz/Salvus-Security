import ServiceCard from "../common/cards/ServiceCard";
import { HomeIcon } from 'lucide-react';

export default function Services() {
  return (
	<section className="bg-gray-200 mt-13">
	  <div className="container lg:container-lg pt-10">
		<h4 id="diensten" className="text-gray-900 border text-sm border-gray-800 rounded-4xl px-3 py-1 inline-block mb-4 scroll-mt-40 md:scroll-mt-25">
		  Onze diensten
		</h4>
		<h2 className="text-2xl text-gray-900 md:text-4xl font-bold mb-3 md:max-w-80">
		  Transport en verhuis-
		  <span className="text-gray-600">oplossingen</span> op maat
		</h2>
		<p className="text-gray-900 text-base md:text-lg max-w-120">
		  Volledige verhuisservices inclusief inpakken, laden, transport en
		  uitpakken voor een zorgeloze verhuizing.
		</p>
		<div className="md:grid md:grid-cols-3 md:gap-4 md:py-10">
		<div className="py-4">
		<ServiceCard
			className="mx-auto"
			icon={<HomeIcon size={32} className="text-gray-900" />}
			title="Particuliere verhuizing"
			description="Verhuisservice op maat voor particulieren, overal in Nederland."
			linkText="Lees meer"
			href="/services/particuliere-verhuizing"
		  />
		</div>
		<div className="py-4">
		<ServiceCard
			className="mx-auto"
			icon={<HomeIcon size={32} className="text-gray-900" />}
			title="Particuliere verhuizing"
			description="Verhuisservice op maat voor particulieren, overal in Nederland."
			linkText="Lees meer"
			href="/services/particuliere-verhuizing"
		  />
		</div>
		<div className="py-4">
		<ServiceCard
			className="mx-auto"
			icon={<HomeIcon size={32} className="text-gray-900" />}
			title="Particuliere verhuizing"
			description="Verhuisservice op maat voor particulieren, overal in Nederland."
			linkText="Lees meer"
			href="/services/particuliere-verhuizing"
		  />
		</div>
		</div>
	  </div>
	</section>
  );
}
