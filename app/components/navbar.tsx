"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Logo from '@/public/assets/Logo.svg';

const navLinks = [
  { name: 'Para quién', href: '#target' },
  { name: 'Qué hacer', href: '#map' },
  { name: 'Precios', href: '#pricing' },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-zinc-900 w-full flex items-center justify-between py-[16px] px-6 relative z-50">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" className='bg-amber-400' />

        {/* Links de navegación para pantallas grandes */}
        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-amber-400 font-medium hover:text-amber-300 transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Botón de menú para móviles con animación mejorada */}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-amber-400 hover:text-amber-300 transition-colors relative w-6 h-6"
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        <span className="sr-only">{isMenuOpen ? "Cerrar menú" : "Abrir menú"}</span>
        <Menu 
          size={24} 
          className={`absolute inset-0 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
          }`}
        />
        <X 
          size={24} 
          className={`absolute inset-0 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
          }`}
        />
      </button>

      {/* Sidebar para móviles */}
      <div
        className={`fixed top-[64px] right-0 h-full w-64 bg-zinc-900 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-start px-8 py-4 gap-y-4">
          {navLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-amber-400 font-medium hover:text-amber-300 transition-colors w-full text-left py-2"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};