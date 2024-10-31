import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
          <div className="text-2xl xs:text-3xl font-bold text-purple-700 cursor-pointer mb-3">
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
              onClick={() => navigate('/auth/choose-role')}
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
      <main className="flex-grow flex flex-col items-center justify-center xs:p-6 p-2 pb-12 relative top-16 xs:top-2 lg:top-16">        
        <div className="text-center max-w-3xl mx-auto lg:p-[3rem] p-1">
          <h1 className="lg:font-[800] font-[700] lg:text-6xl text-3xl lg:leading-tight text-slate-800 mb-8">Unlock Your Potential with Right Mentor</h1>
          <p className="text-lg md:text-xl mb-10 px-4 md:px-10 font-thin">
            We nurture talent for the future of technology, helping individuals unlock their potential while supporting organizations in their growth.
          </p>
          <div className='flex flex-col xs:flex-row justify-center xs:gap-6 gap-2 lg:mb-20 mb-10'>
            <button 
              className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-16 py-3 rounded cursor-pointer font-semibold hover:from-purple-700 hover:to-indigo-600 transition duration-300"
              onClick={() => navigate('/auth/choose-role')}
            >
              Signup
            </button>
            <button 
              className="bg-white text-black border border-slate-950 px-6 py-2 rounded cursor-pointer font-semibold"
              onClick={() => navigate('/auth/choose-role')}
            >
              Become a Mentor
            </button>
          </div>
          <p className="text-sm lg:text-xl mb-8 px-4 md:px-16 font-thin">
            Your Journey to Success Begins with the Right Mentor.
          </p>
        </div>
      </main>
    </div>
  );
};
export default Welcome;
