import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Badge } from './ui/badge'

type TechnologyItem = {
    techno : string
}

type ChallengeItem = {
    challenge : string
}

type ResolutionItem = {
    resolution : string
}

type DrawerItem = {
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

type DrawerPageProps = {
    key: string | number
    item: DrawerItem
}

const DrawerPage = (props : DrawerPageProps) => {

    const badges = props.item.technology.map((element : TechnologyItem) => (
        <Badge key={element.techno} variant="outline">
            {element.techno}
        </Badge>
    ));

    const challenges = props.item.challenge.map((element : ChallengeItem) => (
        <li key={element.challenge}>{element.challenge}</li>
    ));

    const resolutions = props.item.resolution.map((element : ResolutionItem) => (
        <li key={element.resolution}>{element.resolution}</li>
    ));

  return (
    <Drawer>
        <DrawerTrigger className='border rounded-lg p-2 mx-2 text-sm hover:bg-black hover:text-white md:hidden'>En savoir plus</DrawerTrigger>
        <DrawerContent className=''>
            <DrawerHeader className='flex flex-col justify-center items-center'>
                <DrawerTitle className='text-6xl'>{props.item.title}</DrawerTitle>
                <Image className='mb-2 border-2 border-black' src={props.item.image} alt={props.item.alt} width={1000} height={1000}/>
                <div>{badges}</div>
                <h2 className='text-2xl py-2'>Objectif</h2>
                <DrawerDescription className='w-full sm:w-[50rem] text-center'>{props.item.text}</DrawerDescription>
                <h2 className='text-2xl py-2'>Les difficultées rencontrées</h2>
                <DrawerDescription className='w-full sm:w-[50rem] text-center'>
                    <ul className=''>
                        {challenges}
                    </ul>
                </DrawerDescription>
                <h2 className='text-2xl py-2'>Résolution</h2>
                <DrawerDescription className='w-full sm:w-[50rem] text-center'>
                    <ul className=''>
                        {resolutions}
                    </ul>
                </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
                <DrawerClose>
                    <Button className='mx-2 hover:bg-black hover:text-white' variant="outline">Fermer la page</Button>
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>

  )
}

export default DrawerPage