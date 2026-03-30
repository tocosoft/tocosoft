"use client";

import { Target, Eye } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Reveal from "@/components/shared/Reveal";

export default function MissionVision() {
  return (
    <SectionWrapper className="bg-dark-card">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Reveal>
            <Card hover={false} className="h-full">
              <div className="w-12 h-12 rounded-xl bg-lightning-500/10 flex items-center justify-center mb-6">
                <Target className="text-lightning-500" size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-dark-text mb-4">
                Our Mission
              </h3>
              <p className="text-dark-muted leading-relaxed">
                To empower businesses through innovative technology solutions that
                drive growth, efficiency, and competitive advantage. We believe
                in building partnerships, not just projects.
              </p>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card hover={false} className="h-full">
              <div className="w-12 h-12 rounded-xl bg-accent-blue-500/10 flex items-center justify-center mb-6">
                <Eye className="text-accent-blue-500" size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-dark-text mb-4">
                Our Vision
              </h3>
              <p className="text-dark-muted leading-relaxed">
                To be the most trusted technology partner for forward-thinking
                companies, known for delivering exceptional digital experiences
                that push boundaries and set new industry standards.
              </p>
            </Card>
          </Reveal>
        </div>
      </Container>
    </SectionWrapper>
  );
}
