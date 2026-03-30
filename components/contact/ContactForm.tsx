"use client";

import { useState } from "react";
import { Send, Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Reveal from "@/components/shared/Reveal";
import { siteConfig } from "@/lib/constants";

const socialIcons = [
  { icon: Linkedin, href: siteConfig.socials.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: siteConfig.socials.twitter, label: "Twitter" },
  { icon: Github, href: siteConfig.socials.github, label: "GitHub" },
  { icon: Instagram, href: siteConfig.socials.instagram, label: "Instagram" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <section className="pt-32 pb-16 bg-dark-bg">
        <Container>
          <Reveal className="text-center max-w-3xl mx-auto">
            <span className="text-lightning-500 font-medium text-sm uppercase tracking-wider">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark-text mt-4 mb-6">
              Let&apos;s Work Together
            </h1>
            <p className="text-lg text-dark-muted">
              Have a project in mind? We&apos;d love to hear about it. Send us a
              message and let&apos;s start a conversation.
            </p>
          </Reveal>
        </Container>
      </section>

      <SectionWrapper className="bg-dark-card">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Reveal>
              <Card hover={false} className="p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-lightning-500/10 flex items-center justify-center">
                      <Send className="text-lightning-500" size={32} />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-dark-text mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-dark-muted">
                      Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-dark-text mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-dark-text placeholder-dark-muted focus:outline-none focus:border-lightning-500 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-text mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-dark-text placeholder-dark-muted focus:outline-none focus:border-lightning-500 transition-colors"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-text mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-dark-text placeholder-dark-muted focus:outline-none focus:border-lightning-500 transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-text mb-2">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-dark-text focus:outline-none focus:border-lightning-500 transition-colors"
                      >
                        <option value="">Select a project type</option>
                        <option value="web">Web Application</option>
                        <option value="mobile">Mobile App</option>
                        <option value="design">UI/UX Design</option>
                        <option value="api">API Development</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-text mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-dark-text placeholder-dark-muted focus:outline-none focus:border-lightning-500 transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg" isLoading={isSubmitting}>
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </Reveal>

            {/* Contact Info */}
            <Reveal delay={0.1}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-display font-bold text-dark-text mb-6">
                    Get in Touch
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-lightning-500/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="text-lightning-500" size={24} />
                      </div>
                      <div>
                        <div className="font-medium text-dark-text">Email</div>
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="text-dark-muted hover:text-lightning-400 transition-colors"
                        >
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-lightning-500/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="text-lightning-500" size={24} />
                      </div>
                      <div>
                        <div className="font-medium text-dark-text">Phone</div>
                        <a
                          href={`tel:${siteConfig.phone}`}
                          className="text-dark-muted hover:text-lightning-400 transition-colors"
                        >
                          {siteConfig.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-lightning-500/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-lightning-500" size={24} />
                      </div>
                      <div>
                        <div className="font-medium text-dark-text">Location</div>
                        <div className="text-dark-muted">{siteConfig.location}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-dark-border">
                  <div className="font-medium text-dark-text mb-4">Follow Us</div>
                  <div className="flex gap-4">
                    {socialIcons.map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-dark-border text-dark-muted hover:bg-lightning-500/10 hover:text-lightning-500 transition-all flex items-center justify-center"
                        aria-label={label}
                      >
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-dark-bg border border-dark-border">
                  <h4 className="font-semibold text-dark-text mb-2">
                    Looking for a quick estimate?
                  </h4>
                  <p className="text-dark-muted text-sm mb-4">
                    Check out our services and get a rough idea of costs. We
                    provide transparent pricing with no hidden fees.
                  </p>
                  <Button variant="secondary" size="sm">
                    View Our Services
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
