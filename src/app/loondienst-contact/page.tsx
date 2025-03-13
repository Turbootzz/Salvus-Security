import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LoondienstContactForm from "@/components/form/LoondienstContactForm";

export default function LoondienstContact() {
  return (
    <>
    <Header />
    <main className="flex-grow pt-40 md:pt-35 pb-8 md:pb-15">
        <LoondienstContactForm />
    </main>
    <Footer />
    </>
    );
}
