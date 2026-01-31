"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-emerald-950/80 backdrop-blur-md border-b border-emerald-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* IMAGE LOGO REPLACEMENT */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <img 
            src="/logo.png" 
            alt="Big Foot Logo" 
            className="h-10 w-auto object-contain" 
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">
          <Link href="/legend" className="hover:text-lime-400 transition-colors">The Legend</Link>
          <Link href="/tokenomics" className="hover:text-lime-400 transition-colors">Foot-Nomics</Link>
          <Link href="/roadmap" className="hover:text-lime-400 transition-colors">Roadmap</Link>
          <Link href="/airdrop" className="bg-lime-400 text-emerald-950 px-5 py-2.5 rounded-full hover:bg-white transition-all transform hover:scale-105 active:scale-95">
            Join Airdrop
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-lime-400 p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <span className="text-xl">✕</span> : <span className="text-xl">☰</span>}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-emerald-900 border-b border-emerald-800 p-6 flex flex-col gap-6 text-center font-black uppercase text-xs tracking-widest animate-in slide-in-from-top duration-300">
          <Link href="/legend" onClick={() => setIsOpen(false)}>The Legend</Link>
          <Link href="/tokenomics" onClick={() => setIsOpen(false)}>Foot-Nomics</Link>
          <Link href="/roadmap" onClick={() => setIsOpen(false)}>Roadmap</Link>
          <Link href="/airdrop" onClick={() => setIsOpen(false)} className="text-lime-400 border border-lime-400 py-3 rounded-xl">Join Airdrop</Link>
        </div>
      )}
    </nav>
  );
}