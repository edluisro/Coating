import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BookingCta } from "@/components/sections/BookingCta";
import { FinalCta } from "@/components/sections/FinalCta";
import { HeroLead } from "@/components/sections/HeroLead";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TrustSection } from "@/components/sections/TrustSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroLead />
        <TrustSection />
        <ServicesGrid />
        <ProcessSteps />
        <WhyChooseUs />
        <BookingCta />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
