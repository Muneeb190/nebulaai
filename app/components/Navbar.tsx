'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="px-8 h-20 pt-2 fixed top-0 inset-x-0 w-full backdrop-blur-lg border-b border-[#0c1835] z-50">
      <div className="mx-auto w-full flex items-center justify-between h-16">
        <Image
          alt="nebulaai Logo"
          width={160}
          height={160}
          src="/nebulawidelogo.png"
          className="color-transparent"
          priority={false}
        />
        
        {/* Mobile Menu Button (Right side) */}
        <div className="flex items-center mr-2 mt-1 md:hidden">
          <button 
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu w-6 h-6"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-14">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-md py-2 hover:text-blue-700 transition-colors duration-200"
            href="https://dapp.nebulanetwork.ai/"
          >
            Marketplace
          </a>
          <a className="hover:text-blue-700 transition-colors duration-200 text-md py-2" href="#pricing">
            Pricing
          </a>
          <a className="hover:text-blue-700 transition-colors duration-200 text-md py-2" href="#how-it-works">
            How it works
          </a>
          <a className="hover:text-blue-700 transition-colors duration-200 text-md py-2" href="#roadmap">
            Roadmap
          </a>
          <a className="hover:text-blue-700 transition-colors duration-200 text-md py-2" href="#faq">
            FAQs
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-colors duration-200 text-md py-2"
            href="https://docs.nebulanetwork.ai/"
          >
            Docs
          </a>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex">
          <a
            className="whitespace-nowrap rounded-md text-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-700 shadow hover:bg-blue-700/90 h-9 bg-gradient-to-r from-blue-700 to-blue-800 text-white py-2 px-6 flex items-center"
            href="https://dapp.nebulanetwork.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Launch App
          </a>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black opacity-90 backdrop-blur-lg border rounded-2xl border-[#1c4fb4]">
          <div className="flex flex-col text-center py-4 px-4 space-y-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg py-3 px-4 hover:text-blue-700 font-semibold transition-colors duration-200"
              href="https://dapp.nebulanetwork.ai/"
              onClick={toggleMenu}
            >
              Marketplace
            </a>
            <a 
              className="hover:text-blue-700 font-semibold transition-colors duration-200 text-lg py-3 px-4" 
              href="#pricing"
              onClick={toggleMenu}
            >
              Pricing
            </a>
            <a 
              className="hover:text-blue-700 font-semibold transition-colors duration-200 text-lg py-3 px-4" 
              href="#how-it-works"
              onClick={toggleMenu}
            >
              How it works
            </a>
            <a 
              className="hover:text-blue-700 font-semibold transition-colors duration-200 text-lg py-3 px-4" 
              href="#roadmap"
              onClick={toggleMenu}
            >
              Roadmap
            </a>
            <a 
              className="hover:text-blue-700 font-semibold transition-colors duration-200 text-lg py-3 px-4" 
              href="#faq"
              onClick={toggleMenu}
            >
              FAQs
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 font-semibold transition-colors duration-200 text-lg py-3 px-4"
              href="https://docs.nebulanetwork.ai/"
              onClick={toggleMenu}
            >
              Docs
            </a>
            <a
              className="whitespace-nowrap rounded-md text-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-700 shadow hover:bg-blue-700/90 h-12 bg-gradient-to-r from-blue-700 to-blue-800 text-white py-3 px-8 flex items-center justify-center mt-2"
              href="https://dapp.nebulanetwork.ai/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              Launch App
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;