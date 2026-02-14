"use client"; 
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
// import Countdown from '@/components/Countdown';
import Tokenomics from '@/components/Tokenomics';
import Roadmap from '@/components/Roadmap';
import HowToBuy from '@/components/HowToBuy';
import Community from '@/components/Community';
import FAQ from '@/components/FAQ';
import Link from 'next/link';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-emerald-950" />;

  return (
    <div className="min-h-screen text-white selection:bg-lime-400 overflow-x-hidden relative">
      
      {/* Note: Navbar, Footer, and Background are now handled in layout.js to prevent duplication */}

      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
          <div className="inline-block animate-bounce mb-8">
            <span className="text-7xl md:text-9xl drop-shadow-[0_0_30px_rgba(163,230,53,0.6)]">👣</span>
          </div>
          
          <div className="mb-6">
            <h2 className="text-lime-400 font-black uppercase tracking-[0.3em] text-sm md:text-base mb-2">
              Welcome to BigFoot Tech
            </h2>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-4">
              THE LEGEND <br />
              <span className="text-lime-400 italic">IS ALIVE.</span>
            </h1>
            <p className="text-emerald-500 font-bold uppercase tracking-widest text-xs md:text-sm">
              Discover the Future of Crypto Discovery
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-emerald-100/80 font-medium max-w-3xl mx-auto mb-12 leading-relaxed px-6">
            BigFoot Tech is at the forefront of innovative blockchain analytics, empowering users with advanced 
            AI-driven tools to uncover high-potential cryptocurrency opportunities. Our flagship utility, the 
            <span className="text-lime-400 font-bold"> BigFoot Gem Hunter</span>, is designed to revolutionize how 
            investors identify and capitalize on emerging gems across major blockchains.
          </p>

          <div className="flex flex-col md:flex-row gap-4 w-full max-w-md mx-auto mb-16 px-6">
            <a 
              href="https://t.me/bigfoothunterai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-lime-400 text-emerald-950 font-black py-5 rounded-2xl hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(163,230,53,0.4)] uppercase tracking-tight text-lg text-center"
            >
              Join the Hunt
            </a>
            <Link 
              href="/tokenomics" 
              className="flex-1 bg-emerald-900/40 backdrop-blur-md border border-emerald-700 font-black py-5 rounded-2xl hover:bg-emerald-800 transition-all uppercase tracking-tight text-lg text-center"
            >
              Tokenomics
            </Link>
          </div>

          {/* <div className="w-full max-w-3xl mx-auto px-6">
            <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.5em] mb-6 text-center">Airdrop Final Countdown</p>
            <Countdown />
          </div> */}
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-32 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-[0.9]">
              TRACKING THE <br /><span className="text-lime-400">UNSEEN.</span>
            </h2>
            <div className="space-y-4">
              <p className="text-emerald-100/70 leading-relaxed text-xl">
                For decades, the footprints were all we had. Now, the legend takes its place in the digital wilderness.
              </p>
              <p className="text-emerald-100/70 leading-relaxed text-lg">
                $FOOT is a hyper-deflationary community token built for those who aren't afraid to go deep into the woods to find the next big thing.
              </p>
            </div>
          </div>
          <div className="bg-emerald-900/30 border border-emerald-800 aspect-square rounded-[40px] flex items-center justify-center relative group overflow-hidden shadow-2xl">
            <span className="text-[180px] group-hover:scale-125 transition-transform duration-700 filter drop-shadow-2xl">🌲</span>
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent" />
          </div>
        </section>

        {/* HOW TO BUY SECTION */}
        <HowToBuy />

        {/* TOKENOMICS SECTION */}
        <Tokenomics />

        {/* ROADMAP SECTION */}
        <Roadmap />

        {/* COMMUNITY & SOCIAL PROOF */}
        <Community />

        {/* FREQUENTLY ASKED QUESTIONS */}
        <FAQ />

      </main>
    </div>
  );
}