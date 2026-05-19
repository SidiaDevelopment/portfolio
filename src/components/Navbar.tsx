"use client";

import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/SidiaDevelopment", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/marvin-fischer", icon: Linkedin },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "border-neon-500/10 bg-cyber-950/90"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-6 px-6 py-4">
        {/* Left placeholder (keeps nav truly centred) */}
        <div />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative font-medium text-sm text-dim uppercase tracking-wider transition-colors hover:text-neon-400"
              >
                {link.label}
                <span className="glow-line absolute -bottom-1 left-1/2 h-px w-0 transition-all duration-300 group-hover:left-0 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right: quick contacts (desktop) + mobile hamburger */}
        <div className="flex items-center justify-end gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="hidden text-dim transition-colors hover:text-neon-400 md:inline-flex"
            >
              <social.icon size={20} />
            </a>
          ))}
          <button
            className="text-dim md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-neon-500/10 bg-cyber-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 py-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block font-medium text-dim uppercase tracking-wider transition-colors hover:text-neon-400"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2 flex gap-5 border-t border-neon-500/10 pt-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-dim transition-colors hover:text-neon-400"
              >
                <social.icon size={22} />
              </a>
            ))}
          </li>
        </ul>
      </div>
    </nav>
  );
}
