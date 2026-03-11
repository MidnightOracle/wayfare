import Link from "next/link";
import { Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-white/10">
      {/* Top strip */}
      <div className="bg-rust/10 border-b border-rust/20 py-4">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="font-mono text-[10px] tracking-widest uppercase text-sand">
            Free shipping on orders over ₹5000
          </span>
          <span className="font-mono text-[10px] tracking-widest uppercase text-sand">
            10-year warranty on all luggage
          </span>
          <span className="font-mono text-[10px] tracking-widest uppercase text-sand">
            30-day returns, no questions asked
          </span>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="font-display text-3xl tracking-[0.15em] text-ivory">WAYFARE</div>
              <div className="font-mono text-[9px] tracking-widest2 text-sand mt-1">Carry What Matters</div>
            </div>
            <p className="font-body text-sm text-ivory/50 leading-relaxed max-w-xs">
              Built for the relentless explorer. Every stitch, wheel, and zipper is designed to outlast your adventures.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#" className="text-ivory/40 hover:text-rust transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-ivory/40 hover:text-rust transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="text-ivory/40 hover:text-rust transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-mono text-[10px] tracking-widest2 uppercase text-sand mb-6">Shop</h4>
            <ul className="space-y-3">
              {["Luggage", "Backpacks", "Duffel Bags", "Totes", "Wallets", "Accessories"].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-body text-sm text-ivory/50 hover:text-ivory transition-colors hover-underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-mono text-[10px] tracking-widest2 uppercase text-sand mb-6">Help</h4>
            <ul className="space-y-3">
              {["Track Order", "Returns & Exchanges", "Warranty Claim", "FAQs", "Contact Us", "Store Locator"].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-body text-sm text-ivory/50 hover:text-ivory transition-colors hover-underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-mono text-[10px] tracking-widest2 uppercase text-sand mb-6">Stay in the Loop</h4>
            <p className="font-body text-sm text-ivory/50 mb-4">
              New arrivals, limited drops, and travel stories.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 font-mono text-xs text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-rust transition-colors"
              />
              <button className="bg-rust text-ivory font-mono text-[10px] tracking-widest uppercase py-3 rounded-sm hover:bg-ember transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[10px] tracking-wider text-ivory/30">
            © 2025 Wayfare. All rights reserved.
          </span>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((item) => (
              <Link key={item} href="#" className="font-mono text-[10px] tracking-wider text-ivory/30 hover:text-ivory/60 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
