"use client"
import { useState } from 'react';
import Logo from '@/public/assets/Logo.svg';
import Menu from '@/public/assets/Menu.svg';
import Close from '@/public/assets/X.svg'; // Icono para cerrar el menú
import Image from 'next/image';

const navLinks = [
  { name: 'Features' },
  { name: 'Pricing' },
  { name: 'Enterprise' },
  { name: 'Careers' },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-zinc-900 w-full flex items-center justify-between py-[16px] px-6">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" className='bg-amber-400' />

        {/* Links de navegación para pantallas grandes */}
        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <p className="text-amber-400 font-medium" key={index}>
              {item.name}
            </p>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-x-5">

        {/* Botón del menú para móvil */}
        <button 
          onClick={toggleMenu} 
          className="lg:hidden focus:outline-none text">  {/* Color aplicado aquí */}
          <Image src={isMenuOpen ? Close : Menu} alt="Menu Button" />
        </button>
      </div>

      {/* Menú desplegable para mobile */}
      {isMenuOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-zinc-900 lg:hidden">
          <div className="flex flex-col items-start px-8 py-4 gap-y-4">
            {navLinks.map((item, index) => (
              <p className="text-amber-400 font-medium" key={index}>
                {item.name}
              </p>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
