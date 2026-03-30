"use client";

import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Container from "@/components/ui/Container";
import Reveal from "@/components/shared/Reveal";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <SectionWrapper className="bg-dark-bg relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(132,204,22,0.1)_0%,transparent_70%)]" />

      <Container className="relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lightning-500/10 mb-6">
            <Zap className="text-lightning-500" size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark-text mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-lg text-dark-muted mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss your project and discover how we can help you
            achieve your goals. Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="group">
                Start Your Project
                <ArrowRight
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="ghost" size="lg">
                View Our Work
              </Button>
            </Link>
          </div>
        </Reveal>
      </Container>
    </SectionWrapper>
  );
}
