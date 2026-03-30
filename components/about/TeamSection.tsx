"use client";

import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Reveal from "@/components/shared/Reveal";
import { team } from "@/data/team";

export default function TeamSection() {
  return (
    <SectionWrapper id="team" className="bg-dark-card">
      <Container>
        <Reveal className="text-center mb-16">
          <span className="text-lightning-500 font-medium text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark-text mt-4">
            Meet the Team
          </h2>
          <p className="max-w-2xl mx-auto text-dark-muted mt-4">
            A passionate team of designers, developers, and strategists dedicated
            to delivering exceptional digital solutions.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {team.map((member, i) => (
            <Reveal key={member.id} delay={i * 0.1}>
              <Card hover className="text-center h-full">
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-lightning-500">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-display font-semibold text-dark-text">
                  {member.name}
                </h3>
                <p className="text-lightning-400 text-sm mb-4">{member.role}</p>
                <div className="flex items-center justify-center gap-3">
                  {member.linkedIn && (
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-muted hover:text-lightning-400 transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-muted hover:text-lightning-400 transition-colors"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter size={18} />
                    </a>
                  )}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
