import React from 'react'
import { FaMessage } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const Contact = () => {
  return (
    <div>
      <h2 className="text-6xl pb-4 text-center">Contact</h2>
      <div className='flex justify-center pb-4'>
        <FaMessage className='text-4xl'/>
        <p className='pl-2'>Par message</p>
      </div>
      <div className='flex flex-col items-center justify-center pb-4'>
        <div className='flex'>
          <div className='pb-4 px-2'>
            <p>Prénom</p>
            <Input type="text" placeholder="Prénom"/>
          </div>
          <div className='pb-4 px-2'>
            <p>Nom</p>
            <Input type="text" placeholder="Nom"/>
          </div>
        </div>
        <div className='w-[33rem] pb-4'>
            <p>Email</p>
            <Input type="email" placeholder="Email"/>
        </div>
        <div className='w-[33rem] pb-4'>
            <p>Votre message</p>
            <Textarea placeholder="Type your message here." />
        </div>
        
      </div>
      <div className='flex justify-center items-center pb-4'>
        <div className='flex flex-col items-center px-2'>
          <FaPhoneAlt className='text-4xl'/>
          <p>Par téléphone</p>
          <p>07 88 63 32 03</p>
        </div>
        <div className='flex flex-col items-center px-2'>
          <IoMailSharp className='text-4xl'/>
          <p>Par mail</p>
          <p>jeanjacquesvalmont@gmail.com</p>
        </div>
        <div className='flex flex-col items-center px-2'>
          <FaLinkedin className='text-4xl'/>
          <p>Par Linkedin</p>
        </div>
      </div>
    </div>
  )
}

export default Contact