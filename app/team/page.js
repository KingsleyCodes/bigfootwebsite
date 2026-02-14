import Link from 'next/link';

export default function TeamPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-20">
        <h1 className="text-6xl md:text-8xl font-black uppercase italic text-lime-400 mb-6">
          THE HUNTERS
        </h1>
        <p className="text-emerald-500 font-bold tracking-widest uppercase text-sm">
          The Minds Behind the Big Foot Oracle
        </p>
      </div>

      {/* Main Content Card */}
      <div className="bg-emerald-900/20 border border-emerald-800 p-8 md:p-16 rounded-[40px] backdrop-blur-md shadow-2xl">
        <div className="max-w-3xl mx-auto space-y-12">
          
          {/* Mission Statement */}
          <div className="text-center space-y-6">
            <p className="text-2xl md:text-3xl text-white font-bold leading-tight italic">
              "Our team comprises experienced professionals in AI, blockchain development, and financial analytics."
            </p>
            <p className="text-emerald-100/70 text-lg leading-relaxed">
              With backgrounds from leading tech firms and crypto projects, we are committed to building a robust and ethical platform. We believe in the power of data to democratize the hunt for on-chain gems.
            </p>
          </div>

          {/* Core Areas of Expertise */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 border-y border-emerald-800/50">
            <div className="text-center">
              <span className="text-4xl block mb-2">🤖</span>
              <h3 className="text-lime-400 font-black uppercase text-xs tracking-widest">AI & ML</h3>
              <p className="text-[10px] text-emerald-500 uppercase mt-1">Neural Networks</p>
            </div>
            <div className="text-center">
              <span className="text-4xl block mb-2">⛓️</span>
              <h3 className="text-lime-400 font-black uppercase text-xs tracking-widest">Blockchain</h3>
              <p className="text-[10px] text-emerald-500 uppercase mt-1">Solana & Rust</p>
            </div>
            <div className="text-center">
              <span className="text-4xl block mb-2">📊</span>
              <h3 className="text-lime-400 font-black uppercase text-xs tracking-widest">Analytics</h3>
              <p className="text-[10px] text-emerald-500 uppercase mt-1">On-Chain Alpha</p>
            </div>
          </div>

          {/* Doxxing/Security Section */}
          <div className="bg-emerald-950/50 p-8 rounded-3xl border border-emerald-700/50 text-center">
            <h2 className="text-white font-black uppercase tracking-tighter text-2xl mb-4 italic">
              Security & Trust
            </h2>
            <p className="text-emerald-200/80 mb-8">
              For security and trust, team details are doxxed upon request through official channels. We value the privacy of our builders while maintaining full accountability to our major partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://t.me/bigfoothunterai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-lime-400 text-emerald-950 font-black px-8 py-4 rounded-xl hover:scale-105 transition-transform uppercase text-sm tracking-widest"
              >
                Contact via Telegram
              </a>
              <a 
                href="mailto:team@bigfoothunter.ai" 
                className="bg-transparent border border-emerald-700 text-white font-black px-8 py-4 rounded-xl hover:bg-emerald-800 transition-colors uppercase text-sm tracking-widest"
              >
                Official Email
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Branding */}
      <div className="mt-20 text-center opacity-30 grayscale pointer-events-none">
        <img src="/logo.png" alt="Big Foot Logo" className="h-12 mx-auto mb-4" />
        <p className="text-[10px] text-emerald-500 font-black uppercase tracking-[1em]">Built for the Wild</p>
      </div>
    </div>
  );
}