import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Code2, Github, Linkedin, Mail } from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import { MacWindow } from "../components/ui-kit/MacWindow";
import { profile } from "../data/portfolio";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "ok" } | { kind: "error"; message: string };

const fieldClass =
  "w-full rounded-lg border border-ink-600 bg-ink-900 px-4 py-2.5 text-cream placeholder:text-ink-600 focus:border-mint-400 focus:outline-none";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS env vars missing. See .env.example.");
      setStatus({ kind: "error", message: "Contact form is not configured." });
      return;
    }

    setStatus({ kind: "sending" });
    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setStatus({ kind: "ok" });
        form.current?.reset();
      })
      .catch((error: unknown) => {
        console.error("EmailJS Error:", error);
        setStatus({ kind: "error", message: "Failed to send. Please try again later." });
      });
  };

  const socials = [
    { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
    { href: profile.links.github, label: "GitHub", icon: Github },
    { href: profile.links.linkedin, label: "LinkedIn", icon: Linkedin },
    { href: profile.links.leetcode, label: "LeetCode", icon: Code2 },
  ];

  return (
    <div>
      <PageHeader
        index="04"
        label="contact"
        title="Let's talk"
        intro="Got a project, an internship or just want to say hi? Send a message and I'll get back to you."
      />

      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <MacWindow title="~/new-message">
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block font-mono text-xs text-sand">
                name
              </label>
              <input id="name" name="name" type="text" required className={fieldClass} />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block font-mono text-xs text-sand">
                email
              </label>
              <input id="email" name="email" type="email" required className={fieldClass} />
            </div>
            <div>
              <label htmlFor="subject" className="mb-1 block font-mono text-xs text-sand">
                subject
              </label>
              <input id="subject" name="subject" type="text" required className={fieldClass} />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block font-mono text-xs text-sand">
                message
              </label>
              <textarea id="message" name="message" rows={5} required className={fieldClass} />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status.kind === "sending"}
                className="cursor-target rounded-full bg-ember px-6 py-3 font-medium text-ink-950 transition hover:brightness-110 disabled:opacity-60"
              >
                {status.kind === "sending" ? "Sending…" : "Send message"}
              </button>
              <p role="status" aria-live="polite" className="text-sm">
                {status.kind === "ok" && <span className="text-mint-300">Sent. Thanks, I&apos;ll reply soon.</span>}
                {status.kind === "error" && <span className="text-[#e0685c]">{status.message}</span>}
              </p>
            </div>
          </form>
        </MacWindow>

        <div className="space-y-4">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target group flex items-center justify-between rounded-[20px] border border-ink-600 bg-ink-800 p-5 transition hover:border-mint-400/60"
            >
              <span className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-mint-300" />
                <span className="font-display text-paper">{label}</span>
              </span>
              <span className="font-mono text-xs text-sand group-hover:text-ember">open ↗</span>
            </a>
          ))}
          <a
            href={profile.links.resume}
            download
            className="cursor-target block rounded-[20px] border border-ember/40 bg-ember/10 p-5 text-center font-display text-ember transition hover:bg-ember/20"
          >
            Download resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
