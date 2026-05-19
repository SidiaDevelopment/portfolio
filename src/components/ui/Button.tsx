import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "neon" | "magenta";

const variants: Record<Variant, string> = {
  neon: "border-neon-400 text-neon-400 hover:bg-neon-400/10",
  magenta: "border-magenta-400 text-magenta-400 hover:bg-magenta-400/10",
};

const base =
  "btn-glitch inline-flex items-center justify-center gap-2 rounded-none border px-8 py-3 font-medium uppercase tracking-wider transition-all disabled:opacity-50";

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export default function Button(props: ButtonProps | LinkProps) {
  const { variant = "neon", className = "", children, ...rest } = props;
  const cls = `${base} ${variants[variant]} ${className}`;

  if ("href" in rest && rest.href) {
    return (
      <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
