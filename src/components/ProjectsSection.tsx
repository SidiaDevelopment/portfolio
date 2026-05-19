import { Bot, Code2, MessagesSquare, Search, Globe, Server, Users } from "lucide-react";
import { LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

interface ProjectLink {
  href: string;
  label: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  links?: ProjectLink[];
}

const projects: Project[] = [
  {
    title: "Hobby Server Management",
    description:
      "Maintain a personal infrastructure of 5 servers running bots, websites, automations, cloud storage, monitoring, databases, and app backends. Handle SSL certificate management, container orchestration and reverse proxy setup — hands-on with Systemd, Docker, Linux and Nginx.",
    tags: ["Linux", "Docker", "Nginx", "Systemd", "SSL"],
    icon: Server,
  },
  {
    title: "Code Share",
    description:
      "A code sharing site with syntax highlighting for most languages, ShareX integration, and link-based sharing.",
    tags: ["Next.js", "TypeScript", "Web"],
    icon: Code2,
    links: [{ href: "https://share.sidia.net", label: "share.sidia.net" }],
  },
  {
    title: "Discord Community Management",
    description:
      "Admin of the official German League of Legends and Valorant Discord communities. I build the bots, set up the role and channel structure, run events with Riot, and moderate. Combined around 250,000 members.",
    tags: ["Discord", "Community", "Moderation", "Riot Games"],
    icon: Users,
    links: [
      { href: "https://discord.gg/lolde", label: "discord.gg/lolde" },
      { href: "https://discord.gg/valorantde", label: "discord.gg/valorantde" },
    ],
  },
  {
    title: "League of Legends / Valorant Discord Bot",
    description:
      "Freelance bot I built for Riot Games. Handles moderation, role assignment and a few community features on the official German League of Legends Discord.",
    tags: ["TypeScript", "Node.js", "Discord.js", "Riot API"],
    icon: Bot,
    links: [
      { href: "https://discord.gg/lolde", label: "discord.gg/lolde" },
      { href: "https://discord.gg/valorantde", label: "discord.gg/valorantde" },
    ],
  },
  {
    title: "Path of Exile Exchange Discord Bot",
    description:
      "Bot for Maxroll's official Path of Exile trading Discord. Pulls service offers from Maxroll's PoE Exchange into the relevant channels as they come in, and handles user vouching so traders build up a reputation.",
    tags: ["TypeScript", "Node.js", "Discord.js", "Maxroll"],
    icon: MessagesSquare,
    links: [
      { href: "https://discord.com/invite/path-of-exile-trading-530668348682403841", label: "Discord" },
      { href: "https://maxroll.gg/poe/poexchange/services/listings", label: "maxroll.gg/poexchange" },
    ],
  },
  {
    title: "Path of Exile Acronym Bot",
    description:
      "Reddit bot that scans the Path of Exile subreddit. When someone uses a community acronym, it replies with the definition so newer players can keep up.",
    tags: ["TypeScript", "Node.js", "Reddit API"],
    icon: Search,
    links: [
      { href: "https://www.reddit.com/user/PoE_Acronym_Bot", label: "u/PoE_Acronym_Bot" },
      { href: "https://acronym.sidia.net/acronyms/pathofexile", label: "acronym.sidia.net" },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <Section id="projects">
      <SectionHeading
        title="Projects"
        subtitle="Side projects and tools I've built outside of work."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 80}>
            <Card className="flex h-full flex-col">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-neon-400/30 bg-neon-400/5 text-neon-400">
                  <project.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-neon-300">{project.title}</h3>
              </div>

              <p className="flex-1 text-sm text-dim">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-neon-400/20 bg-neon-400/5 px-3 py-1 font-mono text-xs text-neon-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.links && project.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-neon-400/10 pt-4">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-neon-400 underline decoration-neon-400/30 underline-offset-4 transition-colors hover:text-magenta-400 hover:decoration-magenta-400/60"
                    >
                      <Globe size={16} />
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
