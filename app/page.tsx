import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import TechOverview from "@/components/home/TechOverview";
import TestimonialTeaser from "@/components/home/TestimonialTeaser";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <PortfolioPreview />
      <TechOverview />
      <TestimonialTeaser />
      <CTASection />
    </>
  );
}
