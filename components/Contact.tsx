import React from 'react'
import { FaMessage } from "react-icons/fa6";
import FormMessage from './FormMessage';
import ContactBand from './ContactBand';

const Contact = () => {
  return (
    <div id="contact">
      <h2 className="text-6xl pb-4 text-center">Contact</h2>
      <div className='flex justify-center pb-4'>
        <FaMessage className='text-4xl'/>
        <p className='pl-2'>Par message</p>
      </div>
      <FormMessage />
      <ContactBand />
    </div>
  )
}

export default Contact