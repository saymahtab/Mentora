import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate= useNavigate();

  const [formData, setFormData] = useState({
    identifier: '', // Changed from email to identifier for email or username
    password: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignin = async () => {
    if (!formData.identifier || !formData.password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName: formData.identifier, password: formData.password }),
      });

      if (response.ok) {
        console.log('Login successful');
        navigate('/home')
        // Redirect or additional logic here
      } else {
        const data = await response.json();
        navigate('/home')
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      navigate('/home')
    }
  };

  const handleGoogleSignin = () => {
    console.log('Sign in with Google');
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between min-h-screen">
      {/* Left Section */}
      <section className="flex-1 flex-col lg:px-14 px-5 pl-5 py-14 items-start font-poppins">
        <Link to={'/'}>
          <div className="text-2xl lg:text-2xl font-extrabold text-purple-700 cursor-pointer mb-10 lg:mb-10">
            Mentora
          </div>
        </Link>

        <div className="w-fit flex flex-col">
          <h1 className="font-extrabold text-3xl lg:text-[2.6rem] leading-tight text-slate-800 mb-2 pr-2">
            Welcome Back!
          </h1>
          <p className="font-sans text-md text-slate-900 mb-8 lg:mb-10">
            Log in with your email, username, or Google to continue your Mentora journey.
          </p>

          <div className='flex flex-col'>
            <button
              onClick={handleGoogleSignin}
              className="flex items-center justify-center text-gray-700 py-3 px-6 mb-5 rounded-full border border-zinc-400 hover:bg-gray-100 transition-all duration-200 relative"
            >
              <img src="/google-icon.png" alt="Google" className="w-6 h-6 mr-2 absolute left-4" />
              Continue with Google
            </button>

            <div className="flex items-center w-full mb-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-3 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Login Form */}
            <div className="flex flex-col gap-6 mb-10 lg:mb-5">
              <input
                type="text"
                name="identifier"
                value={formData.identifier}
                onChange={handleInputChange}
                placeholder="Email or Username"
                className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-purple-600 w-full"
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-purple-600 w-full"
              />
            </div>

            <p className={`text-red-500 text-sm ${!error ? 'hidden' : ''}`}>
              {error}
            </p>

            <button
              className="bg-gradient-to-r from-purple-600 mt-5 to-indigo-500 text-sm text-white px-5 py-3 rounded-md w-full font-medium cursor-pointer hover:from-purple-700 hover:to-indigo-600 transition-all duration-100"
              onClick={handleSignin}
            >
              Log In
            </button>
          </div>
        </div>
      </section>

      {/* Right Section */}
      <section className="hidden lg:flex flex-[2_2_0] bg-gradient-to-r from-purple-600 to-indigo-500 items-center justify-center text-white relative overflow-hidden">
        <img 
          src="/welcomePage.png" 
          alt="Mentor and Mentee Illustration" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 animate-float"
        />
        <div className="relative text-center z-10">
          <h2 className="text-3xl font-bold font-poppins mb-4 px-10">
            Discover New Opportunities
          </h2>
          <p className="text-md font-light mb-8">
            Join a growing community where you can share your knowledge or gain invaluable insights.  
          </p>
          <button className="bg-white text-purple-700 font-semibold px-5 py-2 rounded-full shadow-lg hover:bg-purple-100 transition-transform">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Login;
