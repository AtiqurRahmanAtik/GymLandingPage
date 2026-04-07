import React from 'react';
import { productsData } from '../../../public/productsData.js'; // Assuming data is in a separate file, or you can paste it above

// --- SVG Decorative Pattern Component ---
const DecorativeDots = ({ className }) => (
  <svg width="60" height="120" viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={`absolute text-gray-300 opacity-60 ${className}`}>
    <path d="M20 10 A 10 10 0 0 0 20 30 Z" fill="currentColor"/>
    <path d="M50 10 A 10 10 0 0 0 50 30 Z" fill="currentColor"/>
    <path d="M20 40 A 10 10 0 0 0 20 60 Z" fill="currentColor"/>
    <path d="M50 40 A 10 10 0 0 0 50 60 Z" fill="currentColor"/>
    <path d="M20 70 A 10 10 0 0 0 20 90 Z" fill="currentColor"/>
    <path d="M50 70 A 10 10 0 0 0 50 90 Z" fill="currentColor"/>
  </svg>
);

// --- Product Card Component ---
const ProductCard = ({ product }) => {
  return (
    <div className="bg-black rounded-[2rem] p-4 flex flex-col shadow-lg transition-transform duration-300 hover:scale-[1.02]">
      {/* Product Image Container */}
      <div className={`w-full aspect-[4/3] rounded-[1.5rem] mb-4 overflow-hidden relative ${product.bgColor}`}>
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover mix-blend-multiply opacity-90"
        />
      </div>

      {/* Product Details Container */}
      <div className="flex justify-between items-end px-2 pb-1">
        <div>
          <h3 className="text-white text-sm font-medium mb-1">{product.name}</h3>
          <div className="flex items-center gap-3">
            <span className="text-white font-semibold text-lg tracking-wide">
              {product.currency}{product.price.toFixed(2)}
            </span>
            {/* 5-Star Rating */}
            <div className="flex gap-0.5">
              {[...Array(product.rating)].map((_, i) => (
                <svg key={i} className="w-3 h-3 text-[#4ade80]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Add Button */}
        <button 
          className="bg-[#4ade80] hover:bg-green-500 text-white w-10 h-10 rounded-xl flex items-center justify-center transition-colors shadow-[0_0_10px_rgba(74,222,128,0.2)]"
          aria-label="Add to cart"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// --- Main Layout Component ---
export default function ProductsSection() {
  return (
    <section className="relative w-full bg-white flex justify-center py-4 px-4 sm:px-8 font-sans">
      {/* Responsive Container 
        max-w-[1691px] and min-h-[1336px] added based on your specific requirements 
      */}
      <div className="w-full max-w-[1691px] max-h-[1336px] relative flex flex-col">
        
        {/* Background Decorative Patterns */}
        <div className="hidden md:block pointer-events-none">
          <DecorativeDots className="top-0 left-32" />
          <DecorativeDots className="top-0 right-12" />
        </div>

        {/* Header */}
        <div className="mb-10 pt-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Our Products
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Fuel Your Workouts with Protein-Packed Nutrition
          </p>
        </div>

        {/* Grid Layout - 3 columns on large screens, 2 on medium, 1 on small */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full relative z-10">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
      </div>
    </section>
  );
}