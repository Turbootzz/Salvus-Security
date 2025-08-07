import Image from "next/image";
export default function Keurmerken() {
    return (
        <section className="mt-12">
                    <h2 className="text-2xl font-semibold text-primary text-center">
                        Keurmerken
                    </h2>
                    <br />
                                    <div className="bg-neutral-200 p-4 sm:p-6 rounded-xl text-center shadow-lg h-full max-w-96 mx-auto">
                                        <div className="flex flex-col items-center">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 relative mx-auto mb-3 sm:mb-4">
                                                <Image
                                                    src="/images/latest/justis.jpeg"
                                                    alt="Justis ND"
                                                    fill
                                                    className="rounded-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-base sm:text-lg font-medium">Justis</h3>
                                                <p className="text-sm sm:text-base text-gray-700">ND: 8827</p>
                                            </div>
                                        </div>
                    </div>
                </section>
    );
}