import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id="about" className='flex flex-col items-center justify-center py-2'>
        <h2 className='text-6xl pb-4'>Présentation</h2>
        <div className='flex'>
            <div className='flex basis-1/3 justify-center'>
                <Image src="/image/Photo_de_profil_Jean-Jacques_Valmont.jpg" alt="Photo_de_profil_Jean-Jacques_Valmont" width={400} height={400}/>  
            </div>
            <div className='w-[64rem] flex flex-col gap-4 basis-2/3'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatum at libero facilis, modi quaerat corporis quos quas dolorem ratione dolores minima repellat nulla ab sed eius inventore sint numquam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatum at libero facilis, modi quaerat corporis quos quas dolorem ratione dolores minima repellat nulla ab sed eius inventore sint numquam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatum at libero facilis, modi quaerat corporis quos quas dolorem ratione dolores minima repellat nulla ab sed eius inventore sint numquam.</p>
            </div>
        </div>
    </div>
  )
}

export default About