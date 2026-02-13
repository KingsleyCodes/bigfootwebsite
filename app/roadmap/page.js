import Link from 'next/link';

export default function RoadmapPage() {
  const roadmapData = [
    {
      quarter: "Q1 2026",
      title: "The Sighting & Launch",
      items: [
        "Official $BIGFOOT Token Launch on Solana",
        "Community Airdrop Distribution (50M Tokens)",
        "Release of Solana Chain-Scanning AI Beta",
        "Initial Telegram Alert Bot Integration"
      ],
      status: "current"
    },
    {
      quarter: "Q2 2026",
      title: "Expanding the Territory",
      items: [
        "BSC & Ethereum Cross-Chain Integration",
        "Staking Platform Live: Earn Yield for Holding",
        "AI Gem Score & Predictive Analytics Dashboard",
        "First Major Token Buyback Campaign"
      ],
      status: "upcoming"
    },
    {
      quarter: "Q3 – Q4 2026",
      title: "The Apex Oracle",
      items: [
        "Full DAO Governance: Holders Vote on AI Features",
        "Premium Oracle Access for Whale Tier Holders",
        "Strategic Partnerships with Top Solana Protocols",
        "Global Marketing Expansion ($100k Promo Budget)"
      ],
      status: "upcoming"
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-24">
        <h1 className="text-6xl md:text-8xl font-black uppercase italic text-lime-400 mb-6">
          THE ROADMAP
        </h1>
        <p className="text-xl text-emerald-200 font-bold tracking-widest uppercase">
          Hunt the gems. Leave your footprint. 🚀
        </p>
      </div>

      {/* Core Project Specs Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        <div className="bg-emerald-900/30 border border-emerald-800 p-8 rounded-3xl">
          <h3 className="text-lime-400 font-black uppercase text-xs tracking-widest mb-4">Core Technology</h3>
          <p className="text-white font-bold text-lg leading-snug">AI Oracle scanning Solana, BSC & ETH for high-potential on-chain gems.</p>
        </div>
        <div className="bg-emerald-900/30 border border-emerald-800 p-8 rounded-3xl">
          <h3 className="text-lime-400 font-black uppercase text-xs tracking-widest mb-4">Promotion Budget</h3>
          <p className="text-4xl font-black text-white">$100,000</p>
          <p className="text-emerald-500 text-sm mt-2">Allocated for Buybacks & Influencers</p>
        </div>
        <div className="bg-emerald-900/30 border border-emerald-800 p-8 rounded-3xl">
          <h3 className="text-lime-400 font-black uppercase text-xs tracking-widest mb-4">Utility Highlights</h3>
          <p className="text-white text-sm">Premium Access • Staking • Governance • 1% Deflationary Burn</p>
        </div>
      </div>

      {/* Roadmap Timeline */}
      <div className="space-y-16 relative">
        {roadmapData.map((phase, i) => (
          <div key={i} className="relative pl-12 border-l-2 border-emerald-800 group">
            <div className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full ${phase.status === 'current' ? 'bg-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.8)]' : 'bg-emerald-800'}`} />
            
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="md:w-1/4">
                <span className="text-lime-400 font-black text-2xl tracking-tighter italic">{phase.quarter}</span>
              </div>
              <div className="md:w-3/4 bg-emerald-900/20 border border-emerald-800/50 p-8 rounded-3xl group-hover:border-emerald-600 transition-colors">
                <h2 className="text-3xl font-black uppercase mb-6 text-white italic">{phase.title}</h2>
                <ul className="space-y-4">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-emerald-100/70">
                      <span className="text-lime-400">👣</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FINAL CTA */}
      <div className="mt-32 bg-lime-400 p-12 md:p-20 rounded-[40px] md:rounded-[60px] text-emerald-950 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none italic mb-8">
            JOIN THE <br />GEM HUNTERS.
          </h2>
          <p className="text-emerald-900 font-bold text-lg mb-10 max-w-xl mx-auto">
            The $BIGFOOT Airdrop is live. 50,000,000 tokens are waiting for the first wave of trackers.
          </p>
        <a 
  href="https://t.me/bigfoothunterai" 
  target="_blank" 
  rel="noopener noreferrer"
            className="inline-block bg-emerald-950 text-white font-black px-12 py-6 rounded-2xl text-xl uppercase hover:scale-105 transition-transform"
          >
            Claim My Airdrop
          </a>
        </div>
        {/* Decorative background element */}
        <span className="absolute -bottom-10 -right-10 text-[300px] opacity-10 pointer-events-none select-none">🚀</span>
      </div>
    </div>
  );
}