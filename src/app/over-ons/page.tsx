"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import OverOnsText from "@/components/text/OverOnsText";
export default function OverOns() {
    const [emblaRef, embla] = useEmblaCarousel({
        align: "start",
        containScroll: "trimSnaps",
        dragFree: true,
    });
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

    const onSelect = useCallback(() => {
        if (embla) {
            setCanScrollPrev(embla.canScrollPrev());
            setCanScrollNext(embla.canScrollNext());
        }
    }, [embla]);

    useEffect(() => {
        if (embla) {
            onSelect();
            embla.on("select", onSelect);
            embla.on("reInit", onSelect);

            return () => {
                embla.off("select", onSelect);
                embla.off("reInit", onSelect);
            };
        }
    }, [embla, onSelect]);

    return (
        <>
            <Header />
            <main className="flex-grow max-w-6xl mx-auto pl-2 py-12 text-gray-800 pt-40 md:pt-35 pb-10">
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

                <section className="mt-12">
                    <h2 className="text-2xl font-semibold text-primary text-center">
                        Referenties
                    </h2>
                    <div className="mt-6 relative px-0 sm:px-4 md:px-8">
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex">
                                <div className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] p-2 sm:p-3">
                                    <div className="bg-neutral-200 p-4 sm:p-6 rounded-xl text-center shadow-lg h-full">
                                        <div className="flex flex-col items-center">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 relative mx-auto mb-3 sm:mb-4">
                                                <Image
                                                    src="/images/fulcotheater.png"
                                                    alt="Fulco Theater"
                                                    fill
                                                    className="rounded-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-base sm:text-lg font-medium">Fulcotheater</h3>
                                                <p className="text-sm sm:text-base text-gray-700">Theater</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] p-2 sm:p-3">
                                    <div className="bg-neutral-200 p-4 sm:p-6 rounded-xl text-center shadow-lg h-full">
                                        <div className="flex flex-col items-center">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 relative mx-auto mb-3 sm:mb-4">
                                                <Image
                                                    src="/images/ginny2.png"
                                                    alt="Ginny Utrecht"
                                                    fill
                                                    className="rounded-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-base sm:text-lg font-medium">Ginny Utrecht</h3>
                                                <p className="text-sm sm:text-base text-gray-700">Horeca</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] p-2 sm:p-3">
                                    <div className="bg-neutral-200 p-4 sm:p-6 rounded-xl text-center shadow-lg h-full">
                                        <div className="flex flex-col items-center">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 relative mx-auto mb-3 sm:mb-4">
                                                <Image
                                                    src="/images/cafePiketanissie.png"
                                                    alt="Cafe Piketanissie"
                                                    fill
                                                    className="rounded-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-base sm:text-lg font-medium">Cafe Piketanissie</h3>
                                                <p className="text-sm sm:text-base text-gray-700">Horeca</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="absolute left-1 sm:left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 sm:p-2 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed z-10"
                            onClick={scrollPrev}
                            disabled={!canScrollPrev}
                        >
                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </button>
                        <button
                            className="absolute right-1 sm:right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 sm:p-2 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed z-10"
                            onClick={scrollNext}
                            disabled={!canScrollNext}
                        >
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </button>
                    </div>
                    <p className="text-center text-gray-700 pt-6 sm:pt-8">Kies voor Salvus Security Agency – uw partner in veiligheid.</p>
                </section>
            </main>
            <Footer />
        </>
    );
}
