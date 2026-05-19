import {
  Code2,
  Cuboid,
  Database,
  FileCode2,
  FileJson,
  Flame,
  Gamepad2,
  Layout,
  Network,
  Palette,
  Server,
  Zap,
  LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

interface Skill {
  name: string;
  icon: LucideIcon;
}

interface SkillGroup {
  title: string;
  skills: Skill[];
}

const groups: SkillGroup[] = [
  {
    title: "Game Development",
    skills: [
      { name: "Unity", icon: Gamepad2 },
      { name: "Blender", icon: Cuboid },
      { name: "C#", icon: Code2 },
      { name: "Networking", icon: Network },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", icon: Layout },
      { name: "TypeScript", icon: FileJson },
      { name: "Next.js", icon: FileCode2 },
      { name: "Node.js", icon: Server },
      { name: "Tailwind", icon: Palette },
      { name: "Turborepo", icon: Zap },
      { name: "Firebase", icon: Flame },
      { name: "Prisma", icon: Database },
    ],
  },
];

export default function SkillsSection() {
  return (
    <Section id="skills">
      <SectionHeading
        title="Skills & Technologies"
        subtitle="Tools and technologies I use to bring ideas to life."
      />

      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <linearGradient
            id="skill-gradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="24"
            y2="24"
          >
            <stop offset="0%" stopColor="var(--color-neon-400)" />
            <stop offset="100%" stopColor="var(--color-magenta-400)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="space-y-12">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-magenta-400">
              {group.title}
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {group.skills.map((skill, i) => (
                <Reveal key={skill.name} delay={i * 50}>
                  <Card className="flex flex-col items-center gap-3 py-8 hover:scale-105">
                    <skill.icon size={32} stroke="url(#skill-gradient)" />
                    <span className="text-base font-medium text-terminal">
                      {skill.name}
                    </span>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
