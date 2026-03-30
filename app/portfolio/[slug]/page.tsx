import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Reveal from "@/components/shared/Reveal";
import { projects } from "@/data/portfolio";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <section className="pt-32 pb-16 bg-dark-bg">
        <Container>
          <Link
            href="/portfolio"
            className="inline-flex items-center text-dark-muted hover:text-lightning-400 transition-colors mb-8"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Portfolio
          </Link>

          <Reveal className="text-center max-w-3xl mx-auto">
            <Badge
              variant={
                project.category === "web"
                  ? "blue"
                  : project.category === "mobile"
                  ? "lightning"
                  : "default"
              }
              className="mb-4"
            >
              {project.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark-text mt-4 mb-6">
              {project.title}
            </h1>
            <p className="text-lg text-dark-muted">{project.excerpt}</p>
          </Reveal>
        </Container>
      </section>

      {/* Hero Image */}
      <SectionWrapper className="bg-dark-card pt-0">
        <Container>
          <Reveal>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </SectionWrapper>

      {/* Case Study Content */}
      <SectionWrapper className="bg-dark-bg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <Reveal>
                <div>
                  <h2 className="text-2xl font-display font-bold text-dark-text mb-4">
                    The Challenge
                  </h2>
                  <p className="text-dark-muted leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div>
                  <h2 className="text-2xl font-display font-bold text-dark-text mb-4">
                    Our Solution
                  </h2>
                  <p className="text-dark-muted leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div>
                  <h2 className="text-2xl font-display font-bold text-dark-text mb-4">
                    Tech Stack
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="blue">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Sidebar - Results */}
            <Reveal delay={0.3}>
              <div className="lg:col-span-1">
                <div className="sticky top-32 bg-dark-card border border-dark-border rounded-xl p-8">
                  <h3 className="text-xl font-display font-bold text-dark-text mb-6">
                    Results
                  </h3>
                  <div className="space-y-6">
                    {project.results.map((result, i) => (
                      <div key={i}>
                        <div className="text-3xl font-display font-bold text-lightning-400 mb-1">
                          {result.value}
                        </div>
                        <div className="text-sm text-dark-muted">
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </SectionWrapper>

      {/* Next Project */}
      <section className="py-16 bg-dark-card border-t border-dark-border">
        <Container>
          <Reveal className="text-center">
            <span className="text-dark-muted text-sm">Next Project</span>
            <Link
              href={`/portfolio/${nextProject.slug}`}
              className="block mt-2 group"
            >
              <h3 className="text-2xl font-display font-bold text-dark-text group-hover:text-lightning-400 transition-colors mb-4">
                {nextProject.title}
              </h3>
              <Button variant="ghost" className="group">
                View Project
                <ArrowRight
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
