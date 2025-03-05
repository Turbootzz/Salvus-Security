import Header from "../components/layout/Header";
import Heading from "../components/layout/Heading";
import Capabilities from "@/components/layout/Capabilities";
import Services from "@/components/layout/Services";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
	<>
	<Header />
	<main className="flex-grow">
		<Heading />
		<Capabilities />
		<Services />
	</main>
	<Footer />
	</>
	);
}
