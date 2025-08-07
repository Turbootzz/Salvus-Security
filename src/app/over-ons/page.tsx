"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import OverOnsText from "@/components/text/OverOnsText";
import Referenties from "@/components/common/slideshows/Referenties";
import Keurmerken from "@/components/common/slideshows/Keurmerken";

export default function OverOns() {
    return (
        <>
            <Header />
            <main className="flex-grow w-full max-w-6xl mx-auto px-2 py-12 text-gray-800 pt-40 md:pt-35 pb-10">
                <section>
                  <div className="block lg:hidden">
                  <OverOnsText />
                  </div>
                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12">
                    <OverOnsText />
                        <Image
                            className="hidden lg:block md:rounded-2xl"
                            src="/images/object-beveiliging.jpeg"
                            alt="Objectbeveiliging"
                            width={400}
                            height={400}
                        />
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold text-primary">
                            Onze Missie
                        </h2>
                        <p className="mt-4 text-base text-gray-700">
                            Wij geloven in een toekomstgerichte aanpak waarin
                            preventie, technologie en menselijk inzicht
                            samenkomen. Daarom blijven we voortdurend innoveren
                            en investeren in de beste beveiligingsstrategieën.
                        </p>
                    </div>
                </section>
                <Keurmerken />
                <Referenties />
                <p className="text-center text-gray-700 pt-6 sm:pt-8">Kies voor Salvus Security Agency – uw partner in veiligheid.</p>
            </main>
            <Footer />
        </>
    );
}
