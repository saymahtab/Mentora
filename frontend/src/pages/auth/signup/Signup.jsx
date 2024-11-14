import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignup = async () => {
    const { firstName, lastName, email, password } = formData;

    if (!firstName || !lastName || !email || !password ) {
      setError('Please fill in all fields and make sure passwords match.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      if (response.ok) {
        navigate('/mentor'); // Navigate to the mentor page
      } else {
        const data = await response.json();
        setError(data.message || 'Sign up failed.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleGoogleSignup = () => {
    console.log('Sign Up with Google');
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between min-h-screen">
      {/* Left Section */}
      <section className="flex-1 lg:px-14 px-5 pl-5 py-16 font-poppins">
        <Link to="/">
          <div className="text-2xl lg:text-3xl font-extrabold text-purple-700 cursor-pointer mb-10 lg:mb-16">
            Mentora
          </div>
        </Link>

        <div className="w-fit">
          <h1 className="font-extrabold text-3xl lg:text-[2.6rem] text-slate-800 mb-2">
            Create Your Account
          </h1>
          <p className="text-md text-slate-900 mb-8 lg:mb-10">
            Sign up using your email or Google to get started with Mentora.
          </p>

          <div className="flex flex-col">
            <button
              onClick={handleGoogleSignup}
              className="flex items-center justify-center text-gray-700 py-3 px-6 mb-5 rounded-full border border-zinc-400 hover:bg-gray-100 transition-all duration-200"
            >
              <img src="/google-icon.png" alt="Google" className="w-6 h-6 mr-2" />
              Sign Up with Google
            </button>

            <div className="flex items-center w-full mb-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-3 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="flex flex-col gap-6 mb-5">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="border border-gray-300 px-4 py-3 rounded-md focus:border-purple-600 w-full"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="border border-gray-300 px-4 py-3 rounded-md focus:border-purple-600 w-full"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="border border-gray-300 px-4 py-3 rounded-md focus:border-purple-600 w-full"
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="border border-gray-300 px-4 py-3 rounded-md focus:border-purple-600 w-full"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              onClick={handleSignup}
              className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-5 py-3 rounded-md w-full font-medium hover:from-purple-700 hover:to-indigo-600 transition-all duration-100"
            >
              Sign Up
            </button>
          </div>
        </div>

        <p className="text-gray-500 text-xs mt-4">
          By signing up, you accept Mentora’s terms and privacy guidelines.
        </p>
      </section>

      <section className="hidden lg:flex flex-[2_2_0] bg-gradient-to-r from-purple-600 to-indigo-500 items-center justify-center text-white relative overflow-hidden">
        <img
          src="/welcomePage.png"
          alt="Mentor and Mentee Illustration"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative text-center z-10">
          <h2 className="text-3xl font-bold mb-4">Join Mentora Today</h2>
          <p className="text-md font-light mb-8">
            Whether you're here to guide or learn, unlock new possibilities with Mentora.
          </p>
          <button className="bg-white text-purple-700 font-semibold px-5 py-2 rounded-full shadow-lg hover:bg-purple-100 transition-transform">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Signup;
