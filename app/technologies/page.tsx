"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Reveal from "@/components/shared/Reveal";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { technologies } from "@/data/technologies";

const categories = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "mobile", label: "Mobile" },
  { key: "devops", label: "DevOps" },
  { key: "cloud", label: "Cloud" },
];

export default function TechnologiesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-dark-bg">
        <Container>
          <Reveal className="text-center max-w-3xl mx-auto">
            <span className="text-lightning-500 font-medium text-sm uppercase tracking-wider">
              Technologies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark-text mt-4 mb-6">
              Our Tech Stack
            </h1>
            <p className="text-lg text-dark-muted">
              We leverage modern, battle-tested technologies to build scalable and
              high-performance applications.
            </p>
          </Reveal>
        </Container>
      </section>

      <SectionWrapper className="bg-dark-card">
        <Container>
          <div className="space-y-16">
            {categories.map((category, catIndex) => {
              const techs = technologies.filter(
                (t) => t.category === category.key
              );
              return (
                <Reveal key={category.key} delay={catIndex * 0.1}>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-dark-text mb-6">
                      {category.label}
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      {techs.map((tech, i) => (
                        <Card
                          key={tech.id}
                          hover
                          className="flex flex-col items-center gap-3 p-4"
                        >
                          <div className="w-12 h-12 rounded-lg bg-dark-border flex items-center justify-center">
                            <span className="text-xs font-mono text-lightning-400 font-bold">
                              {tech.name.slice(0, 2).toUpperCase()}
                            </span>
                          </div>
                          <span className="text-sm text-dark-muted text-center">
                            {tech.name}
                          </span>
                        </Card>
                      ))}
                    </div>
                  </div>
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
              Don&apos;t See Your Tech?
            </h2>
            <p className="text-dark-muted mb-8">
              We&apos;re always learning new technologies. If you have specific
              requirements, let&apos;s discuss how we can meet your needs.
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
