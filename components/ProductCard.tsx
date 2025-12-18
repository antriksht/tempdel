interface Product {
    id: number;
    name: string;
    price: string;
    category: string;
    image: string;
}

interface ProductCardProps {
    product: Product;
    onBuy: () => void;
}

export default function ProductCard({ product, onBuy }: ProductCardProps) {
    return (
        <div className="group relative bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 dark:border-zinc-800 flex flex-col h-full">
            <div className="aspect-[4/5] relative overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onBuy();
                    }}
                    className="absolute bottom-3 right-3 bg-white text-black p-3 rounded-full shadow-lg translate-y-12 group-hover:translate-y-0 transition-transform duration-300 ease-out flex items-center gap-2 font-medium text-sm hover:bg-emerald-500 hover:text-white"
                >
                    <span>Buy</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                </button>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-end">
                <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1 uppercase tracking-wide">{product.category}</p>
                <h3 className="font-bold text-zinc-900 dark:text-white text-lg leading-tight mb-1">{product.name}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium">{product.price}</p>
            </div>
        </div>
    );
}
