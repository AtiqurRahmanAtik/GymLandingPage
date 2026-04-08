import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember_me: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('https://apitest.thewarriors.team/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          // Converting boolean to string as specified in your API params
          remember_me: formData.remember_me ? "true" : "false" 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login Successful:', data);
        
        // As requested: Using OTP from API response if it exists
        // This is commonly used if the user needs to verify their account before proceeding
        if (data.otp) {
          console.log('OTP received from response:', data.otp);
          alert(`Login successful! Your OTP for verification is: ${data.otp}`);
          // Redirect to Verify OTP page here, e.g., navigate('/verify-otp', { state: { email: formData.email } })
        } else if (data.token) {
           // Standard JWT token login handling
           localStorage.setItem('authToken', data.token);
           alert('Login successful!');
           // Redirect to dashboard here
        } else {
           alert('Login successful!');
        }

      } else {
        console.error('Login Failed:', data);
        alert(data.message || 'Invalid email or password. Please try again.');
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
      
      {/* Login Card Wrapper */}
      <div className="w-full max-w-[450px] bg-[#0a0a0a] border border-zinc-800 rounded-[30px] p-8 md:p-12 shadow-2xl">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-black tracking-wide uppercase text-white mb-3">
            Welcome <span className="text-[#71AC16]">Back</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base">
            Sign in to continue your journey.
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
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
            <div className="flex justify-between items-center mb-2 ml-1">
              <label className="block text-sm font-medium text-zinc-400" htmlFor="password">
                Password
              </label>
              {/* Forgot Password Link */}
              <a href="/forgot-password" className="text-sm text-[#71AC16] hover:text-white transition-colors duration-300">
                Forgot Password?
              </a>
            </div>
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

          {/* Remember Me Checkbox */}
          <div className="flex items-center pt-2">
            <input
              type="checkbox"
              id="remember_me"
              name="remember_me"
              checked={formData.remember_me}
              onChange={handleChange}
              className="w-5 h-5 rounded border-zinc-700 bg-black cursor-pointer accent-[#71AC16]"
            />
            <label htmlFor="remember_me" className="ml-3 text-sm text-zinc-400 cursor-pointer select-none">
              Remember Me
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-[#71AC16] hover:bg-[#85c81a] text-black font-bold py-4 rounded-2xl transition-colors duration-300 uppercase tracking-widest mt-6 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>

          {/* Register Redirection Link */}
          <div className="text-center mt-6">
            <p className="text-zinc-400 text-sm">
              Don't have an account?{' '}
              <a href="/register" className="text-[#71AC16] hover:text-white font-semibold transition-colors duration-300">
                Sign Up Now
              </a>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;