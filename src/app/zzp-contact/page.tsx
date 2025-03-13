import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ZZPContactForm from "@/components/form/ZZPContactForm";

export default function ZZPContact() {
  return (
    <>
    <Header />
    <main className="flex-grow pt-40 md:pt-35 pb-8 md:pb-15">
        <ZZPContactForm />
    </main>
    <Footer />
    </>
    );
}
