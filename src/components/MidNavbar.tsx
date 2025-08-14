'use client';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const MidNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black backdrop-blur-sm text-white sticky top-0 z-50 w-full">
      {/* Desktop Layout - Figma Specifications */}
      <div 
        className="hidden md:flex justify-between mx-auto px-4 sm:px-6 lg:px-8 mx-w-7xl my-4"
        style={{
          height: '74px',
          paddingLeft: '211px',
          paddingRight: '211px',
          maxWidth: '1440px',
          width: '100%'
        }}
      >
        {/* Desktop Logo */}
        <div className="flex-shrink-0 w-[170px] h-[73px] flex items-center">
          <Image 
            src="/logo.png" 
            alt="Netzet logo" 
            width={170} 
            height={73}
            className="object-cover"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="flex items-start space-x-6 justify-start">
          <a 
            href="#" 
            className="hover:text-cyan-400 transition-colors duration-200 font-semibold font-[Figtree] text-[18px]"
            style={{ color: '#A9A9A9' }}
          >
            About us
          </a>
          <a 
            href="#" 
            className="hover:text-cyan-400 transition-colors duration-200 font-semibold text-[18px] font-[Figtree]"
            style={{ color: '#A9A9A9' }}
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex justify-between items-center px-4 py-4 h-[74px]">
        {/* Mobile Logo */}
        <div className="flex-shrink-0">
          <Image 
            src="/logo.png" 
            alt="Netzet logo" 
            width={100} 
            height={32}
            className="object-contain"
          />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="p-2 hover:bg-gray-800 rounded-md transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <div className="px-4 py-4 space-y-3">
            <a 
              href="#" 
              className="block py-3 px-2 hover:text-cyan-400 hover:bg-gray-800 rounded-md transition-colors duration-200 font-medium text-lg"
              style={{ color: '#A9A9A9' }}
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </a>
            <a 
              href="#" 
              className="block py-3 px-2 hover:text-cyan-400 hover:bg-gray-800 rounded-md transition-colors duration-200 font-medium text-lg"
              style={{ color: '#A9A9A9' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MidNavbar;