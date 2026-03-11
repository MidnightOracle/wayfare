const items = [
  "Free Shipping Over ₹5000",
  "10-Year Warranty",
  "TSA-Approved Locks",
  "30-Day Returns",
  "Made to Last Decades",
  "Lifetime Repair Promise",
  "Over 50,000 Travelers",
];

export default function MarqueeTicker() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-rust overflow-hidden py-3 border-y border-rust">
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center font-mono text-[10px] tracking-widest uppercase text-ivory">
            {item}
            <span className="mx-8 text-ivory/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
