import Link from 'next/link';

export default function RoadmapPage() {
  const phases = [
    { p: "Phase 1", t: "The Sighting", d: "Website launch, 5k Telegram hunters, and the first $FOOT airdrop tasks." },
    { p: "Phase 2", t: "Leaving Tracks", d: "Solana DEX listings (Raydium/Jupiter), Coingecko/CMC fast-track, and forest influencer partnerships." },
    { p: "Phase 3", t: "The Great Migration", d: "Tier 1 Exchange listings, NFT 'Footprint' collection, and the Big Foot DAO launch." },
    { p: "Phase 4", t: "Wilderness Takeover", d: "Full 3D Metaverse integration. Big Foot becomes the #1 meme on Solana." }
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-7xl md:text-9xl font-black uppercase italic text-lime-400 mb-24">ROADMAP.</h1>
      
      <div className="space-y-24 relative border-l-4 border-emerald-900 ml-4 md:ml-0 pl-10 md:pl-20">
        {phases.map((phase, i) => (
          <div key={i} className="relative group">
            <span className="absolute -left-[54px] md:-left-[104px] top-0 w-12 h-12 bg-emerald-950 border-4 border-lime-400 rounded-full flex items-center justify-center font-black group-hover:scale-125 transition-transform">
              {i + 1}
            </span>
            <div className="space-y-4">
              <h2 className="text-emerald-500 font-black uppercase tracking-tighter text-xl">{phase.p}</h2>
              <h3 className="text-4xl font-black uppercase italic">{phase.t}</h3>
              <p className="text-emerald-100/60 text-lg leading-relaxed max-w-xl">{phase.d}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FINAL CTA */}
      <div className="mt-40 text-center space-y-10 py-20 border-y border-emerald-900/50">
        <p className="text-lime-400 font-black uppercase tracking-[0.3em]">Currently in Phase 1</p>
        <h2 className="text-5xl md:text-7xl font-black uppercase italic">DON'T MISS <br/>THE TRACKS.</h2>
        <Link href="/airdrop" className="inline-block bg-white text-emerald-950 font-black px-12 py-6 rounded-full text-2xl uppercase hover:bg-lime-400 transition-all transform hover:rotate-2">
          Join Airdrop Now
        </Link>
      </div>
    </div>
  );
}