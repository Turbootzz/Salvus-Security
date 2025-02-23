import Image from "next/image";
import Header from "../components/layout/Header";
import Heading from "../components/layout/Heading";
import Capabilities from "@/components/layout/Capabilities";

export default function Home() {
  return (
	<>
	<Header />
	<main>
		<Heading />
		<Capabilities />
	</main>
	</>
	);
}
