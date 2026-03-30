"use client";

import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Container from "@/components/ui/Container";
import Reveal from "@/components/shared/Reveal";
import StarRating from "@/components/shared/StarRating";
import { testimonials } from "@/data/testimonials";

export default function TestimonialTeaser() {
  const featured = testimonials[0];

  return (
    <SectionWrapper className="bg-dark-card">
      <Container>
        <Reveal className="max-w-3xl mx-auto text-center">
          <span className="text-lightning-500 font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark-text mt-4 mb-8">
            What Our Clients Say
          </h2>

          <div className="relative p-8 md:p-12 rounded-2xl bg-dark-bg border border-dark-border">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl text-lightning-500/20">
              &ldquo;
            </div>
            <blockquote className="relative">
              <p className="text-lg md:text-xl text-dark-text leading-relaxed mb-8">
                {featured.quote}
              </p>
              <footer className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-lightning-500">
                  <Image
                    src={featured.avatar}
                    alt={featured.author}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-dark-text">
                    {featured.author}
                  </div>
                  <div className="text-dark-muted text-sm">
                    {featured.company}
                  </div>
                </div>
                <StarRating rating={featured.rating} />
              </footer>
            </blockquote>
          </div>
        </Reveal>
      </Container>
    </SectionWrapper>
  );
}
