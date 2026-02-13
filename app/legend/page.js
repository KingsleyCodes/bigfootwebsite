import Link from 'next/link';

export default function LegendPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto space-y-24">
      {/* SECTION 1: THE ORIGIN */}
      <section className="space-y-6">
        <h1 className="text-6xl md:text-8xl font-black uppercase italic text-lime-400 leading-none">
          THE <br />ORIGIN.
        </h1>
        <p className="text-2xl text-emerald-100 leading-relaxed font-light">
          For decades, the deep forests of the Pacific Northwest held a secret. Thousands of sightings, blurry photos, and giant footprints left in the mud. 
          In 2026, the legend didn't just emerge—it evolved.
        </p>
      </section>

      {/* SECTION 2: WHY SOLANA? */}
      <section className="bg-emerald-900/20 border border-emerald-800 p-10 rounded-[40px] space-y-6">
        <h2 className="text-3xl font-black uppercase text-lime-400">From Mud to Mainnet</h2>
        <p className="text-emerald-100/70 text-lg leading-relaxed">
          Big Foot represents the ultimate "unseen" value. Just like the beast itself, $FOOT is hard to find, moves fast, and leaves a massive impact. 
          By launching on Solana, we ensure that the hunt is fast, cheap, and accessible to every hunter across the globe.
        </p>
      </section>

      {/* SECTION 3: THE MISSION */}
      <section className="space-y-6 text-right">
        <h2 className="text-5xl font-black uppercase italic">The Hunter's <span className="text-lime-400 underline decoration-wavy">Oath.</span></h2>
        <p className="text-xl text-emerald-100/60 max-w-2xl ml-auto">
          We aren't just a meme. We are a community of trackers. Our mission is to build the largest decentralized wilderness 
          reserve in the metaverse, where $FOOT is the only currency that matters.
        </p>
      </section>

      {/* FINAL CTA */}
      <div className="py-20 border-t border-emerald-800 text-center space-y-8">
        <h3 className="text-4xl font-black uppercase leading-tight">Ready to join the <br/>highest stakes hunt in history?</h3>
       <a 
  href="https://t.me/bigfoothunterai" 
  target="_blank" 
  rel="noopener noreferrer"className="inline-block bg-lime-400 text-emerald-950 font-black px-12 py-6 rounded-2xl text-2xl uppercase hover:scale-105 transition-all shadow-[0_0_50px_rgba(163,230,53,0.3)]">
          Join the Airdrop 👣
        </a>
      </div>
    </div>
  );
}