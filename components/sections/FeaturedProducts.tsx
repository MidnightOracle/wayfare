"use client";

import { useState } from "react";
import { products, categories } from "@/lib/data";
import ProductCard from "@/components/ui/ProductCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 px-6 max-w-[1400px] mx-auto">
      <motion.div
        className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <span className="font-mono text-[10px] tracking-widest2 uppercase text-rust mb-3 block">
            The Collection
          </span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-tight text-ivory">
            Everything You Need,
            <br />
            <span className="text-sand italic">Nothing You Don&apos;t.</span>
          </h2>
        </div>
        <Link href="/collections" className="group hidden md:flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-ivory/60 hover:text-rust transition-colors">
          View All Products
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>

      <div className="flex gap-1 mb-12 overflow-x-auto scroll-x pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`font-mono text-[10px] tracking-widest uppercase px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 ${
              activeCategory === cat.id ? "bg-rust text-ivory" : "bg-white/5 text-ivory/50 hover:bg-white/10 hover:text-ivory"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
        {filtered.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex md:hidden justify-center">
        <Link href="/collections" className="group flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-ivory/60 hover:text-rust transition-colors">
          View All Products
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
