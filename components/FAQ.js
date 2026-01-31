export default function FAQ() {
  const faqs = [
    { q: "Is $FOOT safe?", a: "Liquidity is burned and the contract is renounced." },
    { q: "What is the total supply?", a: "1,000,000,000 $FOOT tokens." },
    { q: "When is the airdrop?", a: "Valentine's Day 2026." }
  ];

  return (
    <section className="py-24 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-black uppercase mb-12 italic text-lime-400">The Field Guide (FAQ)</h2>
      <div className="space-y-4 text-left">
        {faqs.map((f, i) => (
          <details key={i} className="group bg-emerald-900/20 border border-emerald-800 rounded-2xl p-6 cursor-pointer">
            <summary className="font-bold uppercase flex justify-between items-center list-none">
              {f.q}
              <span className="text-lime-400 group-open:rotate-180 transition-transform">↓</span>
            </summary>
            <p className="mt-4 text-emerald-200/60 leading-relaxed text-sm">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}