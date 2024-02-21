import React from 'react'
import Image from 'next/image'
import AccordionAbout from './AccordionAbout'

const About = () => {
  return (
    <div id="about" className='flex flex-col items-center justify-center py-2'>
        <h2 className='text-6xl pb-4'>A propos de moi</h2>
        <div className='w-full flex flex-col lg:flex-row items-center'>
            <div className='w-1/2 flex justify-end md:justify-center'>
                <Image src="/image/Photo_de_profil_Jean-Jacques_Valmont.jpg" alt="Photo_de_profil_Jean-Jacques_Valmont" width={400} height={400}/>  
            </div>
            <div className='w-full flex items-center justify-start md:justify-center pr-2'>
              <AccordionAbout />
            </div>
        </div>
    </div>
  )
}

export default About