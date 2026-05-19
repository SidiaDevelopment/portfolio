import { Code2, Gamepad2, Rocket } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

const CAREER_START_YEAR = 2013;
const yearsExperience = new Date().getFullYear() - CAREER_START_YEAR;

const stats = [
  { icon: Rocket, label: "Years of\nExperience", value: `${yearsExperience}+` },
  { icon: Gamepad2, label: "Shipped\nMobile Games", value: "10+" },
  { icon: Code2, label: "Shipped Web\nApplications", value: "5+" },
];

export default function AboutSection() {
  return (
    <Section id="about">
      <SectionHeading
        title="About Me"
        subtitle="A bit about my background, the work I do, and the tools I reach for."
      />

      <Reveal className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-4 text-dim">
          <p>
            I&apos;m <span className="font-semibold text-neon-400">Marvin Fischer</span>, a
            developer based in Berlin. I&apos;ve been doing this for around 13
            years, split between web work (React, Next.js, TypeScript) and
            games in Unity with C#. Right now I&apos;m at Swift Games working
            on mobile titles.
          </p>
          <p>
            On the games side I&apos;ve shipped a bunch of titles and prototyped
            many more across all kinds of mechanics. The web work has been
            online shops and B2B applications. Outside of that I build tool
            sites, Discord bots and automations as a hobby.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100} className="h-full">
              <Card className="flex h-full flex-col items-center justify-center text-center">
                <stat.icon className="mb-3 text-neon-400" size={32} />
                <div className="neon-glow-text text-2xl font-bold text-neon-400">
                  {stat.value}
                </div>
                <div className="mt-1 whitespace-pre-line text-sm text-dim">{stat.label}</div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
