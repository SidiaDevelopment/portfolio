"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, ExternalLink, Github, Globe, Smartphone, Layers } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

interface ProjectLink {
  type: "appStore" | "playStore" | "website" | "github";
  href: string;
}

interface ExperienceProject {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  links?: ProjectLink[];
}

interface Job {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  projects?: ExperienceProject[];
}

const experience: Job[] = [
  {
    company: "Swift Games",
    role: "Unity Developer → Senior Unity Developer",
    period: "2023 — Present",
    description:
      "Working on mobile roguelite games in Unity, focused on build-crafting systems and combat.",
    projects: [
      {
        title: "Heroes vs Hordes",
        description:
          "A roguelite action RPG about surviving endless waves of monsters. 100+ heroes, a deep build-crafting system, and competitive multiplayer modes on top.",
        tags: ["Unity", "C#", "Mobile", "RPG"],
        image: "/heroes-vs-hordes.jpg",
        links: [
          { type: "appStore", href: "https://apps.apple.com/us/app/heroes-vs-hordes-survival-rpg/id1608898173" },
          { type: "playStore", href: "https://play.google.com/store/apps/details?id=com.swiftgames.survival" },
        ],
      },
      {
        title: "The Walking Dead: Aftermath",
        description:
          "A mobile survival game in the Walking Dead universe, built on the same roguelite combat foundations we developed at the studio.",
        tags: ["Unity", "C#", "Mobile"],
        image: "/twd-aftermath.png",
        links: [
          { type: "appStore", href: "https://apps.apple.com/pl/app/the-walking-dead-aftermath/id6751237805" },
          { type: "playStore", href: "https://play.google.com/store/apps/details?id=com.ares.twd" },
        ],
      },
    ],
  },
  {
    company: "ReactionLink",
    role: "Senior Frontend Engineer",
    period: "Nov 2022 — Feb 2023",
    location: "Berlin",
    description:
      "Built audience interaction tools for live TV broadcasts.",
    projects: [
      {
        title: "TV Polling Software",
        description:
          "Polls, word clouds and Q&A sessions for live TV. The challenge was keeping latency low enough that what viewers saw on screen actually matched what they were voting on.",
        tags: ["Next.js", "TypeScript", "React", "Real-time"],
      },
    ],
  },
  {
    company: "Popcore GmbH",
    role: "Unity Developer",
    period: "Sep 2019 — Nov 2022",
    location: "Berlin",
    description:
      "Built hyper-casual mobile games in Unity using the Entitas ECS framework. The titles I worked on add up to over 400 million downloads combined.",
    projects: [
      {
        title: "Pull the Pin",
        description:
          "Physics-based puzzle game, over 250 million downloads. You pull pins in the right order to guide balls into a container while avoiding bombs, black holes and other hazards.",
        tags: ["Unity", "C#", "Mobile", "Puzzle"],
        image: "/pull-the-pin.png",
        links: [
          { type: "appStore", href: "https://apps.apple.com/us/app/pull-the-pin/id1496150467" },
          { type: "playStore", href: "https://play.google.com/store/apps/details?id=com.maroieqrwlk.unpin" },
        ],
      },
      {
        title: "Parking Jam 3D",
        description:
          "Casual puzzle game, over 130 million downloads. You untangle crowded parking lots by sliding cars out in the right order, working around obstacles and a wandering granny that gets in the way.",
        tags: ["Unity", "C#", "Mobile", "Puzzle"],
        image: "/parking-jam.png",
        links: [
          { type: "appStore", href: "https://apps.apple.com/us/app/parking-jam-3d/id1498229533" },
          { type: "playStore", href: "https://play.google.com/store/apps/details?id=com.lszenlamzr.parkingjam" },
        ],
      },
      {
        title: "Color Swipe",
        description:
          "Swipe-based puzzle game. Every cube on the board moves at the same time, so filling the board in as few moves as possible takes some planning ahead.",
        tags: ["Unity", "C#", "Mobile", "Puzzle"],
        image: "/color-swipe.jpg",
      },
      {
        title: "Paint the Cube",
        description:
          "Roll a cube around a grid and paint each tile it lands on, until the whole board is covered.",
        tags: ["Unity", "C#", "Mobile", "Puzzle"],
        image: "/paint-the-cube.jpg",
        links: [
          { type: "playStore", href: "https://play.google.com/store/apps/details?hl=en&id=com.iewagaicho.paintthecube" },
        ],
      },
      {
        title: "Clash of Blocks",
        description:
          "Block-stacking puzzle game built around quick decisions and combo scoring.",
        tags: ["Unity", "C#", "Mobile", "Puzzle"],
        image: "/clash-of-blocks.jpg",
        links: [
          { type: "appStore", href: "https://apps.apple.com/us/app/clash-of-blocks/id1485268556" },
          { type: "playStore", href: "https://play.google.com/store/apps/details?id=com.eqrwiodfk.clashofblocks" },
        ],
      },
      {
        title: "50+ Hyper-Casual Prototypes",
        description:
          "Over 50 hyper-casual mobile prototypes taken to soft-launch and tested with live data. Many were sunset early because the numbers did not support a full release. Developed a wide range of game mechanics, learning every part of Unity along the way.",
        tags: ["Unity", "C#", "Mobile", "Prototyping"],
      },
    ],
  },
  {
    company: "CHECK24 Hotel",
    role: "Frontend Engineer",
    period: "Jan 2017 — Sep 2019",
    location: "Münster",
    description:
      "Frontend work on the hotel section of Germany's largest comparison portal. I was part of the team rewriting the customer-facing site in TypeScript and React while the Zend/PHP backend stayed in place underneath.",
    projects: [
      {
        title: "CHECK24 Hotel — Legacy Frontend",
        description:
          "Germany's largest hotel comparison portal. The original frontend ran on PHP, the Zend Framework and vanilla JavaScript. I worked on features and fixes in that stack while it was still carrying production traffic.",
        tags: ["PHP", "Zend", "JavaScript"],
        links: [{ type: "website", href: "https://www.check24.de/hotel/" }],
      },
      {
        title: "CHECK24 Hotel — Modern Rewrite",
        description:
          "I was part of the team that rewrote the customer-facing hotel site in TypeScript and React. The PHP backend stayed where it was, and we migrated features over piece by piece so the live portal kept running through the transition.",
        tags: ["TypeScript", "React", "PHP"],
        links: [{ type: "website", href: "https://www.check24.de/hotel/" }],
      },
    ],
  },
  {
    company: "Aktivshop",
    role: "Apprentice → Junior Full Stack Engineer",
    period: "Sep 2013 — Jan 2017",
    location: "Rheine",
    description:
      "Built and maintained the online shop for a small medical retailer, plus the tracking setup, SEO work, and a few WordPress blogs that lived next to it.",
    projects: [
      {
        title: "Aktivshop Online Store",
        description:
          "Online shop for a medical and mobility retailer in Rheine. I built and maintained the storefront, set up tracking, did SEO work, and looked after the WordPress blogs running alongside it.",
        tags: ["PHP", "JavaScript", "WordPress", "SEO"],
        links: [{ type: "website", href: "https://www.aktivshop.de/" }],
      },
    ],
  },
];

const linkMeta: Record<ProjectLink["type"], { label: string; icon: typeof Github }> = {
  appStore: { label: "App Store", icon: Smartphone },
  playStore: { label: "Google Play", icon: ExternalLink },
  website: { label: "Visit Site", icon: Globe },
  github: { label: "Code", icon: Github },
};

export default function ExperienceSection() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <Section id="experience">
      <SectionHeading
        title="Experience"
        subtitle="Places I've worked and things I built there."
      />

      <Reveal className="relative space-y-12 border-l border-neon-400/20 pl-8">
        {experience.map((job) => (
          <article key={job.company} className="relative">
            <span className="glow-line absolute -left-[38px] top-3 h-3 w-3 rounded-full" />

            <header className="mb-3">
              <h3 className="text-2xl font-bold text-neon-300">{job.company}</h3>
              <div className="mt-1 font-mono text-sm uppercase tracking-wider text-magenta-400">
                {job.role}
              </div>
              <div className="mt-1 font-mono text-xs uppercase tracking-wider text-dim">
                {job.period}
                {job.location && ` · ${job.location}`}
              </div>
            </header>

            <p className="mb-5 text-sm text-dim">{job.description}</p>

            {job.projects && (
              <ul className="space-y-2">
                {job.projects.map((project) => {
                  const key = `${job.company}::${project.title}`;
                  const open = openKey === key;
                  return (
                    <li key={key} className="border border-neon-400/15 bg-cyber-900/40">
                      <button
                        type="button"
                        onClick={() => setOpenKey(open ? null : key)}
                        aria-expanded={open}
                        className="flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-neon-400/5"
                      >
                        <ChevronRight
                          size={16}
                          className={`shrink-0 text-neon-400 transition-transform duration-300 ${open ? "rotate-90" : ""}`}
                        />
                        <span className="flex-1 font-medium text-terminal">{project.title}</span>
                        <span className="hidden gap-1.5 sm:flex">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="border border-neon-400/20 bg-neon-400/5 px-2 py-0.5 font-mono text-[10px] uppercase text-neon-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </span>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                      >
                        <div className="overflow-hidden">
                          <div className="border-t border-neon-400/10 p-4 sm:flex sm:gap-5">
                            <div className="relative mb-4 h-32 w-full overflow-hidden border border-neon-400/10 sm:mb-0 sm:h-32 sm:w-48 sm:shrink-0">
                              {project.image ? (
                                <Image
                                  src={project.image}
                                  alt={project.title}
                                  fill
                                  quality={95}
                                  sizes="192px"
                                  className="object-cover [image-rendering:high-quality] [transform:translateZ(0)]"
                                />
                              ) : (
                                <div className="flex h-full items-center justify-center bg-cyber-800">
                                  <Layers className="text-neon-400/20" size={32} />
                                </div>
                              )}
                            </div>

                            <div className="flex-1">
                              <p className="text-sm text-dim">{project.description}</p>
                              <div className="mt-3 flex flex-wrap gap-1.5 sm:hidden">
                                {project.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="border border-neon-400/20 bg-neon-400/5 px-2 py-0.5 font-mono text-[10px] uppercase text-neon-400"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              {project.links && project.links.length > 0 && (
                                <div className="mt-4 flex flex-wrap gap-4">
                                  {project.links.map((link) => {
                                    const { label, icon: Icon } = linkMeta[link.type];
                                    return (
                                      <a
                                        key={link.href}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-sm font-medium text-neon-400 underline decoration-neon-400/30 underline-offset-4 transition-colors hover:text-magenta-400 hover:decoration-magenta-400/60"
                                      >
                                        <Icon size={16} />
                                        {label}
                                      </a>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </article>
        ))}
      </Reveal>
    </Section>
  );
}
