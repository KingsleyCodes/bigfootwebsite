export default function Community() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-lime-400 p-12 rounded-[40px] text-emerald-950 flex flex-col justify-between overflow-hidden relative group">
          <div>
            <h2 className="text-5xl font-black uppercase leading-none mb-6 italic">Join the <br />Wilderness</h2>
            <p className="max-w-md font-bold text-lg opacity-80">Thousands of hunters are already tracking $FOOT. Don't get left in the dark.</p>
          </div>
          <a href="https://t.me/bigfoothunterai" className="mt-8 bg-emerald-950 text-white w-fit px-8 py-4 rounded-2xl font-black uppercase hover:scale-105 transition-transform">
            Enter Telegram
          </a>
          <span className="absolute -bottom-10 -right-10 text-[200px] opacity-10 group-hover:rotate-12 transition-transform">👣</span>
        </div>
        
        <div className="bg-emerald-900/40 border border-emerald-800 p-12 rounded-[40px] flex flex-col justify-center items-center text-center">
          <h3 className="text-6xl font-black text-lime-400 mb-2 italic">50K+</h3>
          <p className="uppercase font-black tracking-widest text-xs text-emerald-500">Holders Worldwide</p>
        </div>
      </div>
    </section>
  );
}