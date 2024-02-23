import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const ContactBand = () => {
  return (
    <div className='flex flex-row justify-center items-center pb-16 gap-32'>
        <div className='flex flex-col items-center py-2 sm:px-2'>
          <a href="tel:0788333203" target="_blank" rel="noopener noreferrer">
            <FaPhoneAlt className='text-4xl hover:text-blue-800'/>
          </a>
        </div>
        <div className='flex flex-col items-center py-2 sm:px-2'>
          <a href="mailto:jeanjacquesvalmont@gmail.com" target="_blank" rel="noopener noreferrer">
            <IoMailSharp className='text-4xl hover:text-blue-800'/>
          </a>
        </div>
        <div className='flex flex-col items-center py-2 sm:px-2'>
          <a href="https://www.linkedin.com/in/jean-jacques-valmont-131630130/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='text-4xl hover:text-blue-800'/>
          </a>
        </div>
      </div>
  )
}

export default ContactBand