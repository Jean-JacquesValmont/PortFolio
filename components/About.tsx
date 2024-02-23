import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id="about" className='flex flex-col items-center justify-center sm:mx-16 py-2'>
        <h2 className='text-4xl sm:text-6xl text-center mt-16 mb-8 px-4 pb-4'>A propos de moi</h2>
        <div className='flex flex-col gap-16 items-center justify-center xl:flex-row'>
            <div className='flex md:justify-center'>
                <Image className="max-w-[1200px]" src="/image/Photo_de_profil_Jean-Jacques_Valmont.jpg" alt="Photo_de_profil_Jean-Jacques_Valmont" width={400} height={400}/>  
            </div>
            <div className='max-w-[900px] flex flex-col md:justify-center pr-2'>
              <div className='text-center sm:text-left px-16 py-4'>
                <h3 className='text-2xl pb-4'>Présentation</h3>
                <p>Bonjour, je me présente, Jean-Jacques Valmont, actuellement en reconversion pour devenir développeur front-end.
                  Après avoir obtenu une licence en Environnement et occupé un poste en tant qu&apos;Animateur social et numérique, 
                  je suis actuellement en formation de Développeur web à Ada Tech School.
                </p>
              </div>
              <div className='text-center sm:text-left px-16 py-4'>
                <h3 className='text-2xl pb-4'>Pourquoi avoir voulue devenir développeur?</h3>
                <p>Lors d&apos;un atelier de création de jeux vidéo pour les enfants que j&apos;avais organisé en tant qu&apos;animateur,
                  je me suis rendu compte que c&apos;était moi qui prenais davantage de plaisir à créer en codant qu&apos;eux.
                  C&apos;est à partir de là que j&apos;ai commencé à m&apos;auto-former, puis j&apos;ai intégré une formation pour acquérir les bases de ce métier.
                </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About