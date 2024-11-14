import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaChalkboardTeacher, FaCommentDots } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Welcome = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Navbar */}
      <nav className={`flex justify-between px-4 lg:justify-center items-center p-2 fixed w-full bg-white ${hasScrolled ? 'shadow-md' : ''} z-10 gap-20 transition-shadow duration-100`}>
        <Link to={'/'}>
          <div className="text-2xl xs:text-2xl font-bold text-purple-700 cursor-pointer mb-1">
            Mentora
          </div>
        </Link>
        <div className='hidden lg:flex items-center gap-10'>
          <ul className='flex gap-7 font-semibold'>
            <li className='px-4 py-2 rounded cursor-pointer hover:text-purple-600'>Home</li>
            <li className='px-4 py-2 rounded cursor-pointer hover:text-purple-600'>Explore</li>
            <li className='px-4 py-2 rounded cursor-pointer hover:text-purple-600'>Testimonials</li>
            <li className='px-4 py-2 rounded cursor-pointer hover:text-purple-600'>Contact</li>
            <li className='px-4 py-2 rounded cursor-pointer hover:text-purple-600'>About</li>
          </ul>
          <div className='flex items-center gap-4 font-semibold'>
            <button 
              className="bg-gray-100 px-4 py-2 rounded cursor-pointer hover:bg-gray-200 transition duration-300"
              onClick={() => navigate('/auth/login')}
            >
              Login
            </button>
            <button 
              className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-4 py-2 rounded cursor-pointer hover:from-purple-700 hover:to-indigo-600 transition duration-300"
              onClick={() => navigate('/auth/signup')}
            >
              Signup
            </button>
          </div>
        </div>
        <div className='lg:hidden'>
          <button className='text-violet-600'>
            Menu
          </button>
        </div>
      </nav>
   
      {/* Main Banner Section */}
      <main className="flex-grow flex flex-col items-center justify-center xs:p-6 p-2 pb-12 relative top-16 xs:top-20 lg:top-16">        
        <div className="text-center max-w-3xl mx-auto lg:p-[3rem] p-1">
          <h1 className="lg:font-[800] font-[700] lg:text-6xl text-3xl lg:leading-tight text-slate-800 mb-8">Unlock Your Potential with Right Mentor</h1>
          <p className="text-lg md:text-xl mb-10 px-4 md:px-10 font-thin">
            We nurture talent for the future of technology, helping individuals unlock their potential while supporting organizations in their growth.
          </p>
          <div className='flex flex-col xs:flex-row justify-center xs:gap-6 gap-2 lg:mb-20 mb-10'>
            <button 
              className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-16 py-3 rounded cursor-pointer font-semibold hover:from-purple-700 hover:to-indigo-600 transition duration-300"
              onClick={() => navigate('/auth/signup')}
            >
              Signup
            </button>
            <button 
              className="bg-white text-black border border-slate-950 px-6 py-2 rounded cursor-pointer font-semibold"
              onClick={() => navigate('/auth/login')}
            >
              Become a Mentor
            </button>
          </div>
          <p className="text-sm lg:text-xl mb-8 px-4 md:px-16 font-thin">
            Your Journey to Success Begins with the Right Mentor.
          </p>
        </div>

        {/* Features Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Why Choose Mentora?</h2>
            <p className="text-gray-600">Explore the benefits of mentoring with our unique features.</p>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FaCalendarAlt, title: 'Automated Booking System', description: 'Easily book sessions with available mentors.' },
              { icon: FaChalkboardTeacher, title: 'Expert Mentors', description: 'Learn from industry leaders and specialists.' },
              { icon: FaCommentDots, title: 'Real-Time Chat', description: 'Get instant feedback and advice on your career queries.' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white shadow-md rounded-lg text-center transition transform duration-200"
              >
                <feature.icon className="text-purple-600 text-4xl mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white py-16 mt-5 w-full">
          <div className="container mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
          </div>
          <div className="container mx-auto lg:w-2/3 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 border rounded-lg shadow-md transition duration-300"
            >
              <p className="text-gray-700 text-lg italic mb-4">"Mentora has been a game-changer in my career. Connecting with industry mentors gave me insights I couldn't have gained otherwise!"</p>
              <p className="text-gray-800 font-semibold">- Sarah Williams, Software Developer</p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
      </main>
        <section className="bg-gradient-to-r w-full mt-20 from-indigo-600 to-purple-700 py-10 z-10 text-white text-center">
          <div className="container mx-auto pb-5">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
            <p className="mb-6">Start your journey with Mentora and connect with mentors to guide your career path.</p>
            <button
              className="bg-white text-purple-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 font-semibold"
              onClick={() => navigate('/auth/choose-role')}
            >
              Get Started
            </button>
          </div>
          <p>© {new Date().getFullYear()} Mentora. All rights reserved.</p>
        </section>
    </div>
  );
};

export default Welcome;
