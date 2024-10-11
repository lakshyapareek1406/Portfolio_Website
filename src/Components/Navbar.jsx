import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'Skills', path: '/skill' },
    { name: 'About', path: '/about' },
    { name: 'Project', path: '/project' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className='bg-black h-[100px] text-gray-400 max-w-[1200px] mx-auto flex justify-between items-center'>
      <h1 className='text-3xl font-bold primary ml-4 font-mono'><a href='/home'>LAKSHYA PAREEK</a></h1>
      
      <ul className='hidden md:flex'>
        {navLinks.map((link) => (
          <li 
            key={link.name} 
            className={`p-5 hover:text-blue-600 ${location.pathname === link.path ? 'text-blue-600 border-b-2 border-blue-600 ' : ''}`}
          >
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed h-full left-0 top-0 w-[60%] bg-[#202121] z-10 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className='text-3xl font-bold primary m-4'>Lakshya Pareek</h1>
        <ul className='pt-8 text-2xl'>
          {navLinks.map((link) => (
            <li 
              key={link.name} 
              className={`p-5 hover:text-blue-600 ${location.pathname === link.path ? 'text-blue-600' : ''}`}
            >
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};  

export default Navbar;
