"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const showcases = [
  {
    title: "The Atlas Series",
    sub: "Luggage",
    desc: "Hard-shell polycarbonate bodies. Silent spinner wheels. TSA-approved locks. Crafted to last through a thousand journeys.",
    href: "/collections?category=suitcases",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=85",
    stat: "38–78L",
    statLabel: "Capacity Range",
    dark: true,
  },
  {
    title: "The Ridge Series",
    sub: "Backpacks",
    desc: "From boardroom to basecamp. Waterproof zippers, laptop compartments built for the 16\", and straps that never bite.",
    href: "/collections?category=backpacks",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&q=85",
    stat: "19–40L",
    statLabel: "Capacity Range",
    dark: false,
  },
];

export default function CategoryShowcase() {
  return (
    <section className="py-8 px-6 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {showcases.map((item, i) => (
          <motion.div
            key={item.title}
            className="relative overflow-hidden rounded-sm group aspect-[4/5] lg:aspect-[3/4]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className={`absolute inset-0 ${item.dark ? "bg-gradient-to-t from-obsidian/90 via-obsidian/30 to-transparent" : "bg-gradient-to-t from-obsidian/85 via-obsidian/20 to-transparent"}`} />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.15 }}
              >
                <span className="font-mono text-[10px] tracking-widest2 uppercase text-sand mb-3 block">{item.sub}</span>
                <h3 className="font-display text-4xl text-ivory mb-3">{item.title}</h3>
                <p className="font-body text-sm text-ivory/70 mb-6 max-w-xs leading-relaxed">{item.desc}</p>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="font-display text-2xl text-rust">{item.stat}</div>
                    <div className="font-mono text-[9px] tracking-widest uppercase text-ivory/40">{item.statLabel}</div>
                  </div>
                  <Link href={item.href} className="group/btn flex items-center gap-2 bg-ivory text-obsidian font-mono text-[10px] tracking-widest uppercase px-5 py-3 hover:bg-rust hover:text-ivory transition-all duration-300">
                    Explore
                    <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
