import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BookingCta } from "@/components/sections/BookingCta";
import { FinalCta } from "@/components/sections/FinalCta";
import { HeroLead } from "@/components/sections/HeroLead";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyRestoreSection } from "@/components/sections/WhyRestoreSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroLead />
        <WhyRestoreSection />
        <ServicesGrid />
        <ProjectGallery />
        <ProcessSteps />
        <WhyChooseUs />
        <BookingCta />
        <FinalCta />
        <ServiceAreas />
      </main>
      <Footer />
    </>
  );
}
