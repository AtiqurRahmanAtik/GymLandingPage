import React from 'react';

// Mock data based on the provided image
const testimonialsData = [
  {
    id: 1,
    title: "The Best Training Program!",
    content: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
    name: "Stive meloni",
    role: "Ceo Of Miko",
    rating: 4.5,
    avatarColor: "bg-blue-400" // Placeholder for different avatar backgrounds
  },
  {
    id: 2,
    title: "The Best Training Program!",
    content: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
    name: "Stive meloni",
    role: "Ceo Of Miko",
    rating: 4.5,
    avatarColor: "bg-purple-400"
  },
  {
    id: 3,
    title: "The Best Training Program!",
    content: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
    name: "Stive meloni",
    role: "Ceo Of Miko",
    rating: 4.5,
    avatarColor: "bg-orange-400"
  },
  {
    id: 4,
    title: "The Best Training Program!",
    content: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
    name: "Stive meloni",
    role: "Ceo Of Miko",
    rating: 4.5,
    avatarColor: "bg-indigo-400"
  },
  {
    id: 5,
    title: "The Best Training Program!",
    content: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
    name: "Stive meloni",
    role: "Ceo Of Miko",
    rating: 4.5,
    avatarColor: "bg-indigo-500"
  },
  {
    id: 6,
    title: "The Best Training Program!",
    content: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
    name: "Stive meloni",
    role: "Ceo Of Miko",
    rating: 4.5,
    avatarColor: "bg-pink-500"
  }
];

// Helper component for the Star Rating
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-3.5 h-3.5 ${
            index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-600'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-gray-400 text-xs ml-1 font-medium">({rating})</span>
    </div>
  );
};

// Reusable Card Component
const TestimonialCard = ({ data }) => {
  return (
    <div className="bg-[#0a0a0a] rounded-2xl p-8 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-white text-lg font-semibold mb-3">
          {data.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-8">
          {data.content}
        </p>
      </div>
      
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center space-x-3">
          {/* Avatar Placeholder - In production, replace with actual <img> tags */}
          <div className={`w-12 h-12 rounded-full flex items-center justify-center overflow-hidden ${data.avatarColor}`}>
             <img 
               src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${data.id}&backgroundColor=transparent`} 
               alt={data.name}
               className="w-full h-full object-cover"
             />
          </div>
          <div>
            <h4 className="text-white text-sm font-medium">{data.name}</h4>
            <p className="text-gray-500 text-xs">{data.role}</p>
          </div>
        </div>
        
        <StarRating rating={data.rating} />
      </div>
    </div>
  );
};

// Main Section Component
export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans">
      {/* Header Area */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          What Our Clients Are Saying
        </h2>
        <p className="text-gray-500 text-base">
          Real Stories, Real Results — Hear From Our Athletes
        </p>
      </div>

      {/* Gray Background Container */}
      <div className="bg-gray-100 rounded-[2rem] p-6 md:p-10 lg:p-12">
        {/* CSS Grid for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} data={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}