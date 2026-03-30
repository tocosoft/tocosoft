"use client";

import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Container from "@/components/ui/Container";
import Reveal from "@/components/shared/Reveal";
import { technologies } from "@/data/technologies";

export default function TechOverview() {
  const frontendTechs = technologies.filter((t) => t.category === "frontend");
  const tickerTechs = [...technologies, ...technologies]; // Duplicate for seamless loop

  return (
    <SectionWrapper id="technologies" className="bg-dark-bg overflow-hidden">
      <Container>
        <Reveal className="text-center mb-16">
          <span className="text-lightning-500 font-medium text-sm uppercase tracking-wider">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark-text mt-4">
            Technologies We Use
          </h2>
          <p className="max-w-2xl mx-auto text-dark-muted mt-4">
            We leverage modern, battle-tested technologies to build scalable and
            high-performance applications.
          </p>
        </Reveal>

        {/* Tech Grid Preview */}
        <Reveal delay={0.2}>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-12">
            {frontendTechs.map((tech) => (
              <div
                key={tech.id}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-dark-card border border-dark-border hover:border-lightning-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-dark-border flex items-center justify-center">
                  <span className="text-xs font-mono text-lightning-400">
                    {tech.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <span className="text-xs text-dark-muted">{tech.name}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Ticker */}
        <div className="relative -mx-6 md:-mx-12 lg:-mx-24">
          <div className="flex animate-ticker">
            {tickerTechs.map((tech, i) => (
              <div
                key={`${tech.id}-${i}`}
                className="flex-shrink-0 mx-4 flex items-center gap-2 px-4 py-2 rounded-full bg-dark-card border border-dark-border"
              >
                <div className="w-6 h-6 rounded bg-dark-border flex items-center justify-center">
                  <span className="text-[10px] font-mono text-lightning-400">
                    {tech.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <span className="text-sm text-dark-muted whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
