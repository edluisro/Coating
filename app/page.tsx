import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ApplicationsGrid } from "@/components/sections/ApplicationsGrid";
import { HeroLead } from "@/components/sections/HeroLead";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhatIsElectrostatic } from "@/components/sections/WhatIsElectrostatic";
import { WhyRestoreSection } from "@/components/sections/WhyRestoreSection";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroLead />
        <WhyRestoreSection />
        <WhatIsElectrostatic />
        <ApplicationsGrid />
        <ProjectGallery />
        <ServiceAreas />
        <ServicesGrid />
        <ProcessTimeline />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
