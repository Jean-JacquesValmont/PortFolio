"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa';

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import DrawerPage from './DrawerPage'
import ModalPage from './ModalPage';
import UseBadge from '@/custom/UseBadge';

type TechnologyItem = {
    techno : string
}

type ChallengeItem = {
    challenge : string
}

type ResolutionItem = {
    resolution : string
}

type ProjectItem = {
    title: string
    image: string
    alt: string
    summarise: string
    technology: TechnologyItem[]
    vercel: string
    github: string
    text: string
    challenge: ChallengeItem[]
    resolution: ResolutionItem[]
}

type CardProjectProps = {
    key: string | number
    item: ProjectItem
}

const CardProject = (props: CardProjectProps) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    
  return (
    <Card className={`w-[250px] sm:w-[330px] flex flex-col items-center ${modalIsOpen ? "" : "hover:scale-105 transition-transform"}`}>
        <CardHeader className='w-full border-b-2 border-black flex items-center p-0'>
            <Image src={props.item.image} alt={props.item.alt} width={500} height={500}/> 
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center">
            <CardTitle className='text-2xl text-center pb-4 md:text-4xl'>{props.item.title}</CardTitle>
            <CardDescription className='text-md pb-4 text-center'>{props.item.summarise}</CardDescription>
            <UseBadge technologies={props.item.technology}/>
        </CardContent>
        <CardFooter className='flex justify-between py-4'>
            <Button id="openModalBtn" className="hover:bg-black hover:text-white mx-2 hidden md:block" variant="outline" onClick={openModal}>
                En savoir plus
            </Button>
            <ModalPage key={props.item.title} isOpen={modalIsOpen} closeModal={closeModal} item={props.item} />
            <DrawerPage key={props.item.title} item={props.item}/>
            <a href={props.item.vercel} target="_blank" rel="noopener noreferrer">
                <Button className="hover:bg-black hover:text-white" variant="outline">Site web</Button>
            </a>
            <a href={props.item.github} target="_blank" rel="noopener noreferrer">
                <FaGithub cursor="pointer" className='text-4xl ml-2 hover:text-blue-800' />
            </a>
        </CardFooter>
    </Card>
  )
}

export default CardProject