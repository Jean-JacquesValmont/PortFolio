import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className='flex justify-between bg-black text-white text-lg p-2'>
        <div>
            {/* <Image src="/image/Photo_de_profil_Jean-Jacques_Valmont.jpg" alt="Photo_de_profil_Jean-Jacques_Valmont" width={50} height={50}/> */}
        </div>
        
        <div>
            <ul className='flex gap-4 items-center'>
                <li>Accueil</li>
                <li>Présentation</li>
                <li>Compétences</li>
                <li>Projets</li>
                <li>Contact</li>
                <FaLinkedin className='text-2xl'/>
                <FaGithub className='text-2xl'/>
            </ul>
        </div>
    </header>
    
  )
}

export default Header