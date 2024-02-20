import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const ContactBand = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center pb-4'>
        <div className='flex flex-col items-center py-2 sm:px-2'>
          <FaPhoneAlt className='text-4xl'/>
          <p>Par téléphone</p>
          <p>07 88 63 32 03</p>
        </div>
        <div className='flex flex-col items-center py-2 sm:px-2'>
          <IoMailSharp className='text-4xl'/>
          <p>Par mail</p>
          <p>jeanjacquesvalmont@gmail.com</p>
        </div>
        <div className='flex flex-col items-center py-2 sm:px-2'>
            <FaLinkedin className='text-4xl'/>
            <a href="https://www.linkedin.com/in/jean-jacques-valmont-131630130/" target="_blank" rel="noopener noreferrer"><p>Par Linkedin</p></a>
        </div>
      </div>
  )
}

export default ContactBand