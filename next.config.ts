import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    qualities: [75, 95],
  },
  experimental: {
    // Inline the (small) stylesheet into the HTML so it doesn't block first render
    inlineCss: true,
  },
};

export default nextConfig;
