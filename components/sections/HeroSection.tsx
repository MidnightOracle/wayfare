"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    headline: "Built\nfor the\nJourney",
    sub: "Premium luggage for restless souls",
    cta: "Shop Luggage",
    href: "/collections/luggage",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=90",
    accent: "#C4541A",
    tag: "NEW ARRIVALS — SS'25",
  },
  {
    headline: "Every\nCarry\nCounts",
    sub: "Backpacks engineered for the long haul",
    cta: "Shop Backpacks",
    href: "/collections/backpacks",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=90",
    accent: "#3D4A5C",
    tag: "BESTSELLERS",
  },
  {
    headline: "Travel\nLight.\nLive Full.",
    sub: "Wallets & accessories that go the distance",
    cta: "Explore All",
    href: "/collections",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=90",
    accent: "#C8B89A",
    tag: "ACCESSORIES",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = (idx: number) => {
    if (animating || idx === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 400);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background image */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${animating ? "opacity-0" : "opacity-100"}`}
      >
        <Image
          src={slide.image}
          alt={slide.headline}
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-obsidian/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 max-w-[1400px] mx-auto">
        {/* Tag */}
        <div
          className={`mb-8 transition-all duration-700 ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
          style={{ transitionDelay: "0.1s" }}
        >
          <span className="font-mono text-[10px] tracking-widest2 uppercase text-sand border border-sand/30 px-3 py-1.5 rounded-sm">
            {slide.tag}
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`font-display text-[clamp(4rem,10vw,9rem)] leading-[0.9] text-ivory mb-8 transition-all duration-700 ${
            animating ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
          }`}
          style={{ transitionDelay: "0.2s", whiteSpace: "pre-line" }}
        >
          {slide.headline}
        </h1>

        {/* Sub + CTA */}
        <div
          className={`flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 transition-all duration-700 ${
            animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          <p className="font-body text-lg text-ivory/70 max-w-xs">{slide.sub}</p>
          <Link
            href={slide.href}
            className="group flex items-center gap-3 bg-ivory text-obsidian font-mono text-[11px] tracking-widest uppercase px-6 py-4 hover:bg-rust hover:text-ivory transition-all duration-300"
          >
            {slide.cta}
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Slide indicators */}
        <div className="flex gap-2 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-px transition-all duration-500 ${
                i === current ? "w-12 bg-rust" : "w-4 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2 opacity-50">
        <span className="font-mono text-[9px] tracking-widest uppercase text-ivory rotate-90 translate-y-2">
          Scroll
        </span>
        <div className="w-px h-12 bg-ivory/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-rust animate-[scrollDown_2s_ease-in-out_infinite]" style={{ height: "40%" }} />
        </div>
      </div>
    </section>
  );
}
