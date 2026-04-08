import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

const ResendOTP = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  // Optionally auto-fill the email if passed from previous routes
  useEffect(() => {
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('https://apitest.thewarriors.team/api/resend_otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email
        }),
      });

      const data = await response.json();

      // Check for success status codes (200 or 201)
      if (response.status === 200 || response.status === 201) {
        console.log('OTP Resent Successfully:', data);
        alert('A new OTP has been sent to your email.');
        
        // Navigate back to the Verify OTP page and pass the email along
        navigate('/verify-otp', { state: { email: email } });
      } else {
        console.error('Failed to resend OTP:', data);
        alert(data.message || 'Failed to resend OTP. Please check your email and try again.');
      }
    } catch (error) {
      console.error('Network Error:', error);
      alert('An error occurred while connecting to the server. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-8 font-sans text-white">
      
      {/* Resend OTP Card Wrapper */}
      <div className="w-full max-w-[450px] bg-[#0a0a0a] border border-zinc-800 rounded-[30px] p-8 md:p-12 shadow-2xl">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-black tracking-wide uppercase text-white mb-3">
            Resend <span className="text-[#71AC16]">OTP</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base">
            Enter your registered email to receive a new verification code.
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2 ml-1" htmlFor="email">
              Registered Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-[#71AC16] focus:ring-1 focus:ring-[#71AC16] transition-all duration-300"
              placeholder="name@example.com"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-[#71AC16] hover:bg-[#85c81a] text-black font-bold py-4 rounded-2xl transition-colors duration-300 uppercase tracking-widest mt-6 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Sending...' : 'Send New Code'}
          </button>

          {/* Navigation Links */}
          <div className="text-center mt-6 flex flex-col space-y-3">
            <p className="text-zinc-400 text-sm">
              Remember your code?{' '}
              <button 
                type="button" 
                onClick={() => navigate('/verify-otp', { state: { email: email } })} 
                className="text-[#71AC16] hover:text-white font-semibold transition-colors duration-300"
              >
                Verify Now
              </button>
            </p>
            <p className="text-zinc-400 text-sm">
              Back to{' '}
              <button 
                type="button" 
                onClick={() => navigate('/login')} 
                className="text-[#71AC16] hover:text-white font-semibold transition-colors duration-300"
              >
                Login
              </button>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ResendOTP;