import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Big Foot | 50M Token Airdrop",
  description: "Join the hunt for the legendary $FOOT token on Solana.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-emerald-950 antialiased selection:bg-lime-400 selection:text-emerald-950" suppressHydrationWarning>
        
        {/* GLOBAL FOREST BACKGROUND */}
        <div 
          className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url('/forest-bg.webp')" }} 
        />

        {/* GLOBAL VIGNETTE (Shadow edges) */}
        <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-emerald-950 via-transparent to-emerald-950" />

        {/* SITE CONTENT */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>

      </body>
    </html>
  );
}