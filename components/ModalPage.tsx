import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

type TechnologyItem = {
    techno : string
}

type CardItem = {
    title: string
    image: string
    alt: string
    summarise: string
    technology: TechnologyItem[]
    vercel: string
    github: string
    text: string
}

type CardProjectProps = {
    key: string | number
    isOpen: any
    closeModal: any
    item: CardItem
}

const ModalPage = ({ isOpen, closeModal, item } : CardProjectProps)  => {

    const badges = item.technology.map((element : TechnologyItem) => (
        <Badge key={element.techno} variant="outline">
            {element.techno}
        </Badge>
    ));

    return (
        <div className={`modal ${isOpen ? 'block' : 'hidden'} fixed inset-0 h-screen w-screen z-50 bg-black bg-opacity-50 flex items-center justify-center`}>
          <div className="flex flex-col justify-center items-center modal-content bg-white p-6 rounded-md">
            <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
            <Image className='mb-2 border-2 border-black' src={item.image} alt={item.alt} width={1000} height={1000}/>
            <div>{badges}</div>
            <h2 className='text-2xl py-8'>Objectif</h2>
            <p className='w-full sm:w-[50rem] text-center'>{item.text}</p>
            <Button className="mt-8 mb-2 hover:bg-black hover:text-white" variant="outline" onClick={closeModal}>
                Fermer la page
            </Button>
          </div>
        </div>
      );
    };

export default ModalPage