import React from 'react';

// Reusable component for the text blocks
const FeatureBlock = ({ title, description }) => (
  <div className="mb-8">
    <h3 className="text-white font-medium text-lg mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed pr-4">
      {description}
    </p>
  </div>
);

// Decorative Pattern SVG (Left side)
const LeftDecoration = () => (
  <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-4 left-4 text-gray-300 opacity-60">
    <path d="M10 20 A 10 10 0 0 1 30 20 Z" fill="currentColor"/>
    <path d="M40 20 A 10 10 0 0 1 60 20 Z" fill="currentColor"/>
    <path d="M70 20 A 10 10 0 0 1 90 20 Z" fill="currentColor"/>
    <path d="M10 40 A 10 10 0 0 1 30 40 Z" fill="currentColor"/>
    <path d="M60 40 A 10 10 0 0 1 80 40 Z" fill="currentColor"/>
    <path d="M100 40 A 10 10 0 0 1 120 40 Z" fill="currentColor"/>
  </svg>
);

// Decorative Pattern SVG (Right side)
const RightDecoration = () => (
  <svg width="60" height="120" viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-8 right-12 text-gray-300 opacity-60">
    <path d="M20 10 A 10 10 0 0 0 20 30 Z" fill="currentColor"/>
    <path d="M50 10 A 10 10 0 0 0 50 30 Z" fill="currentColor"/>
    <path d="M20 40 A 10 10 0 0 0 20 60 Z" fill="currentColor"/>
    <path d="M50 40 A 10 10 0 0 0 50 60 Z" fill="currentColor"/>
    <path d="M20 70 A 10 10 0 0 0 20 90 Z" fill="currentColor"/>
    <path d="M50 70 A 10 10 0 0 0 50 90 Z" fill="currentColor"/>
  </svg>
);

export default function TrainingSection() {
  return (
    <section className="relative w-full bg-white flex justify-center items-center py-12 px-4 sm:px-8 font-sans min-h-[799px]">
      {/* Maximum width container matching the requested spec */}
      <div className="w-full max-w-[1680px] relative">
        
        {/* Background Decorative Shapes */}
        <div className="hidden md:block">
          <LeftDecoration />
          <RightDecoration />
        </div>

        {/* Header Area */}
        <div className="mb-8 pt-6 pl-2 relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Train Like a Champion
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Unleash Your Power with Expert Boxing Training
          </p>
        </div>

        {/* Main Dark Card */}
        <div className="bg-black rounded-[2rem] p-4 sm:p-8 flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10 shadow-2xl">
          
          {/* Column 1: Image */}
          <div className="w-full lg:w-1/3 flex-shrink-0">
            {/* Note: I'm using a placeholder image link here. Replace 'src' with your actual image path */}
            <img
              src="https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=800&q=80"
              alt="Professional Boxer"
              className="w-full h-full object-cover rounded-[1.5rem] min-h-[400px] lg:min-h-[500px]"
            />
          </div>

          {/* Column 2: Training Focus Areas */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center py-4">
            <h2 className="text-white text-xl sm:text-2xl font-bold mb-8">
              Training Focus Areas:
            </h2>
            <FeatureBlock
              title="Strength & Conditioning"
              description="Develop knockout power with a mix of strength training and explosive movements."
            />
            <FeatureBlock
              title="Speed & Agility"
              description="Sharpen your reflexes and footwork with dynamic drills that improve speed and coordination."
            />
            <FeatureBlock
              title="Endurance Training"
              description="Boost your stamina with high-intensity circuits that keep you fighting strong till the final round."
            />
          </div>

          {/* Column 3: Why Train With Us & Call to Action */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center py-4">
            <h2 className="text-white text-xl sm:text-2xl font-bold mb-8">
              Why Train With Us:
            </h2>
            <FeatureBlock
              title="Expert Coaches"
              description="Our experienced boxing trainers have worked with amateur and professional athletes, ensuring you get the best training tailored to your goals."
            />
            <FeatureBlock
              title="Flexible Programs"
              description="Whether you're a beginner or seasoned boxer, we offer flexible programs that fit your schedule and needs."
            />

            {/* Action Buttons */}
            <div className="flex items-center gap-6 mt-4">
              <button className="bg-[#4ade80] hover:bg-green-500 text-white font-semibold py-3.5 px-8 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(74,222,128,0.2)]">
                Punch Now
              </button>
              
              {/* Play Button Icon */}
              <button className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-dashed border-[#22543d] hover:border-[#4ade80] group transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                  <svg 
                    className="w-5 h-5 text-[#4ade80] ml-1 group-hover:scale-110 transition-transform" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4l12 6-12 6V4z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}