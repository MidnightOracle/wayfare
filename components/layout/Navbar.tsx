"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Search, Menu, X, ChevronDown } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  {
    label: "Luggage",
    href: "/collections?category=suitcases",
    sub: [
      { label: "Cabin", href: "/collections?category=suitcases" },
      { label: "Check-in", href: "/collections?category=suitcases" },
    ],
  },
  {
    label: "Backpacks",
    href: "/collections?category=backpacks",
    sub: [
      { label: "Work", href: "/collections?category=backpacks" },
      { label: "Travel", href: "/collections?category=backpacks" },
    ],
  },
  {
    label: "Bags",
    href: "/collections?category=bags",
    sub: [
      { label: "Duffel", href: "/collections?category=bags" },
      { label: "Totes", href: "/collections?category=bags" },
    ],
  },
  { label: "Wallets", href: "/collections?category=wallets", sub: [] },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { count, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-obsidian/95 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-display text-2xl font-bold tracking-[0.15em] text-ivory">
              WAYFARE
            </span>
            <span className="font-mono text-[9px] tracking-widest2 text-sand uppercase opacity-70">
              Carry What Matters
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 font-mono text-[11px] tracking-widest uppercase text-ivory/80 hover:text-ivory transition-colors"
                >
                  {link.label}
                  {link.sub.length > 0 && (
                    <ChevronDown className="w-3 h-3 opacity-60" />
                  )}
                </Link>
                {link.sub.length > 0 && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-4">
                    <div className="bg-obsidian border border-white/10 rounded-sm p-4 min-w-[140px]">
                      {link.sub.map((s) => (
                        <Link
                          key={s.label}
                          href={s.href}
                          className="block font-mono text-[10px] tracking-widest uppercase text-ivory/60 hover:text-rust py-2 transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="hidden lg:flex text-ivory/70 hover:text-ivory transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={openCart}
              className="relative text-ivory/70 hover:text-ivory transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-rust text-[9px] font-mono flex items-center justify-center text-ivory">
                {count}
              </span>
            </button>
            <button
              className="lg:hidden text-ivory"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-obsidian transition-transform duration-500 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b border-white/10">
          <span className="font-display text-2xl tracking-[0.15em]">WAYFARE</span>
          <button onClick={() => setMobileOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-8 space-y-6">
          {navLinks.map((link, i) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="font-display text-4xl text-ivory/90 hover:text-rust transition-colors"
                onClick={() => setMobileOpen(false)}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {link.label}
              </Link>
            </div>
          ))}
          <div className="pt-8 border-t border-white/10">
            <Link
              href="/about"
              className="block font-mono text-[11px] tracking-widest uppercase text-sand py-2"
              onClick={() => setMobileOpen(false)}
            >
              Our Story
            </Link>
            <Link
              href="/collections"
              className="block font-mono text-[11px] tracking-widest uppercase text-sand py-2"
              onClick={() => setMobileOpen(false)}
            >
              All Collections
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
