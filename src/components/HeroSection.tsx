"use client";

import { useEffect } from "react";
import { ArrowDown } from "lucide-react";
import GridBackground from "@/components/ui/GridBackground";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  useEffect(() => {
    function handleWheel(e: WheelEvent) {
      if (window.scrollY === 0 && e.deltaY > 0) {
        e.preventDefault();
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <GridBackground />

      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-neon-400/15 blur-[128px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-magenta-400/10 blur-[128px]" />

      <div className="relative z-10 px-6 text-center">
        <p className="mb-4 font-mono text-base tracking-[0.25em] text-neon-400/70 uppercase">
          Game &amp; Web Developer
        </p>

        <h1 className="text-neon-400 text-glow animate-glitch text-5xl font-extrabold tracking-wider sm:text-7xl lg:text-8xl">
          MARVIN
          <br />
          FISCHER
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-dim">
          I build web apps and games. Currently shipping mobile titles at
          Swift Games out of Berlin.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="#experience" variant="neon" className="w-56 sm:w-auto">
            My Experience
          </Button>
          <Button href="#contact" variant="magenta" className="w-56 sm:w-auto">
            Get in Touch
          </Button>
        </div>

        <div className="mt-20 flex justify-center">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="animate-scroll-hint text-neon-400/50" size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
