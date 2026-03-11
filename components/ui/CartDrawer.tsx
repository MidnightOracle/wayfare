"use client";

import Image from "next/image";
import Link from "next/link";
import { X, ShoppingBag, Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

const colorNames = ["Obsidian", "Sand", "Slate", "Rust", "Ivory"];

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, total, count } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[200] bg-obsidian/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[201] h-full w-full max-w-md bg-[#111110] border-l border-white/10 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-4 h-4 text-rust" />
            <span className="font-mono text-[11px] tracking-widest uppercase text-ivory">
              Your Cart
            </span>
            {count > 0 && (
              <span className="bg-rust text-ivory font-mono text-[9px] w-5 h-5 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="text-ivory/50 hover:text-ivory transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 px-6 text-center">
              <ShoppingBag className="w-10 h-10 text-ivory/10" />
              <p className="font-display text-xl text-ivory/30">Your cart is empty</p>
              <p className="font-mono text-[10px] tracking-wider text-ivory/20 uppercase">
                Discover our collection
              </p>
              <Link
                href="/collections"
                onClick={closeCart}
                className="mt-2 font-mono text-[10px] tracking-widest uppercase bg-rust text-ivory px-6 py-3 hover:bg-ember transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-white/5">
              {items.map((item) => (
                <li key={`${item.product.id}-${item.colorIndex}`} className="px-6 py-5">
                  <div className="flex gap-4">
                    <Link
                      href={`/products/${item.product.id}`}
                      onClick={closeCart}
                      className="relative w-20 h-24 flex-shrink-0 overflow-hidden rounded-sm bg-white/5"
                    >
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover object-center"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-display text-base text-ivory leading-tight">
                            {item.product.name}
                          </h3>
                          <p className="font-mono text-[9px] tracking-widest uppercase text-ivory/40 mt-0.5">
                            {colorNames[item.colorIndex] ?? "Obsidian"} ·{" "}
                            {item.product.tagline}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-ivory/20 hover:text-rust transition-colors ml-2 flex-shrink-0"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-white/10 rounded-sm">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="px-2.5 py-1.5 text-ivory/60 hover:text-ivory transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 py-1.5 font-mono text-xs text-ivory border-x border-white/10 min-w-[32px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="px-2.5 py-1.5 text-ivory/60 hover:text-ivory transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-display text-base text-ivory">
                          ₹{(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-white/10 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-mono text-[10px] tracking-widest uppercase text-ivory/50">
                Subtotal
              </span>
              <span className="font-display text-xl text-ivory">
                ₹{total.toLocaleString()}
              </span>
            </div>
            <p className="font-mono text-[9px] tracking-wider text-ivory/30 uppercase">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-rust text-ivory font-mono text-[11px] tracking-widest uppercase py-4 flex items-center justify-center gap-2 hover:bg-ember transition-colors">
              Checkout
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={closeCart}
              className="w-full border border-white/10 text-ivory/60 font-mono text-[10px] tracking-widest uppercase py-3 hover:border-white/30 hover:text-ivory transition-all"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
