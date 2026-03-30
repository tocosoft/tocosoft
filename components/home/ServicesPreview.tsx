"use client";

import Link from "next/link";
import { ArrowRight, Zap, Globe, Smartphone, Palette, Plug, Lightbulb } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Reveal from "@/components/shared/Reveal";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";
import * as LucideIcons from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Palette,
  Plug,
  Lightbulb,
  Zap,
};

export default function ServicesPreview() {
  const featuredServices = services.slice(0, 3);

  return (
    <SectionWrapper id="services" className="bg-dark-bg">
      <Container>
        <Reveal className="text-center mb-16">
          <span className="text-lightning-500 font-medium text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark-text mt-4">
            Our Services
          </h2>
          <p className="max-w-2xl mx-auto text-dark-muted mt-4">
            We offer comprehensive digital solutions to help your business thrive
            in the modern technology landscape.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredServices.map((service, i) => {
            const Icon = iconMap[service.icon] || Zap;
            return (
              <Reveal key={service.id} delay={i * 0.1}>
                <Card hover className="h-full group">
                  <div className="w-12 h-12 rounded-xl bg-lightning-500/10 flex items-center justify-center mb-6 group-hover:bg-lightning-500/20 transition-colors">
                    <Icon className="text-lightning-500" size={24} />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-dark-text mb-3">
                    {service.title}
                  </h3>
                  <p className="text-dark-muted leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.4} className="text-center mt-12">
          <Link href="/services">
            <Button variant="secondary" className="group">
              View All Services
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </Link>
        </Reveal>
      </Container>
    </SectionWrapper>
  );
}
