"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/shared/Reveal";
import Button from "@/components/ui/Button";
import { projects } from "@/data/portfolio";

export default function PortfolioPreview() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <SectionWrapper id="portfolio" className="bg-dark-card">
      <Container>
        <Reveal className="text-center mb-16">
          <span className="text-lightning-500 font-medium text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark-text mt-4">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-dark-muted mt-4">
            Explore our latest projects showcasing our expertise in web
            development, mobile apps, and design.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project, i) => (
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
                  <p className="text-dark-muted text-sm leading-relaxed">
                    {project.excerpt}
                  </p>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="text-center mt-12">
          <Link href="/portfolio">
            <Button variant="secondary" className="group">
              View All Projects
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
