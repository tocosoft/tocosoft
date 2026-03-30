"use client";

import { Lightbulb, Zap, Shield, Users } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Reveal from "@/components/shared/Reveal";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We constantly push boundaries, exploring new technologies and approaches to solve complex challenges.",
    color: "lightning",
  },
  {
    icon: Zap,
    title: "Speed",
    description:
      "We move fast without sacrificing quality. Our agile methodology ensures rapid delivery without compromise.",
    color: "blue",
  },
  {
    icon: Shield,
    title: "Quality",
    description:
      "We hold ourselves to the highest standards, ensuring every deliverable exceeds expectations.",
    color: "lightning",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We view every client as a partner. Your success is our success, and we're invested in your long-term growth.",
    color: "blue",
  },
];

export default function CoreValues() {
  return (
    <SectionWrapper id="values" className="bg-dark-bg">
      <Container>
        <Reveal className="text-center mb-16">
          <span className="text-lightning-500 font-medium text-sm uppercase tracking-wider">
            Our Values
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark-text mt-4">
            Core Values
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <Reveal key={value.title} delay={i * 0.1}>
                <Card hover className="h-full text-center">
                  <div
                    className={`w-14 h-14 rounded-xl mx-auto mb-6 flex items-center justify-center ${
                      value.color === "lightning"
                        ? "bg-lightning-500/10"
                        : "bg-accent-blue-500/10"
                    }`}
                  >
                    <Icon
                      size={28}
                      className={
                        value.color === "lightning"
                          ? "text-lightning-500"
                          : "text-accent-blue-500"
                      }
                    />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-dark-text mb-3">
                    {value.title}
                  </h3>
                  <p className="text-dark-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
