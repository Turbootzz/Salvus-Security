import Header from "../components/layout/Header";
import Heading from "../components/layout/Heading";
import Capabilities from "@/components/layout/Capabilities";
import Services from "@/components/layout/Services";

export default function Home() {
  return (
	<>
	<Header />
	<main>
		<Heading />
		<Capabilities />
		<Services />
	</main>
	</>
	);
}
