'use client'
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function OverOns() {
  const [emblaRef, embla] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla])

  const onSelect = useCallback(() => {
    if (embla) {
      setCanScrollPrev(embla.canScrollPrev())
      setCanScrollNext(embla.canScrollNext())
    }
  }, [embla])

  useEffect(() => {
    if (embla) {
      onSelect()
      embla.on('select', onSelect)
      embla.on('reInit', onSelect)

      return () => {
        embla.off('select', onSelect)
        embla.off('reInit', onSelect)
      }
    }
  }, [embla, onSelect])

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
            Referenties
          </h2>
          <div className="mt-6 relative px-12">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                <div className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] p-3">
                  <div className="bg-neutral-200 p-6 rounded-xl text-center shadow-lg h-full">
                    <div className="w-24 h-24 relative mx-auto mb-4">
                      <Image
                        src="/images/fulcotheater.png"
                        alt="Fulco Theater"
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-medium">Fulcotheater</h3>
                    <p className="text-gray-700">Theater</p>
                  </div>
                </div>
                <div className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] p-3">
                  <div className="bg-neutral-200 p-6 rounded-xl text-center shadow-lg h-full">
                    <div className="w-24 h-24 relative mx-auto mb-4">
                      <Image
                        src="/images/ginny2.png"
                        alt="Ginny Utrecht"
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-medium">Ginny Utrecht</h3>
                    <p className="text-gray-700">Horeca</p>
                  </div>
                </div>
                <div className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] p-3">
                  <div className="bg-neutral-200 p-6 rounded-xl text-center shadow-lg h-full">
                    <div className="w-24 h-24 relative mx-auto mb-4">
                      <Image
                        src="/images/cafePiketanissie.png"
                        alt="Cafe Piketanissie"
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-medium">Cafe Piketanissie</h3>
                    <p className="text-gray-700">Horeca</p>
                  </div>
                </div>
                
              </div>
            </div>
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={scrollNext}
              disabled={!canScrollNext}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <p className="text-center text-gray-700 pt-8">Kies voor Salvus Security Agency – uw partner in veiligheid.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
