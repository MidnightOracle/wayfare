"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { products, categories } from "@/lib/data";
import { SlidersHorizontal } from "lucide-react";

const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "New Arrivals"];

function CollectionsContent() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSort, setActiveSort] = useState("Featured");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filtered = (
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory)
  ).sort((a, b) => {
    if (activeSort === "Price: Low to High") return a.price - b.price;
    if (activeSort === "Price: High to Low") return b.price - a.price;
    return 0;
  });

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 mb-12">
        <span className="font-mono text-[10px] tracking-widest2 uppercase text-rust mb-3 block">
          Wayfare
        </span>
        <h1 className="font-display text-[clamp(3rem,6vw,6rem)] leading-none text-ivory">
          All Collections
        </h1>
        <p className="font-body text-sm text-ivory/50 mt-3 max-w-md">
          {filtered.length} products crafted for the discerning traveler.
        </p>
      </div>

      <div className="sticky top-[60px] z-30 bg-obsidian/95 backdrop-blur-md border-y border-white/5 py-3 mb-10">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between gap-4">
          <div className="flex gap-1 overflow-x-auto scroll-x">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`font-mono text-[10px] tracking-widest uppercase px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? "bg-rust text-ivory"
                    : "text-ivory/50 hover:text-ivory"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="hidden lg:flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-ivory/50 hover:text-ivory transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </button>
            <select
              value={activeSort}
              onChange={(e) => setActiveSort(e.target.value)}
              className="bg-transparent border border-white/10 font-mono text-[10px] tracking-widest uppercase text-ivory/60 px-3 py-2 focus:outline-none focus:border-rust cursor-pointer"
            >
              {sortOptions.map((o) => (
                <option key={o} value={o} className="bg-obsidian">
                  {o}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {filtered.map((product, i) => (
            <div key={product.id} style={{ animationDelay: `${i * 0.07}s` }} className="animate-fade-in">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="font-display text-3xl text-ivory/20">No products found</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default function CollectionsPage() {
  return (
    <div className="grain">
      <Navbar />
      <Suspense fallback={<div className="pt-32 pb-24 text-center text-ivory/30">Loading...</div>}>
        <CollectionsContent />
      </Suspense>
      <Footer />
    </div>
  );
}
