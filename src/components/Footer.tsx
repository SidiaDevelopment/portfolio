"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neon-400/10 bg-cyber-950 py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <p className="text-sm text-dim">
          &copy; 2026 Marvin Fischer. All rights reserved.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="footer-link flex items-center gap-1.5 text-sm text-dim transition-all hover:text-neon-400"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
          Top
        </button>
      </div>
    </footer>
  );
}
