const features = [
  {
    icon: "✦",
    title: "Decade Warranty",
    desc: "We guarantee every product for 10 years. If it breaks, we fix it — for free.",
  },
  {
    icon: "◈",
    title: "Aerospace Materials",
    desc: "Polycarbonate shells, military-grade zippers, ballistic nylon. Built like equipment.",
  },
  {
    icon: "◎",
    title: "Silent Wheels",
    desc: "Japanese-engineered 360° spinner wheels. You'll glide. Others will stare.",
  },
  {
    icon: "⬡",
    title: "Smart Packing",
    desc: "Flex-divider systems. Compression panels. Every centimeter engineered for more.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-6 border-y border-white/5 relative overflow-hidden">
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[20vw] font-bold text-white/[0.02] whitespace-nowrap">
          WAYFARE
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        <div className="text-center mb-16">
          <span className="font-mono text-[10px] tracking-widest2 uppercase text-rust">
            Why Wayfare
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-ivory mt-4">
            Obsessively Engineered.
            <br />
            <span className="text-sand italic">Thoroughly Tested.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {features.map((feat, i) => (
            <div
              key={i}
              className="bg-obsidian p-8 group hover:bg-white/[0.03] transition-colors"
            >
              <div className="text-3xl text-rust mb-6 group-hover:scale-110 transition-transform inline-block">
                {feat.icon}
              </div>
              <h3 className="font-display text-xl text-ivory mb-3">{feat.title}</h3>
              <p className="font-body text-sm text-ivory/50 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
