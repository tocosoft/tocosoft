"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/shared/AnimatedText";
import ScrollIndicator from "@/components/shared/ScrollIndicator";
import Button from "@/components/ui/Button";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/95 to-dark-bg" />

      {/* Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(132,204,22,0.08)_0%,transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-dark-card border border-dark-border"
        >
          <Zap size={16} className="text-lightning-500" />
          <span className="text-sm text-dark-muted">
            Powering Digital Transformation
          </span>
        </motion.div>

        <AnimatedText
          text="We Build Digital Experiences That Strike Fast."
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-dark-text leading-tight mb-6"
          delay={0.4}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-dark-muted mb-10"
        >
          We design and develop cutting-edge web and mobile applications that
          drive results. From concept to launch, we bring your vision to life
          with speed and precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/portfolio">
            <Button size="lg" className="group">
              View Our Work
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Get a Free Quote
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "30+", label: "Happy Clients" },
            { value: "5+", label: "Years Experience" },
            { value: "99%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-lightning-400">
                {stat.value}
              </div>
              <div className="text-sm text-dark-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
