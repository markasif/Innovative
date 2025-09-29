"use client"; 

import React from 'react';
import { Linkedin, Mail, Instagram, MapPin, Facebook, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[url('/wall9.jpg')] bg-no-repeat bg-center bg-cover pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-full bg-white rounded-3xl shadow-xl transform rotate-45 opacity-80"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-3/4 h-full bg-white rounded-3xl shadow-lg transform rotate-45 opacity-90"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-white rounded-3xl shadow-2xl transform rotate-45"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-gray-700">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Location</h3>
            <p className="text-sm leading-relaxed">
              Puthanveettil Tower, Bypass Road<br />
              Perinthalmanna, KERALA - 679322
            </p>
            <div className="flex space-x-3 mt-6">
              <a href="#" className="p-2 bg-gray-200 rounded-md text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"><Linkedin size={16} /></a>
              <a href="#" className="p-2 bg-gray-200 rounded-md text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"><Mail size={16} /></a>
              <a href="#" className="p-2 bg-gray-200 rounded-md text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"><Instagram size={16} /></a>
              <a href="#" className="p-2 bg-gray-200 rounded-md text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"><MapPin size={16} /></a>
              <a href="#" className="p-2 bg-gray-200 rounded-md text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"><Facebook size={16} /></a>
              <a href="#" className="p-2 bg-gray-200 rounded-md text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"><Twitter size={16} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#1D1D1F]">IT Services</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-[#555555] hover:text-blue-500">IT Services</a></li>
              <li><a href="#" className="text-[#555555] hover:text-blue-500">Cyber Security</a></li>
              <li><a href="#" className="text-[#555555] hover:text-blue-500">Cloud Computing</a></li>
              <li><a href="#" className="text-[#555555] hover:text-blue-500">Managed IT</a></li>
              <li><a href="#" className="text-[#555555] hover:text-blue-500">IT Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#1D1D1F]">Important Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-[#555555] hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="text-[#555555] hover:text-blue-500">Meet Our Team</a></li>
              <li><a href="#" className="text-[#555555] hover:text-blue-500">Case Studies</a></li>
              <li><a href="#" className="text-[#555555] hover:text-blue-500">Location</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#1D1D1F]">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-[#555555] hover:text-blue-500">Forum Support</a></li>
              <li><a href="#" className="text-[#555555] hover:text-blue-500s">Help & FAQ</a></li>
              <li><a href="#" className="text-[#555555] hover:text-blue-500">Contact Us</a></li>
              <li><a href="#" className="text-[#555555] hover:text-blue-500">Cookies Policy</a></li>
            </ul>
          </div>

        </div>
      </div>
      
      {/* Sub-Footer */}
      <div className="relative max-w-7xl mx-auto px-8 mt-16 pt-6 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500 z-10">
        <p>© 2024 ABC PVT LTD. All Rights Reserved</p>
        <button 
          onClick={handleScrollToTop} 
          className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;