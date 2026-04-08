import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';

const VerifyOTP = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    email: '',
    otp: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  // Automatically fill the email from the previous page's state if available
  useEffect(() => {
    if (location.state && location.state.email) {
      setFormData((prev) => ({ ...prev, email: location.state.email }));
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('https://apitest.thewarriors.team/api/verify_otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          otp: formData.otp,
        }),
      });

      const data = await response.json();

      // Check for success status codes (200 or 201)
      if (response.status === 200 || response.status === 201) {
        console.log('OTP Verification Successful:', data);
        alert('Account verified successfully!');
        
        // Redirect to login page on success
        navigate('/login'); 
      } else {
        console.error('OTP Verification Failed:', data);
        
        // Check if the error message indicates the OTP has expired
        const errorMessage = data.message ? data.message.toLowerCase() : '';
        if (errorMessage.includes('expire') || errorMessage.includes('timeout')) {
          alert('OTP has expired. Redirecting to resend OTP page.');
          
          // Redirect to the resend OTP page, passing the email in state
          navigate('/resend-otp', { state: { email: formData.email } });
        } else {
          // General error alert
          alert(data.message || 'Invalid OTP or Email. Please try again.');
        }
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
      
      {/* Verify OTP Card Wrapper */}
      <div className="w-full max-w-[450px] bg-[#0a0a0a] border border-zinc-800 rounded-[30px] p-8 md:p-12 shadow-2xl">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-black tracking-wide uppercase text-white mb-3">
            Verify <span className="text-[#71AC16]">Account</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base">
            Enter the OTP sent to your registered email.
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
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-[#71AC16] focus:ring-1 focus:ring-[#71AC16] transition-all duration-300"
              placeholder="name@example.com"
              required
            />
          </div>

          {/* OTP Field */}
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2 ml-1" htmlFor="otp">
              6-Digit OTP Code
            </label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              maxLength="6"
              className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 tracking-widest text-center text-xl focus:outline-none focus:border-[#71AC16] focus:ring-1 focus:ring-[#71AC16] transition-all duration-300"
              placeholder="••••••"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-[#71AC16] hover:bg-[#85c81a] text-black font-bold py-4 rounded-2xl transition-colors duration-300 uppercase tracking-widest mt-6 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Verifying...' : 'Verify OTP'}
          </button>

          {/* Resend OTP Link */}
          <div className="text-center mt-6">
            <p className="text-zinc-400 text-sm">
              Didn't receive the code?{' '}
              <button 
                type="button" 
                className="text-[#71AC16] hover:text-white font-semibold transition-colors duration-300"
                onClick={() => navigate('/resend-otp', { state: { email: formData.email } })}
              >
                Resend OTP
              </button>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;