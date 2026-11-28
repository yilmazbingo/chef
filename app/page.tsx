import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experiences from "../components/Experiences";
import Philosophy from "../components/Philosophy";
import Gallery from "../components/Gallery";
import InquiryForm from "../components/InquiryForm";
import Footer from "../components/Footer";
import RevealAnimations from "../components/RevealAnimations";
import InstagramSection from "@/components/InstagramSection";

export default function Home() {
  return (
    <main>
      <RevealAnimations />
      <Navbar />
      <Hero />
      <Experiences />
      <Philosophy />
      <Gallery />
      <InstagramSection />
      <InquiryForm />
      <Footer />
    </main>
  );
}
