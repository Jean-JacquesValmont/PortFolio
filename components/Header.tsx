"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className='flex justify-center bg-black text-white text-lg p-2 sm:justify-between'>
      <div>
        {/* <Image src="/image/Photo_de_profil_Jean-Jacques_Valmont.jpg" alt="Photo_de_profil_Jean-Jacques_Valmont" width={50} height={50}/> */}
      </div>

      <div className='sm:hidden'>
        <button onClick={toggleMenu} className='text-2xl'>
          ☰
        </button>
      </div>

      <nav onClick={toggleMenu} className={`sm:flex sm:items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col gap-4 items-center sm:flex-row " >
          <li><a className='hover:text-yellow-300' href="#hero">Accueil</a></li>
          <li><a className='hover:text-yellow-300' href="#about">Présentation</a></li>
          <li><a className='hover:text-yellow-300' href="#skill">Compétences</a></li>
          <li><a className='hover:text-yellow-300' href="#project">Projets</a></li>
          <li><a className='hover:text-yellow-300' href="#contact">Contact</a></li>
          <a href="https://www.linkedin.com/in/jean-jacques-valmont-131630130/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='text-2xl hover:text-yellow-300' /></a>
          <a href="https://github.com/Jean-JacquesValmont" target="_blank" rel="noopener noreferrer"><FaGithub className='text-2xl hover:text-yellow-300' /></a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
