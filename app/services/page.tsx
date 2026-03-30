"use client";

import Link from "next/link";
import { ArrowRight, Zap, Globe, Smartphone, Palette, Plug, Lightbulb } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Reveal from "@/components/shared/Reveal";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Palette,
  Plug,
  Lightbulb,
  Zap,
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-dark-bg">
        <Container>
          <Reveal className="text-center max-w-3xl mx-auto">
            <span className="text-lightning-500 font-medium text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark-text mt-4 mb-6">
              What We Do
            </h1>
            <p className="text-lg text-dark-muted">
              We offer comprehensive digital solutions to help your business thrive
              in the modern technology landscape.
            </p>
          </Reveal>
        </Container>
      </section>

      <SectionWrapper className="bg-dark-card">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Zap;
              return (
                <Reveal key={service.id} delay={i * 0.1}>
                  <Card hover className="h-full group">
                    <div className="w-14 h-14 rounded-xl bg-lightning-500/10 flex items-center justify-center mb-6 group-hover:bg-lightning-500/20 transition-colors">
                      <Icon className="text-lightning-500" size={28} />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-dark-text mb-4">
                      {service.title}
                    </h3>
                    <p className="text-dark-muted leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link href="/contact">
                      <Button variant="ghost" className="group-hover:text-lightning-400 p-0">
                        Get Started
                        <ArrowRight
                          size={16}
                          className="ml-2 group-hover:translate-x-1 transition-transform"
                        />
                      </Button>
                    </Link>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </SectionWrapper>

      <section className="py-24 bg-dark-bg">
        <Container>
          <Reveal className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-text mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-dark-muted mb-8">
              Get a free consultation and let&apos;s discuss how we can help you achieve your goals.
            </p>
            <Link href="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
