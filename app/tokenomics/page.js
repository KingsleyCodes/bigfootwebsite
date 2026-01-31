import Link from 'next/link';

export default function TokenomicsPage() {
  const stats = [
    { label: "Total Supply", val: "1,000,000,000", sub: "Hard Capped" },
    { label: "Burn Rate", val: "2%", sub: "On every sighting (swap)" },
    { label: "Community", val: "80%", sub: "Liquidity + Airdrop" },
    { label: "Marketing", val: "20%", sub: "Locked for Hunt Promo" }
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-7xl md:text-9xl font-black uppercase italic text-center mb-20">
        FOOT-<span className="text-lime-400">NOMICS</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        {stats.map((s, i) => (
          <div key={i} className="p-12 bg-emerald-900/30 border border-emerald-800 rounded-[40px] group hover:border-lime-400 transition-all">
            <p className="text-emerald-500 font-black uppercase tracking-widest mb-2">{s.label}</p>
            <h2 className="text-5xl font-black text-white group-hover:text-lime-400 transition-colors">{s.val}</h2>
            <p className="text-emerald-100/40 mt-4 italic">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto space-y-12 mb-32">
        <div className="space-y-4">
          <h3 className="text-3xl font-black uppercase italic text-lime-400">The Anti-FUD Protocol</h3>
          <p className="text-emerald-100/70 text-lg leading-relaxed">
            Liquidity is permanently burned. The contract is renounced. There is no "Big Foot" wallet that can dump on the community. 
            The beast belongs to the woods, and the tokens belong to you.
          </p>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="bg-lime-400 p-16 rounded-[60px] text-emerald-950 text-center space-y-8">
        <h2 className="text-5xl font-black uppercase leading-none italic">Secure your stake <br/>before the beast vanishes.</h2>
        <Link href="/airdrop" className="inline-block bg-emerald-950 text-white font-black px-12 py-6 rounded-2xl text-xl uppercase hover:bg-black transition-all">
          Claim My Airdrop Tokens
        </Link>
      </div>
    </div>
  );
}