import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";

const values = [
  {
    num: "01",
    title: "Built Different",
    desc: "We don't follow trends. We follow travelers — watching how they pack, where they go, what breaks. Then we fix it.",
  },
  {
    num: "02",
    title: "Radically Transparent",
    desc: "Every material, every supplier, every price breakdown — we share it all. You deserve to know what you're buying.",
  },
  {
    num: "03",
    title: "Zero Compromise",
    desc: "We prototype every product 50+ times. If it doesn't hold up to 3 years of weekly travel in testing, we start over.",
  },
];

export default function AboutPage() {
  return (
    <div className="grain">
      <Navbar />
      <main className="pt-28">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[500px] overflow-hidden mb-20">
          <Image
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1600&q=85"
            alt="About Wayfare"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-16 max-w-[1400px] mx-auto">
            <span className="font-mono text-[10px] tracking-widest2 uppercase text-rust mb-4">
              Our Story
            </span>
            <h1 className="font-display text-[clamp(3rem,7vw,7rem)] leading-none text-ivory">
              We Build Gear
              <br />
              <span className="text-sand italic">for Real Travel.</span>
            </h1>
          </div>
        </section>

        {/* Mission */}
        <section className="max-w-[1400px] mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-tight text-ivory/90 mb-6">
                &ldquo;We started because we were tired of replacing our bags every two years.&rdquo;
              </p>
              <p className="font-body text-sm text-ivory/50 leading-relaxed mb-4">
                Founded in Bengaluru in 2020, Wayfare started with one obsessive question: why does travel gear fail so fast? We tore apart hundreds of bags, suitcases, and wallets. We mapped every failure point. Then we rebuilt them — better.
              </p>
              <p className="font-body text-sm text-ivory/50 leading-relaxed">
                Today we design, test, and guarantee every product we sell. Not for a season. For a decade. Every wheel, every zipper, every stitch.
              </p>
            </div>
            <div className="relative aspect-square max-w-md lg:max-w-none">
              <Image
                src="https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=800&q=85"
                alt="Craftsmanship"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-ivory text-obsidian py-20 px-6">
          <div className="max-w-[1400px] mx-auto">
            <span className="font-mono text-[10px] tracking-widest2 uppercase text-rust mb-6 block">
              What We Stand For
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] mb-14 max-w-xl">
              Three principles. Zero exceptions.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-obsidian/10">
              {values.map((val) => (
                <div key={val.num} className="bg-ivory p-10">
                  <div className="font-mono text-[10px] tracking-widest2 uppercase text-rust mb-6">
                    {val.num}
                  </div>
                  <h3 className="font-display text-2xl text-obsidian mb-4">{val.title}</h3>
                  <p className="font-body text-sm text-obsidian/60 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-ivory mb-6">
            Ready to Travel Better?
          </h2>
          <Link
            href="/collections"
            className="group inline-flex items-center gap-3 bg-rust text-ivory font-mono text-[11px] tracking-widest uppercase px-8 py-4 hover:bg-ember transition-colors"
          >
            Shop All Products
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
