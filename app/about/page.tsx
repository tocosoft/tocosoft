import type { Metadata } from "next";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import TeamSection from "@/components/about/TeamSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about RaYo Soft - our story, mission, vision, and the team behind our innovative digital solutions.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-dark-bg">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24 text-center">
          <span className="text-lightning-500 font-medium text-sm uppercase tracking-wider">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark-text mt-4 mb-6">
            We Build Digital Experiences That Strike Fast
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-dark-muted">
            Founded in 2019, RaYo Soft has grown from a small team of passionate
            developers into a full-service digital agency helping businesses
            transform their ideas into powerful digital products.
          </p>
        </div>
      </section>
      <MissionVision />
      <CoreValues />
      <TeamSection />
      <CTASection />
    </>
  );
}
