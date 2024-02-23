"use client"
import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Header = () => {

  return (
    <header className='flex justify-center bg-black text-white text-lg p-4 sm:justify-end'>

      <nav className='hidden sm:flex sm:items-center sm:block'>
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
