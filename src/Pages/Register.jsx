import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';

const Register = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // API integration logic
      const response = await fetch('https://apitest.thewarriors.team/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          // Converting boolean to string to match the API's expected "text" type for terms
          terms: formData.terms ? "true" : "false" 
        }),
      });

      const data = await response.json();

      // Check if status is 200 or 201
      if (response.status === 200 || response.status === 201) {
        console.log('Registration Successful:', data);
        alert('Account created successfully!');
        
        // Redirect the user to the OTP verification page
        // Passing the email in state so the OTP page knows who is verifying
        navigate('/verify-otp', { state: { email: formData.email } });
      } else {
        console.error('Registration Failed:', data);
        alert(data.message || 'Registration failed. Please check your information.');
      }
    } catch (error) {
      console.error('Network Error:', error);
      alert('An error occurred while connecting to the server. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-8 font-sans text-white">
      
      {/* Registration Card Wrapper */}
      <div className="w-full max-w-[550px] bg-[#0a0a0a] border border-zinc-800 rounded-[30px] p-8 md:p-12 shadow-2xl">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-black tracking-wide uppercase text-white mb-3">
            Register <span className="text-[#71AC16]">Now</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base">
            Create your account to unlock your potential.
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Name Fields (Side-by-side on larger screens, stacked on mobile) */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="w-full">
              <label className="block text-sm font-medium text-zinc-400 mb-2 ml-1" htmlFor="first_name">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-[#71AC16] focus:ring-1 focus:ring-[#71AC16] transition-all duration-300"
                placeholder="Enter first name"
                required
              />
            </div>
            
            <div className="w-full">
              <label className="block text-sm font-medium text-zinc-400 mb-2 ml-1" htmlFor="last_name">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-[#71AC16] focus:ring-1 focus:ring-[#71AC16] transition-all duration-300"
                placeholder="Enter last name"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2 ml-1" htmlFor="email">
              Email Address
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

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2 ml-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-[#71AC16] focus:ring-1 focus:ring-[#71AC16] transition-all duration-300"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2 ml-1" htmlFor="password_confirmation">
              Confirm Password
            </label>
            <input
              type="password"
              id="password_confirmation"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
              className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-[#71AC16] focus:ring-1 focus:ring-[#71AC16] transition-all duration-300"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-center pt-2">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="w-5 h-5 rounded border-zinc-700 bg-black cursor-pointer accent-[#71AC16]"
              required
            />
            <label htmlFor="terms" className="ml-3 text-sm text-zinc-400 cursor-pointer select-none">
              I agree to the <span className="text-[#71AC16] hover:text-white transition-colors">Terms & Conditions</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#71AC16] hover:bg-[#85c81a] text-black font-bold py-4 rounded-2xl transition-colors duration-300 uppercase tracking-widest mt-6"
          >
            Create Account
          </button>

          {/* Login Redirection Link */}
          <div className="text-center mt-6">
            <p className="text-zinc-400 text-sm">
              Already have an account?{' '}
              <Link to={"/login"} className="text-[#71AC16] hover:text-white font-semibold transition-colors duration-300">
                Sign In Instead
              </Link>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Register;