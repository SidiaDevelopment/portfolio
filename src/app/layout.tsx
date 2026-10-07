import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sidia.net"),
  alternates: {
    canonical: "/",
  },
  title: "Marvin Fischer | Game & Web Developer",
  description:
    "Portfolio of Marvin Fischer — a Game & Web developer crafting modern web experiences and interactive applications.",
  keywords: [
    "Marvin Fischer",
    "Web Developer",
    "Unity Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Marvin Fischer" }],
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${jetbrainsMono.className} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
