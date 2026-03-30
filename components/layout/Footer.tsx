"use client";

import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/constants";
import LightningIcon from "@/components/shared/LightningIcon";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const socialIcons = [
  { icon: Linkedin, href: siteConfig.socials.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: siteConfig.socials.twitter, label: "Twitter" },
  { icon: Github, href: siteConfig.socials.github, label: "GitHub" },
  { icon: Instagram, href: siteConfig.socials.instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <LightningIcon animated className="w-8 h-8" />
              <span className="text-xl font-display font-bold text-dark-text">
                Toco Soft
              </span>
            </Link>
            <p className="text-dark-muted text-sm leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-dark-text font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark-muted hover:text-lightning-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-dark-text font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-dark-muted text-sm">Web Development</span>
              </li>
              <li>
                <span className="text-dark-muted text-sm">Mobile Apps</span>
              </li>
              <li>
                <span className="text-dark-muted text-sm">UI/UX Design</span>
              </li>
              <li>
                <span className="text-dark-muted text-sm">API Development</span>
              </li>
              <li>
                <span className="text-dark-muted text-sm">Consulting</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-dark-text font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-dark-muted text-sm">{siteConfig.email}</li>
              <li className="text-dark-muted text-sm">{siteConfig.phone}</li>
              <li className="text-dark-muted text-sm">{siteConfig.location}</li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-muted hover:text-lightning-400 transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-dark-border">
          <p className="text-dark-muted text-sm text-center">
            &copy; {new Date().getFullYear()} Toco Soft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
