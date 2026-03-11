import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EditorialSection() {
  return (
    <section className="py-24 px-6 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Image block - left */}
        <div className="lg:col-span-7 relative">
          <div className="relative aspect-[16/10] rounded-sm overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&q=85"
              alt="Travel story"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-obsidian/30" />
          </div>
          {/* Floating tag */}
          <div className="absolute -bottom-4 -right-4 bg-rust text-ivory p-5 max-w-[180px]">
            <div className="font-display text-3xl leading-none">SS&apos;25</div>
            <div className="font-mono text-[9px] tracking-widest uppercase mt-1 opacity-80">
              New Collection
            </div>
          </div>
        </div>

        {/* Content - right */}
        <div className="lg:col-span-5 lg:pl-8">
          <span className="font-mono text-[10px] tracking-widest2 uppercase text-rust mb-6 block">
            Our Story
          </span>
          <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] leading-tight text-ivory mb-6">
            Made for People
            <br />
            Who Never
            <br />
            <span className="text-sand italic">Stop Moving.</span>
          </h2>
          <p className="font-body text-sm text-ivory/60 leading-relaxed mb-4">
            Wayfare was born from a single, frustrating truth: travel gear wasn&apos;t keeping up with travelers. Zippers failed on the third trip. Wheels cracked on the fifth. Straps wore out before the destination.
          </p>
          <p className="font-body text-sm text-ivory/60 leading-relaxed mb-8">
            So we built something better. Every product obsessively tested, every material carefully chosen, every detail refined until it was exactly right.
          </p>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-ivory border-b border-rust pb-1 hover:text-rust transition-colors"
          >
            Read Our Story
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* Signature */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <div className="font-display text-xl italic text-sand">Wayfare Studio</div>
            <div className="font-mono text-[9px] tracking-widest uppercase text-ivory/30 mt-1">
              Bengaluru, India — Est. 2020
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
