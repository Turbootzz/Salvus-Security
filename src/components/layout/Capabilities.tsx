'use client'
import Button from "../common/buttons/Button";

export default function Capabilities() {
  return (
	<section className="bg-background pt-13">
	  <div className="container lg:container-lg">
		<p className="text-secondary font-semibold pb-3">Laat ons het zware werk doen!</p>
		<h2 className="text-2xl font-bold pb-3">Hoe kunnen we helpen?</h2>
		<p className="text-gray-700 pb-4">Verhuisservice op maat voor particulieren, van kleine appartementen tot grotere woningen.
		Professionele transportservice voor het verplaatsen van jouw bezittingen naar je nieuwe woning of kantoor.</p>
		<Button text="Bekijk onze diensten &rarr;" onClick={() => alert("Klik!")} />
	  </div>
	</section>
  );
}
