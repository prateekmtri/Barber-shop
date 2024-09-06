"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className='bg-[#191c24] h-20 md:h-28 w-full flex items-center justify-between p-4 md:px-10'>
        <h1 className='text-2xl md:text-4xl text-red-600 font-semibold tracking-tighter'>HAIRCUT</h1>
        
        {/* Desktop Menu */}
        <div className='hidden md:flex text-sm md:text-lg text-[#6C7293] gap-4 md:gap-6 font-normal'>
          <Link href='/' className='hover:text-red-700 cursor-pointer'>
            HOME
          </Link>
          <Link href='/Pagen/about' className='hover:text-red-700 cursor-pointer'>
            ABOUT
          </Link>

          <Link href='/Pagen/service'>
          <p className='hover:text-red-700 cursor-pointer'>SERVICE</p>
          </Link>
          <div className='relative'>
            <p
              className='hover:text-red-700 cursor-pointer'
              onClick={toggleSubMenu}
            >
              PAGES
            </p>
            {showSubMenu && (
              <div className='absolute left-0  bg-white text-black flex gap-4 h-8 w-72 font-semibold text-base'>
                <Link href='/Pagen/barber' className='hover:text-red-700 text-[#6C7293] cursor-pointer'>
                  Barber
                </Link>
                <Link href='/Pagen/price' className='hover:text-red-700 text-[#6C7293] cursor-pointer'>
                  Price
                </Link>
                <Link href='/Pagen/service' className='hover:text-red-700 text-[#6C7293] cursor-pointer'>
                  Service
                </Link>
                <Link href='/Pagen/working' className='hover:text-red-700 text-[#6C7293] cursor-pointer'>
                  Working
                </Link>
              </div>
            )}
          </div>

          <Link href='/Pagen/Mainabout'>
          <p className='hover:text-red-700 cursor-pointer'>CONTACT</p>
          </Link>

         
        </div>

        {/* Appointment Button */}
        <div className='bg-red-700 h-8 w-28 md:h-10 md:w-40 flex items-center justify-center hover:bg-red-900 cursor-pointer'>
          <h1 className='text-sm md:text-base'>Appointment</h1>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center'>
          <button onClick={toggleMenu} className='text-white'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-[#191c24] text-[#6C7293] p-4'>
          <Link href='/'>
          <p className='hover:text-red-700 cursor-pointer py-2'>HOME</p>
          </Link>
         <Link href='/Pagen/about'>
         <p className='hover:text-red-700 cursor-pointer py-2'>ABOUT</p>
         </Link>

         <Link href='/Pagen/service'>

          <p className='hover:text-red-700 cursor-pointer py-2'>SERVICE</p>
          </Link>
          <div>
            <p
              className='hover:text-red-700 cursor-pointer py-2'
              onClick={toggleSubMenu}
            >
              PAGES
            </p>
            {showSubMenu && (
              <div className='flex flex-col space-y-2'>
                <Link href='/Pagen/barber' className='hover:text-red-700 cursor-pointer'>
                  Barber
                </Link>
                <Link href='/Pagen/price' className='hover:text-red-700 cursor-pointer'>
                  Price
                </Link>
                <Link href='/Pagen/service' className='hover:text-red-700 cursor-pointer'>
                  Service
                </Link>
                <Link href='/Pagen/working' className='hover:text-red-700 cursor-pointer'>
                  Working
                </Link>
              </div>
            )}
          </div>
          <Link href='/Pagen/Mainabout'>
          <p className='hover:text-red-700 cursor-pointer py-2'>CONTACT</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Page;
