"use client";
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-950 border-t border-emerald-900 pt-20 pb-10 px-6 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="text-3xl font-black text-white uppercase italic tracking-tighter group">
              BIG<span className="text-lime-400 group-hover:text-white transition-colors">FOOT</span>
            </Link>
            <p className="text-emerald-500/60 text-sm leading-relaxed max-w-xs">
              The legend of the forest is now on the blockchain. Track the prints, join the hunt, and secure the bag.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-lime-400 font-black uppercase text-[10px] tracking-[0.2em] mb-2">Navigation</h4>
            <Link href="/#about" className="text-emerald-100/50 hover:text-white transition-colors text-sm w-fit">The Legend</Link>
            <Link href="/#tokenomics" className="text-emerald-100/50 hover:text-white transition-colors text-sm w-fit">Foot-Nomics</Link>
            <Link href="/#roadmap" className="text-emerald-100/50 hover:text-white transition-colors text-sm w-fit">Roadmap</Link>
            <Link href="/airdrop" className="text-emerald-100/50 hover:text-white transition-colors text-sm w-fit">Join Airdrop</Link>
          </div>

          {/* Socials & Community */}
          <div className="flex flex-col gap-3">
            <h4 className="text-lime-400 font-black uppercase text-[10px] tracking-[0.2em] mb-2">Community</h4>
            <a 
              href="https://x.com/FootBig92126" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-100/50 hover:text-white transition-colors text-sm w-fit"
            >
              X (Twitter)
            </a>
            <a 
              href="https://t.me/bigfoothunterai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-100/50 hover:text-white transition-colors text-sm w-fit"
            >
              Telegram
            </a>
            <a 
              href="#" 
              className="text-emerald-100/50 hover:text-white transition-colors text-sm w-fit"
            >
              DexScanner
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-900/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-emerald-800 text-[10px] font-black uppercase tracking-widest">
            © {currentYear} BIG FOOT PROJECT. ALL RIGHTS RESERVED.
          </p>
          <div className="text-emerald-800 text-[9px] font-medium uppercase tracking-tighter text-center md:text-right max-w-md">
            Disclaimer: $FOOT is a community token for entertainment purposes. Crypto hunting involves risk. Don't get lost in the forest.
          </div>
        </div>
      </div>
    </footer>
  );
}