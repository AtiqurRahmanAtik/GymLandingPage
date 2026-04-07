import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 lg:mb-24">
          
          {/* Column 1: About */}
          <div className="lg:col-span-1">
            <h4 className="text-base font-semibold text-gray-900 mb-6">About</h4>
            <p className="text-[13px] text-gray-500 leading-relaxed mb-6 pe-4">
              At MuscleForge, we believe in the power of dedication and hard work. Our mission is to provide you with the tools, resources, and community you need to build the body of your dreams
            </p>
            <div className="w-3/5 border-t border-gray-300 mb-4"></div>
            <div className="flex items-center gap-4 text-[13px]">
              <span className="font-medium text-gray-900">Social Media:</span>
              <div className="flex gap-3 font-semibold text-gray-900">
                <a href="#" className="hover:underline">Fb</a>
                <a href="#" className="hover:underline">In</a>
                <a href="#" className="hover:underline">Tw</a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-[13px] text-gray-500">
              <li><a href="#" className="hover:text-gray-900 hover:underline transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline transition-colors">Our gym location</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline transition-colors">Privacy policy</a></li>
            </ul>
          </div>

          {/* Column 3: Our Service */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-6">Our Service</h4>
            <ul className="space-y-4 text-[13px] text-gray-500">
              <li><a href="#" className="hover:text-gray-900 hover:underline transition-colors">Indoor gym</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline transition-colors">Outdoor gym</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline transition-colors">On ground gym</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline transition-colors">Yoga class</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-6">Contact Info</h4>
            <ul className="space-y-4 text-[13px] text-gray-500">
              <li>
                <span className="font-semibold text-gray-900 mr-1">Mail:</span> 
                info@example.com
              </li>
              <li>
                <span className="font-semibold text-gray-900 mr-1">Call:</span> 
                +91 9876543210
              </li>
              <li>
                <span className="font-semibold text-gray-900 mr-1">Location:</span> 
                New York, 235 Lane, 10001
              </li>
              <li>
                <span className="font-semibold text-gray-900 mr-1">Time:</span> 
                Workout Hours: 5AM - 8PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-md border-t border-gray-200 mb-6"></div>
          <p className="text-[12px] text-gray-400">
            websitename.com©2024 all right reserve
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;