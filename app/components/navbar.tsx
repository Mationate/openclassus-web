"use client"
import { useState } from 'react';
import Logo from '@/public/assets/Logo.svg';
import User from '@/public/assets/User.svg';
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
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" />

        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <p className="text-[#36485C] font-medium" key={index}>
              {item.name}
            </p>
          ))}
        </div>
      </div>

      <div className="flex gap-x-5">
        <p className="hidden lg:block font-medium text-[#36485C] pr-[56px]">
          Open an Account
        </p>

        <div className="flex items-center gap-x-2">
          <Image src={User} alt="User Profile" />
          <span className="hidden font-medium text-[#36485C] lg:block">
            Sign in
          </span>
        </div>

        {/* Botón del menú para mobile */}
        <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
          <Image src={isMenuOpen ? Close : Menu} alt="Menu Button" />
        </button>
      </div>

      {/* Menú desplegable para mobile */}
      {isMenuOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-white shadow-lg lg:hidden">
          <div className="flex flex-col items-start px-8 py-4 gap-y-4">
            {navLinks.map((item, index) => (
              <p className="text-[#36485C] font-medium" key={index}>
                {item.name}
              </p>
            ))}
            <p className="font-medium text-[#36485C]">
              Open an Account
            </p>
            <p className="font-medium text-[#36485C]">
              Sign in
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};
