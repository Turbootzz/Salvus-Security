"use client";
import Button from "../common/buttons/Button";
import Link from "next/link";
import Image from "next/image";
import SecurityMenu from "../common/cards/SecurityMenu";

export default function Capabilities() {
    return (
        <section className="bg-background mt-13 mb-13">
            <div className="container md:container-md lg:container-lg">
                <div className="xl:flex">
                    <div className="xl:block xl:mr-44">
                        <p className="text-gray_c font-semibold pb-3">
                            Laat ons het zware werk doen!
                        </p>
                        <h2 className="text-2xl md:text-4xl font-bold pb-3">
                            Hoe kunnen we helpen?
                        </h2>
                        <p className="text-gray-700 pb-6 text-base md:text-lg">
                            Wij bieden op maat gemaakte beveiliging voor zowel
                            bedrijven als particulieren. Of het nu gaat om
                            persoonsbeveiliging, bedrijfsbeveiliging of
                            evenementenbeveiliging, onze ervaren beveiligers
                            zorgen voor uw veiligheid.
                        </p>
                        <Link href="/#diensten">
                            <Button text="Bekijk onze diensten &rarr;" />
                        </Link>
                    </div>
                    <div className="flex md:hidden xl:flex w-full">
                        <SecurityMenu />
                    </div>
                    <div className="hidden xl:hidden md:grid md:grid-cols-2 gap-x-32">
					<div className="md:relative w-96 h-96">
                            <Image
                                className="w-full h-full object-cover rounded-full"
                                src="/images/object-beveiliging.jpeg"
                                alt="Security Guard"
                                width={750}
                                height={750}
                            />
                        </div>
                        <SecurityMenu />
                    </div>
                </div>
            </div>
        </section>
    );
}
