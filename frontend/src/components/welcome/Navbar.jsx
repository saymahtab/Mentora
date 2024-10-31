import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">
          MentorApp
        </Link>
        <div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mr-4"
            onClick={() => navigate('/auth/choose-role')}
          >
            Sign Up
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            onClick={() => navigate('/auth/login')}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

