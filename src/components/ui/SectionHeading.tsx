import Reveal from "@/components/ui/Reveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mb-16 text-center">
      <h2 className="text-neon-400 neon-glow-text text-3xl font-bold tracking-wider uppercase sm:text-4xl">
        {title}
      </h2>
      <div className="glow-line mx-auto mt-4 h-px w-20" />
      {subtitle && <p className="mx-auto mt-4 max-w-lg text-dim">{subtitle}</p>}
    </Reveal>
  );
}
