"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import StarRating from "@/components/shared/StarRating";
import Reveal from "@/components/shared/Reveal";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsPage() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="pt-32 pb-16 bg-dark-bg">
        <Container>
          <Reveal className="text-center max-w-3xl mx-auto">
            <span className="text-lightning-500 font-medium text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark-text mt-4 mb-6">
              What Our Clients Say
            </h1>
            <p className="text-lg text-dark-muted">
              Don&apos;t just take our word for it — hear from the businesses
              we&apos;ve helped transform.
            </p>
          </Reveal>
        </Container>
      </section>

      <SectionWrapper className="bg-dark-card">
        <Container>
          <Reveal>
            <div className="max-w-4xl mx-auto">
              {/* Carousel */}
              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                  >
                    {testimonials.map((testimonial) => (
                      <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                        <Card hover={false} className="text-center p-8 md:p-12">
                          <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-2 border-lightning-500">
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.author}
                              width={80}
                              height={80}
                              className="object-cover"
                            />
                          </div>
                          <StarRating rating={testimonial.rating} className="justify-center mb-6" />
                          <blockquote className="text-lg md:text-xl text-dark-text leading-relaxed mb-6">
                            &ldquo;{testimonial.quote}&rdquo;
                          </blockquote>
                          <div className="font-semibold text-dark-text">
                            {testimonial.author}
                          </div>
                          <div className="text-lightning-400 text-sm">
                            {testimonial.company}
                          </div>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-4 mt-8">
                  <button
                    onClick={prev}
                    className="p-2 rounded-full bg-dark-border text-dark-muted hover:text-dark-text transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          i === current
                            ? "bg-lightning-500 w-6"
                            : "bg-dark-border hover:bg-dark-muted"
                        }`}
                        aria-label={`Go to testimonial ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={next}
                    className="p-2 rounded-full bg-dark-border text-dark-muted hover:text-dark-text transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </SectionWrapper>

      {/* Stats */}
      <section className="py-24 bg-dark-bg">
        <Container>
          <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "30+", label: "Happy Clients" },
              { value: "5+", label: "Years Experience" },
              { value: "4.9/5", label: "Average Rating" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-display font-bold text-lightning-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-dark-muted">{stat.label}</div>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="py-24 bg-dark-card border-t border-dark-border">
        <Container>
          <Reveal className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-text mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-dark-muted mb-8">
              Join our satisfied clients and let&apos;s build something great together.
            </p>
            <Link href="/contact">
              <Button size="lg">Get Started</Button>
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
