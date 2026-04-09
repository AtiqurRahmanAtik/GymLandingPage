import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';

// Asset Imports
import heroImage from '../../assets/WWW.png';
import shapeSubtract from '../../assets/Subtract.svg';
import bgEllipse from '../../assets/Ellipse3.png';

import shapeBlack from '../../assets/Rectangle26.png';
import btnGreenBg from '../../assets/Rectangle30.png';
import shapeGreenLeft from '../../assets/Vector1.png';

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check for token on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = async () => {
    const token = localStorage.getItem('token');
    
    // Call the logout API if we have a token
    if (token) {
      try {
        await fetch('https://apitest.thewarriors.team/api/logout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}` // Passing the Bearer token
          }
        });
      } catch (error) {
        console.error('Network Error during logout:', error);
      }
    }

    // Remove the token from local storage
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    
    // Redirect to login page
    navigate('/');
  };

  // Custom styles for the specialized text effects
  const outlineTextStyle = {
    WebkitTextStroke: '2px rgba(255, 255, 255, 0.8)',
    color: 'transparent',
  };

  const halfFilledTextStyle = {
    background: 'linear-gradient(to bottom, transparent 55%, #ffffff 55%)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    WebkitTextStroke: '2px rgba(255, 255, 255, 0.9)',
  };

  return (
    <div className="relative w-full max-w-[1700px] mx-auto min-h-[1088px] bg-white overflow-hidden font-sans px-4 md:px-[20px] pt-0 pb-10">
      
      {/* MAIN BACKGROUND LAYER USING PROVIDED ASSETS */}
      {/* Base Black Rectangle (Rectangle26) */}
      <img 
        src={shapeBlack} 
        alt="Base Dark Background" 
        className="absolute top-4 md:top-[20px] left-4 md:left-[20px] right-4 md:right-[20px] bottom-4 md:bottom-[20px] w-[calc(100%-32px)] md:w-[calc(100%-40px)] h-[calc(100%-32px)] md:h-[calc(100%-40px)] object-cover rounded-[30px] md:rounded-[40px] lg:rounded-[60px] z-0"
      />
      
      {/* Subtract SVG Overlay for the custom cutout shape */}
      <img 
        src={shapeSubtract} 
        alt="Main Background Cutout Shape" 
        className="absolute -top-8 left-4 md:left-[20px] right-4 md:right-[20px] bottom-4 md:bottom-[20px] w-[calc(100%-32px)] md:w-[calc(100%-40px)] h-[calc(100%-32px)] md:h-[calc(100%-40px)] object-fill z-0 pointer-events-none hidden md:block"
      />

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full h-full rounded-[30px] md:rounded-[40px] lg:rounded-[60px] overflow-hidden">
        
        {/* HERO IMAGE */}
        <div className="absolute right-0 top-0 h-full w-full lg:max-w-[70%] z-0">
          <img 
            src={heroImage} 
            alt="Bodybuilders" 
            className="object-cover w-full h-full opacity-90 object-top md:object-right mix-blend-lighten"
          />
          {/* Gradient fade to blend image into the background seamlessly */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-black/80 lg:via-black/40 to-transparent"></div>
        </div>

        {/* TOP NAVIGATION BAR */}
        <nav className="relative z-20 flex flex-wrap lg:flex-nowrap items-center justify-between px-6 lg:px-12 pt-8 w-full gap-4 lg:gap-0">
          
          {/* Logo */}
          <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 -ml-2 lg:-ml-8 -mt-2 lg:-mt-4 bg-[#7ec124] rounded-full p-2 lg:p-0">
            <img src={bgEllipse} alt="Logo Background" className="absolute w-full h-full object-contain hidden lg:block" />
            <div className="relative z-10 grid grid-cols-2 gap-1 w-5 h-5 md:w-6 md:h-6 text-white">
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 border-2 border-white rounded-[3px]"></span>
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 border-2 border-white rounded-[3px]"></span>
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 border-2 border-white rounded-[3px]"></span>
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 border-2 border-white rounded-[3px]"></span>
            </div>
          </div>

          {/* Center Nav & Search (Styled exactly like image) */}
          <div className="hidden lg:flex items-center bg-black border border-white/20 rounded-full pl-8 pr-2 py-1.5 w-auto max-w-[600px] justify-between shadow-lg">
            <ul className="flex items-center space-x-6 text-white text-sm font-medium tracking-wide">
              <li className="cursor-pointer hover:text-[#7ec124] transition">Home</li>
              <li className="cursor-pointer hover:text-[#7ec124] transition">Our gym location</li>
              <li className="text-gray-600 font-light px-2">|</li>
            </ul>
            <div className="flex items-center bg-[#333333] rounded-full px-4 py-2 ml-2 w-40 xl:w-48">
              <input 
                type="text" 
                placeholder="Search" 
                className="bg-transparent outline-none text-white text-sm w-full placeholder-gray-400"
              />
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>

          {/* Auth Button (Conditional Register / Logout) */}
          {isLoggedIn ? (
            <button 
              onClick={handleLogout}
              className="relative px-6 py-2.5 md:px-8 md:py-3 font-bold text-white tracking-wider rounded-full overflow-hidden group cursor-pointer hover:scale-105 transition-transform"
            >
              <img src={btnGreenBg} alt="button background" className="absolute inset-0 w-full h-full object-cover z-0" />
              <span className="relative z-10 text-sm md:text-base">LOGOUT</span>
            </button>
          ) : (
            <button className="relative px-6 py-2.5 md:px-8 md:py-3 font-bold text-white tracking-wider rounded-full overflow-hidden group hover:scale-105 transition-transform ml-auto lg:ml-0">
              <img src={btnGreenBg} alt="button background" className="absolute inset-0 w-full h-full object-cover z-0" />
              <Link to={"/register"} className="relative z-10 text-sm md:text-base">REGISTER</Link>
            </button>
          )}
        </nav>

        {/* MAIN CONTENT AREA */}
        <div className="relative z-10 flex flex-col-reverse lg:flex-row h-full mt-8 lg:mt-0 min-h-[850px]">
          
          {/* LEFT SIDEBAR (Socials & Specialty) */}
          <div className="w-full lg:w-[35%] flex flex-col justify-center px-6 lg:px-0 pt-8 lg:pt-0 pb-12 lg:pb-2">
            
            {/* Social Links */}
            <div className="lg:ml-16 mb-8 lg:-mb-4 max-w-xs z-20">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-white text-sm font-semibold tracking-wide">Follow On:</span>
                <div className="flex space-x-4 text-white">
                  <svg className="w-5 h-5 cursor-pointer hover:text-[#7ec124] transition" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                  <svg className="w-5 h-5 cursor-pointer hover:text-[#7ec124] transition" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"></path></svg>
                  <svg className="w-5 h-5 cursor-pointer hover:text-[#7ec124] transition" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
                  <svg className="w-5 h-5 cursor-pointer hover:text-[#7ec124] transition" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
                </div>
              </div>
            </div>

            {/* Our Specialty Section */}
            <div className="relative w-full max-w-[350px] lg:mb-20">
              <img src={shapeGreenLeft} alt="Green Background Shape" className="absolute inset-0 w-full h-full object-cover z-0 rounded-[30px] lg:rounded-l-none lg:rounded-r-[60px]" />
              
              <div className="relative z-10 px-8 py-12 lg:pt-28 lg:pb-16">
                <h3 className="text-white text-xl font-black mb-6 uppercase tracking-wider">Our Specialty</h3>
                
                <div className="space-y-4">
                  {/* Specialty Item 1 */}
                  <div className="flex items-center space-x-4 border border-white/40 rounded-2xl p-3 cursor-pointer hover:bg-white/20 transition backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-lg border border-white/60 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <span className="text-white font-medium text-sm">Ground running</span>
                  </div>

                  {/* Specialty Item 2 */}
                  <div className="flex items-center space-x-4 border border-white/40 rounded-2xl p-3 cursor-pointer hover:bg-white/20 transition backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-lg border border-white/60 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <span className="text-white font-medium text-sm">Yoga Assistance</span>
                  </div>

                  {/* Specialty Item 3 */}
                  <div className="flex items-center space-x-4 border border-white/40 rounded-2xl p-3 cursor-pointer hover:bg-white/20 transition backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-lg border border-white/60 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                    </div>
                    <span className="text-white font-medium text-sm">Personal Trainer</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT HERO TYPOGRAPHY & BUTTONS */}
          <div className="w-full lg:w-[65%] flex flex-col justify-end px-6 lg:px-0 pb-16 lg:pb-32 z-10 lg:pr-12">
            
            {/* Massive Heading */}
            <div className="flex flex-col -space-y-3 lg:-space-y-6 mb-8 z-20">
              <h1 className="text-[50px] sm:text-[75px] md:text-[90px] lg:text-[110px] xl:text-[130px] font-black uppercase leading-none tracking-tighter w-full" style={outlineTextStyle}>
                POWER YOUR
              </h1>
              <h1 className="text-[50px] sm:text-[75px] md:text-[90px] lg:text-[110px] xl:text-[130px] font-black uppercase leading-none tracking-tighter w-full" style={halfFilledTextStyle}>
                POTENTIALE
              </h1>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 z-20">
              <button className="flex items-center justify-center space-x-4 border border-white text-white rounded-full px-6 py-3 md:px-8 md:py-4 hover:bg-white hover:text-black transition duration-300 w-full sm:w-auto">
                <span className="text-sm font-semibold tracking-widest uppercase">Shop Now</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
              
              <button className="flex items-center justify-center border border-white text-white rounded-2xl p-3 md:p-4 hover:bg-white hover:text-black transition duration-300 w-full sm:w-auto">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;