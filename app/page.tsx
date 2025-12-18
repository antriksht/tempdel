'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import NpsSurvey from '@/components/NpsSurvey';

const PRODUCTS = [
  {
    id: 1,
    name: "Lumina Max 4",
    price: "$249.00",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    name: "Chronos Elite",
    price: "$899.00",
    category: "Watches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    name: "SoundLink Pro",
    price: "$349.00",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    name: "Vision Glass Air",
    price: "$199.00",
    category: "Eyewear",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    name: "Urban Tote",
    price: "$129.00",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    name: "Tech Pack V2",
    price: "$159.00",
    category: "Gear",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600"
  },
];

export default function Home() {
  const [showSurvey, setShowSurvey] = useState(false);

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 pb-24 safe-area-inset-bottom">
      {/* Search / Status Bar Mockup */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
        <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">S</div>
            <span className="font-bold text-xl tracking-tight">STORE</span>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
            <button className="relative p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              <span className="absolute top-1 right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-black"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-8 max-w-md mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-zinc-900 aspect-[2/1] shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 to-black opacity-80 z-10"></div>
          <img src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" alt="Hero" />
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-6">
            <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs mb-2">Summer Collection</span>
            <h2 className="text-white text-3xl font-extrabold leading-tight mb-4">Future of <br />Fashion</h2>
            <button className="w-fit bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-emerald-400 transition-colors">Explore Now</button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 mb-8 whitespace-nowrap overflow-x-auto no-scrollbar max-w-md mx-auto">
        <div className="flex gap-3">
          {["All", "Footwear", "Apparel", "Tech", "Accessories"].map((cat, i) => (
            <button
              key={cat}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${i === 0 ? 'bg-zinc-900 text-white dark:bg-white dark:text-black shadow-lg' : 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-4 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          Popular
          <span className="text-xs font-normal text-zinc-400 ml-auto cursor-pointer">View All</span>
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {PRODUCTS.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onBuy={() => setShowSurvey(true)}
            />
          ))}
        </div>
      </section>

      {/* Bottom Nav Mockup */}
      <div className="fixed bottom-0 inset-x-0 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-lg border-t border-zinc-200 dark:border-zinc-800 pb-safe z-30">
        <div className="flex justify-around items-center h-16 max-w-md mx-auto">
          <button className="p-2 text-emerald-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></button>
          <button className="p-2 text-zinc-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
          <button className="p-2 text-zinc-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>
          <button className="p-2 text-zinc-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></button>
        </div>
      </div>

      {showSurvey && <NpsSurvey onClose={() => setShowSurvey(false)} />}
    </main>
  );
}
