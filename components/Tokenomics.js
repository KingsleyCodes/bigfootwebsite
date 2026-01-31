export default function Tokenomics() {
  const stats = [
    { title: "Ticker", value: "$FOOT", desc: "The native currency of the forest." },
    { title: "Airdrop", value: "50M", desc: "Locked for community hunters only." },
    { title: "Tax", value: "0%", desc: "No buy tax, no sell tax. Pure hunting." },
    { title: "Liquidity", value: "Burned", desc: "100% LP tokens sent to the dead wallet." },
  ];

  return (
    <section id="tokenomics" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none">
            Foot-<span className="text-lime-400">Nomics</span>
          </h2>
          <p className="text-emerald-500 font-bold mt-4 uppercase tracking-[0.3em]">Supply Distribution</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, i) => (
            <div key={i} className="bg-emerald-900/20 border border-emerald-800 p-8 rounded-3xl hover:border-lime-400/50 transition-all group">
              <p className="text-[10px] font-black text-emerald-600 uppercase mb-2 tracking-widest">{item.title}</p>
              <h3 className="text-4xl font-black text-white mb-3 group-hover:text-lime-400 transition-colors">{item.value}</h3>
              <p className="text-emerald-100/40 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}