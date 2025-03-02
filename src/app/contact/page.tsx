import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/form/ContactForm";

export default function Contact() {
  return (
    <>
    <Header />
    <main className="flex-grow pt-40 md:pt-35 pb-8 md:pb-15">
        <ContactForm />
    </main>
    <Footer />
    </>
    );
}
