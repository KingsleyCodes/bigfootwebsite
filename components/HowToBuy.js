export default function HowToBuy() {
  const steps = [
    { title: "Create Wallet", desc: "Download Phantom or Solflare wallet." },
    { title: "Get SOL", desc: "Buy SOL on an exchange and send it to your wallet." },
    { title: "Swap $FOOT", desc: "Head to Raydium/Jupiter and swap SOL for $FOOT." },
    { title: "HODL", desc: "Keep your tracks hidden and wait for the moon." }
  ];

  return (
    <section className="py-24 px-6 bg-emerald-900/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-16 text-center italic">
          START THE <span className="text-lime-400">HUNT</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative p-8 bg-emerald-900/30 border border-emerald-800 rounded-3xl hover:border-lime-400 transition-colors group">
              <span className="absolute -top-4 -left-4 w-10 h-10 bg-lime-400 text-emerald-950 flex items-center justify-center font-black rounded-full rotate-12">
                0{i + 1}
              </span>
              <h3 className="text-xl font-bold mb-4 uppercase">{step.title}</h3>
              <p className="text-emerald-100/60 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}