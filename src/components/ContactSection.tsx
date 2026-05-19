"use client";

import { useState, FormEvent } from "react";
import { Github, Linkedin, Mail, Send, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import TextField from "@/components/ui/TextField";

type FormStatus = "idle" | "sending" | "sent" | "error";

const WEB3FORMS_KEY = "YOUR_ACCESS_KEY_HERE";

const socialLinks = [
  { label: "Email", display: "marvin@sidia.net", href: "mailto:marvin@sidia.net", icon: Mail },
  { label: "GitHub", display: "SidiaDevelopment", href: "https://github.com/SidiaDevelopment", icon: Github },
  { label: "LinkedIn", display: "marvin-fischer", href: "https://linkedin.com/in/marvin-fischer", icon: Linkedin },
];

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (WEB3FORMS_KEY === "YOUR_ACCESS_KEY_HERE") {
      const name = data.get("name") as string;
      const email = data.get("email") as string;
      const message = data.get("message") as string;
      window.location.href = `mailto:marvin@sidia.net?subject=Contact from ${name} (${email})&body=${encodeURIComponent(message)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const buttonLabel =
    status === "sending" ? "Sending..." : status === "error" ? "Try Again" : "Send Message";

  return (
    <Section id="contact">
      <SectionHeading
        title="Get in Touch"
        subtitle="Got something to discuss or just want to chat? Drop me a message."
      />

      <Reveal className="grid gap-12 md:grid-cols-2">
        <Card className={status === "sent" ? "border-neon-400/50" : ""}>
          {status === "sent" ? (
            <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
              <CheckCircle className="text-neon-400" size={48} />
              <p className="text-lg font-medium text-terminal">Message sent.</p>
              <p className="text-sm text-dim">
                Thanks, I&apos;ll get back to you.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-sm text-magenta-400 transition-colors hover:text-magenta-300"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <TextField id="name" name="name" label="Name" type="text" required placeholder="Your name" />
              <TextField id="email" name="email" label="Email" type="email" required placeholder="your@email.com" />
              <TextField
                as="textarea"
                id="message"
                name="message"
                label="Message"
                required
                rows={5}
                placeholder="What's on your mind?"
              />
              <Button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-neon-400/10 hover:bg-neon-400/20"
              >
                <Send size={18} />
                {buttonLabel}
              </Button>
            </form>
          )}
        </Card>

        <div className="flex flex-col gap-6">
          <p className="text-dim">
            Or find me here:
          </p>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-card flex items-center gap-4 px-6 py-4"
            >
              <link.icon className="text-magenta-400" size={24} />
              <div>
                <div className="font-medium text-terminal">{link.label}</div>
                <div className="text-sm text-dim">{link.display}</div>
              </div>
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
