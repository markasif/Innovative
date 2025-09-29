"use client";

import React, { useState } from "react";
import { Menu, X } from 'lucide-react';
import Button from "../ui/buttons";


const Header = () => {
  const navLinks = ['Home', 'About Us', 'Services', 'Technology', 'Case Studies', 'Career', 'Contact Us'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-10 py-4 px-4 md:px-10 lg:px-20 bg-white/10  border-white/20">
      <div className="container mx-auto flex justify-end items-center">
        <div className="hidden lg:flex items-center">
            <nav className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link} href="#" className="text-[#1D1D1F] font-light hover:text-black transition-colors duration-300">
                  {link}
                </a>
              ))}
            </nav>
            <Button variant="solid" className="ml-8 bg-white text-black font-semibold py-2 px-5 rounded-md hover:bg-gray-200 transition-colors duration-300">
              Register
            </Button>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden mt-4 bg-black/50 backdrop-blur-md rounded-lg p-6">
            <nav className="flex flex-col items-center space-y-4">
                {navLinks.map((link) => (
                    <a key={link} href="#" className="text-gray-200 hover:text-white transition-colors duration-300">
                    {link}
                    </a>
                ))}
                <Button variant="solid" className="w-full mt-4 bg-white text-black font-semibold py-2 px-5 hover:bg-gray-200 transition-colors duration-300">
                    Register
                </Button>
            </nav>
        </div>
      )}
    </header>
  );
};

export default Header;