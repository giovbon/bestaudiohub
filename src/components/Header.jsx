import React from 'react'
import Logo from '/best-audio-hub-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <div className="relative">
      <header className="flex items-center justify-between h-16 py-10 px-6 bg-white">
        <div className="w-[105px] md:w-[125px] h-[120px]">
          <a href="#"> 
            <a href="/"> <img src={Logo} alt="Logo" className="h-full w-full object-contain" />  </a>
          </a>
        </div>

        <div className="flex items-center gap-4 md:ml-auto">
          <nav className="hidden md:flex md:flex-row md:justify-center space-x-6">
            <a href="#" className="text-gray-600 text-lg hover:underline">Home</a>
            <Link to="/blog" className="text-gray-600 text-lg hover:underline">Blog</Link>
            <Link to="/about" className="text-gray-600 text-lg hover:underline">About</Link>
            <Link to="/contact" className="text-gray-600 text-lg hover:underline">Contact</Link>
          </nav>

          <FontAwesomeIcon 
            icon={faMagnifyingGlass} 
            className="text-gray-600 text-2xl hidden md:block" 
          />
          <button 
            onClick={toggleMenu} 
            className="text-gray-600 flex md:hidden"
          >
            <FontAwesomeIcon 
              icon={isMenuOpen ? faTimes : faBars} 
              className="text-2xl" 
            />
          </button>
        </div>
      </header>

      <div className={`fixed top-16 left-0 w-full bg-white shadow-md md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col p-4">
          <a href="#" className="text-gray-600 text-lg hover:underline py-2">Home</a>
          <a href="#" className="text-gray-600 text-lg hover:underline py-2">Blog</a>
          <a href="#" className="text-gray-600 text-lg hover:underline py-2">About</a>
          <a href="#" className="text-gray-600 text-lg hover:underline py-2">Contact</a>
        </nav>
      </div>
    </div>
    <hr className="border-t border-[#dee0e2]" />
    </>
  );
};


export default Header;