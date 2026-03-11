"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Heart, Check } from "lucide-react";
import type { Product } from "@/lib/data";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className="product-card group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-mist/5 rounded-sm mb-4">
        <Image
          src={hovered ? product.hoverImage : product.image}
          alt={product.name}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="bg-rust text-ivory font-mono text-[9px] tracking-widest uppercase px-2 py-0.5">
              New
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-obsidian text-ivory font-mono text-[9px] tracking-widest uppercase px-2 py-0.5">
              Bestseller
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-sand text-obsidian font-mono text-[9px] tracking-widest uppercase px-2 py-0.5">
              Sale
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={(e) => { e.preventDefault(); setWishlisted(!wishlisted); }}
          className="absolute top-3 right-3 w-8 h-8 bg-obsidian/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-rust"
        >
          <Heart
            className={`w-3.5 h-3.5 transition-colors ${wishlisted ? "fill-rust text-rust" : "text-ivory"}`}
          />
        </button>

        {/* Quick add overlay */}
        <div className="product-overlay absolute inset-x-0 bottom-0 opacity-0 transition-opacity duration-300">
          <button
            onClick={handleQuickAdd}
            className={`w-full backdrop-blur-sm text-ivory font-mono text-[10px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 transition-colors ${
              added ? "bg-green-700/90" : "bg-obsidian/90 hover:bg-rust"
            }`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" /> Added!
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" /> Quick Add
              </>
            )}
          </button>
        </div>
      </div>

      {/* Info */}
      <div>
        {/* Color swatches */}
        <div className="flex gap-1.5 mb-3">
          {product.colors.map((color, i) => (
            <button
              key={i}
              onClick={(e) => { e.preventDefault(); setSelectedColor(i); }}
              className={`w-3.5 h-3.5 rounded-full transition-all ${
                selectedColor === i ? "ring-1 ring-offset-1 ring-offset-obsidian ring-ivory scale-110" : ""
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="font-mono text-[9px] text-ivory/40 self-center">
              +{product.colors.length - 4}
            </span>
          )}
        </div>

        <Link href={`/products/${product.id}`}>
          <h3 className="font-display text-lg text-ivory hover:text-sand transition-colors leading-tight">
            {product.name}
          </h3>
          <p className="font-mono text-[10px] tracking-wider uppercase text-ivory/40 mt-0.5 mb-2">
            {product.tagline}
            {product.capacity && ` · ${product.capacity}`}
          </p>
          <div className="flex items-center gap-2">
            <span className="font-body font-semibold text-ivory">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="font-body text-sm text-ivory/40 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}
