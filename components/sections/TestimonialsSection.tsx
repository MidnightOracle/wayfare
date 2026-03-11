"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const t = testimonials[active];

  return (
    <section className="py-24 px-6 bg-ivory text-obsidian relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40%] h-full bg-mist/50 pointer-events-none" />
      <div className="absolute top-8 right-8 font-display text-[15vw] text-obsidian/5 leading-none pointer-events-none select-none">
        &#8220;
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-[10px] tracking-widest2 uppercase text-rust mb-8 block">
              Traveler Stories
            </span>
            <div className="mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <span key={i} className="text-rust text-lg">★</span>
              ))}
            </div>
            <motion.blockquote
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-display text-[clamp(1.4rem,3vw,2.2rem)] leading-tight text-obsidian mb-8"
            >
              &ldquo;{t.quote}&rdquo;
            </motion.blockquote>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center font-display text-lg text-obsidian">
                {t.author[0]}
              </div>
              <div>
                <div className="font-body font-semibold text-obsidian">{t.author}</div>
                <div className="font-mono text-[10px] tracking-wider text-obsidian/50 uppercase">{t.location}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-10">
              <button onClick={prev} className="w-10 h-10 border border-obsidian/20 rounded-full flex items-center justify-center hover:bg-obsidian hover:text-ivory transition-all">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)} className={`h-px transition-all duration-300 ${i === active ? "w-8 bg-rust" : "w-3 bg-obsidian/30"}`} />
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 border border-obsidian/20 rounded-full flex items-center justify-center hover:bg-obsidian hover:text-ivory transition-all">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-px bg-obsidian/10"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            {[
              { num: "50K+", label: "Happy Travelers" },
              { num: "4.9★", label: "Average Rating" },
              { num: "180+", label: "Countries Reached" },
              { num: "10yr", label: "Warranty Guarantee" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-ivory p-8"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <div className="font-display text-4xl text-rust mb-2">{stat.num}</div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-obsidian/50">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
