import React from "react";

const NewsletterSubscribe = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Decorative dots background (Top Right & Bottom Left) */}
      <div className="absolute top-10 right-10 text-gray-200 opacity-50 hidden md:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
          <pattern id="dots-tr" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
            <path d="M0 7.5A7.5 7.5 0 0 1 7.5 0H15V15H7.5A7.5 7.5 0 0 1 0 7.5Z" />
          </pattern>
          <rect x="0" y="0" width="60" height="60" fill="url(#dots-tr)" />
        </svg>
      </div>
      <div className="absolute bottom-10 left-10 text-gray-200 opacity-50 hidden md:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor" className="rotate-180">
          <pattern id="dots-bl" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
             <path d="M0 7.5A7.5 7.5 0 0 1 7.5 0H15V15H7.5A7.5 7.5 0 0 1 0 7.5Z" />
          </pattern>
          <rect x="0" y="0" width="60" height="60" fill="url(#dots-bl)" />
        </svg>
      </div>

      {/* Main Card Container - UPDATED DIMENSIONS HERE */}
      <div className="w-full max-w-[1413px] h-auto lg:h-[486px] flex flex-col items-center justify-center bg-[#0A0A0A] rounded-[2rem] px-6 py-12 sm:py-16 md:px-12 lg:px-20 text-center relative z-10 shadow-2xl">
        
        {/* Top Label */}
        <p className="text-gray-300 text-sm md:text-base font-medium mb-3">
          Join our community
        </p>

        {/* Main Heading */}
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Subscribe to our{" "}
          <span className="relative inline-block">
            newsletter
            {/* Custom Orange Curved Underline */}
            <svg
              className="absolute -bottom-3 left-0 w-full text-[#FF4500]"
              viewBox="0 0 180 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 13C45 4 110 -2 178 8"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        {/* Description Text */}
        <p className="text-gray-400 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-[700px] mx-auto mb-10">
          Join Our Community Of Fitness Enthusiasts And Athletes! By Subscribing To Our Newsletter, You'll Receive Expert Training Tips, Nutrition Guides, Exclusive Discounts, And The Latest News On Upcoming Events And Products.
        </p>

        {/* Input Form Area */}
        <div className="relative flex items-center w-full max-w-[500px] mx-auto bg-transparent border border-gray-600 rounded-full p-1.5 focus-within:border-gray-400 transition-colors duration-300">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-1 bg-transparent px-5 py-3 outline-none text-white text-sm sm:text-base placeholder-gray-400 w-full rounded-l-full"
          />
          <button
            type="button"
            className="bg-white text-black font-semibold text-xs sm:text-sm tracking-wide px-6 sm:px-8 py-3 rounded-full hover:bg-gray-200 transition-colors duration-200 shrink-0"
          >
            SUBSCRIBE
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default NewsletterSubscribe;