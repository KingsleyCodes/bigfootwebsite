export default function Roadmap() {
  const steps = [
    { phase: "Phase 1", title: "The Sighting", items: ["Viral Social Push", "50M Airdrop Launch", "Community Formation"] },
    { phase: "Phase 2", title: "The Footprint", items: ["Token Launch", "DEX Listings", "Major Influencer Calls"] },
    { phase: "Phase 3", title: "The Legend", items: ["CEX Listings", "Big Foot NFT Collection", "Global Takeover"] }
  ];

  return (
    <section id="roadmap" className="py-24 px-6 bg-emerald-950/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-black text-white uppercase italic mb-20 tracking-tighter text-center">
          The <span className="text-lime-400">Path</span>
        </h2>
        
        <div className="space-y-12">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6 md:gap-12 group">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-emerald-900 border-2 border-emerald-700 rounded-full flex items-center justify-center font-black text-lime-400 group-hover:border-lime-400 transition-colors">
                  {i + 1}
                </div>
                <div className="w-0.5 h-full bg-emerald-800 group-last:bg-transparent mt-4" />
              </div>
              <div className="pb-12">
                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{step.phase}</span>
                <h3 className="text-2xl font-black text-white uppercase mt-1 mb-4">{step.title}</h3>
                <ul className="space-y-3">
                  {step.items.map((item, j) => (
                    <li key={j} className="text-emerald-100/60 text-sm flex items-center gap-2">
                      <span className="text-lime-400">👣</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}