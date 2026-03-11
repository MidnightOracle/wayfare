"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { products } from "@/lib/data";
import { ShoppingBag, Heart, Check, ChevronDown, ArrowLeft } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const productId = params?.id as string;
  const product = products.find((p) => p.id === productId) ?? products[0];

  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>("features");

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordionItems = [
    {
      id: "features",
      label: "Features",
      content: product.features.join(" · "),
    },
    {
      id: "materials",
      label: "Materials & Care",
      content: "Premium polycarbonate shell. YKK zippers. Aluminum trolley. Hand wash with mild detergent. Avoid abrasive cleaners.",
    },
    {
      id: "dimensions",
      label: "Dimensions & Weight",
      content: `Capacity: ${product.capacity ?? "—"}. Dimensions vary by model. Weight: approx. 2.8–4.2kg depending on size.`,
    },
    {
      id: "warranty",
      label: "Warranty",
      content: "All Wayfare luggage comes with a 10-year manufacturer warranty. Backpacks and bags: lifetime warranty on zippers and hardware.",
    },
  ];

  return (
    <div className="grain">
      <Navbar />
      <main className="pt-28 pb-24">
        {/* Breadcrumb */}
        <div className="max-w-[1400px] mx-auto px-6 mb-8">
          <Link
            href="/collections"
            className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-ivory/40 hover:text-ivory transition-colors w-fit"
          >
            <ArrowLeft className="w-3 h-3" />
            Back to Collections
          </Link>
        </div>

        {/* Product layout */}
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Images */}
          <div className="space-y-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-mist/5">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover object-center"
                priority
              />
              {product.isNew && (
                <div className="absolute top-4 left-4 bg-rust text-ivory font-mono text-[9px] tracking-widest uppercase px-2 py-1">
                  New Arrival
                </div>
              )}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-square overflow-hidden rounded-sm bg-mist/5">
                <Image
                  src={product.hoverImage}
                  alt={`${product.name} alternate view`}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-sm bg-white/5 flex items-center justify-center">
                <span className="font-mono text-[10px] tracking-widest uppercase text-ivory/20">
                  More Views
                  <br />Coming Soon
                </span>
              </div>
            </div>
          </div>

          {/* Product info */}
          <div className="lg:pt-4">
            <span className="font-mono text-[10px] tracking-widest2 uppercase text-rust mb-4 block">
              {product.category}
            </span>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-ivory mb-2">
              {product.name}
            </h1>
            <p className="font-mono text-[11px] tracking-widest uppercase text-ivory/40 mb-6">
              {product.tagline}{product.capacity && ` · ${product.capacity}`}
            </p>

            {/* Price */}
            <div className="flex items-center gap-3 mb-8">
              <span className="font-display text-3xl text-ivory">
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <>
                  <span className="font-body text-lg text-ivory/40 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="bg-rust/20 text-rust font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 rounded-sm">
                    Save ₹{(product.originalPrice - product.price).toLocaleString()}
                  </span>
                </>
              )}
            </div>

            {/* Colors */}
            <div className="mb-6">
              <div className="font-mono text-[10px] tracking-widest uppercase text-ivory/50 mb-3">
                Color — <span className="text-ivory">{["Obsidian", "Sand", "Slate", "Rust"][selectedColor] ?? "Obsidian"}</span>
              </div>
              <div className="flex gap-2">
                {product.colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    className={`w-7 h-7 rounded-full transition-all ${
                      selectedColor === i
                        ? "ring-2 ring-offset-2 ring-offset-obsidian ring-ivory scale-110"
                        : "hover:scale-105"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Quick features */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              {product.features.slice(0, 4).map((feat) => (
                <div key={feat} className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-rust flex-shrink-0" />
                  <span className="font-mono text-[10px] tracking-wide text-ivory/60">{feat}</span>
                </div>
              ))}
            </div>

            {/* Quantity + Add to cart */}
            <div className="flex gap-3 mb-6">
              <div className="flex items-center border border-white/10 rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-4 text-ivory/60 hover:text-ivory transition-colors font-mono"
                >
                  −
                </button>
                <span className="px-4 py-4 font-mono text-sm text-ivory border-x border-white/10 min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-4 text-ivory/60 hover:text-ivory transition-colors font-mono"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 font-mono text-[11px] tracking-widest uppercase py-4 transition-all duration-300 ${
                  added
                    ? "bg-green-600 text-ivory"
                    : "bg-rust text-ivory hover:bg-ember"
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-3.5 h-3.5" /> Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-3.5 h-3.5" /> Add to Cart
                  </>
                )}
              </button>
              <button className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-rust hover:text-rust transition-all">
                <Heart className="w-4 h-4" />
              </button>
            </div>

            <p className="font-mono text-[10px] tracking-wider text-ivory/30 mb-8">
              Free shipping · 30-day returns · 10-year warranty
            </p>

            {/* Accordion */}
            <div className="border-t border-white/10">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-white/10">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-mono text-[11px] tracking-widest uppercase text-ivory">
                      {item.label}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-ivory/40 transition-transform ${
                        openAccordion === item.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openAccordion === item.id && (
                    <div className="pb-4">
                      <p className="font-body text-sm text-ivory/50 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="max-w-[1400px] mx-auto px-6 mt-24">
          <div className="mb-10">
            <span className="font-mono text-[10px] tracking-widest2 uppercase text-rust mb-3 block">
              You May Also Like
            </span>
            <h2 className="font-display text-3xl text-ivory">Complete Your Kit</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
