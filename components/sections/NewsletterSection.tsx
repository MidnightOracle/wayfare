"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* BG grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian pointer-events-none" />

      <div className="max-w-[800px] mx-auto text-center relative">
        <span className="font-mono text-[10px] tracking-widest2 uppercase text-rust mb-6 block">
          Join the Journey
        </span>
        <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-tight text-ivory mb-4">
          First to Know.
          <br />
          <span className="text-sand italic">First to Explore.</span>
        </h2>
        <p className="font-body text-sm text-ivory/50 mb-10 max-w-md mx-auto">
          Get early access to new drops, exclusive offers, and travel stories from the Wayfare community.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-rust font-mono text-sm tracking-widest uppercase">
            <span className="text-xl">✦</span>
            Welcome to the Journey
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 bg-white/5 border border-white/10 rounded-sm px-5 py-4 font-mono text-xs text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-rust transition-colors"
            />
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 bg-rust text-ivory font-mono text-[10px] tracking-widest uppercase px-6 py-4 hover:bg-ember transition-colors whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        )}

        <p className="font-mono text-[9px] tracking-wider text-ivory/20 mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
