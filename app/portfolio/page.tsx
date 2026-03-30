"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Reveal from "@/components/shared/Reveal";
import { projects } from "@/data/portfolio";

const categories = [
  { value: "all", label: "All" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "design", label: "Design" },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="pt-32 pb-16 bg-dark-bg">
        <Container>
          <Reveal className="text-center max-w-3xl mx-auto">
            <span className="text-lightning-500 font-medium text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark-text mt-4 mb-6">
              Our Work
            </h1>
            <p className="text-lg text-dark-muted">
              Explore our latest projects showcasing our expertise in web
              development, mobile apps, and design.
            </p>
          </Reveal>
        </Container>
      </section>

      <SectionWrapper className="bg-dark-card">
        <Container>
          {/* Filter Buttons */}
          <Reveal className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat.value
                    ? "bg-lightning-500 text-dark-bg"
                    : "bg-dark-border text-dark-muted hover:text-dark-text"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </Reveal>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.1}>
                <Link href={`/portfolio/${project.slug}`}>
                  <Card hover className="h-full overflow-hidden group">
                    <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent opacity-80" />
                    </div>
                    <Badge
                      variant={
                        project.category === "web"
                          ? "blue"
                          : project.category === "mobile"
                          ? "lightning"
                          : "default"
                      }
                      className="mb-3"
                    >
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-display font-semibold text-dark-text mb-2 group-hover:text-lightning-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-dark-muted text-sm leading-relaxed mb-4">
                      {project.excerpt}
                    </p>
                    <div className="flex items-center text-lightning-400 text-sm font-medium group-hover:gap-2 transition-all">
                      View Case Study
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <section className="py-24 bg-dark-bg">
        <Container>
          <Reveal className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-text mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-dark-muted mb-8">
              Let&apos;s discuss how we can bring your vision to life.
            </p>
            <Link href="/contact">
              <Button size="lg">Start Your Project</Button>
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
