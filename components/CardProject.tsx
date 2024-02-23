import React from 'react'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa';

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import DrawerPage from './DrawerPage'

type TechnologyItem = {
    techno : string
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
}

type CardProjectProps = {
    key: string | number
    item: ProjectItem
}

const CardProject = (props: CardProjectProps) => {

    const badges = props.item.technology.map((element : TechnologyItem) => (
        <Badge key={element.techno} variant="outline">
            {element.techno}
        </Badge>
    ));
    
  return (
    <Card className="w-[330px] flex flex-col items-center hover:scale-105 transition-transform">
        <CardHeader className='w-full border-b-2 border-black flex items-center p-0'>
            <Image src={props.item.image} alt={props.item.alt} width={500} height={500}/> 
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center">
            <CardTitle className='text-2xl pb-4 md:text-4xl'>{props.item.title}</CardTitle>
            <CardDescription className='text-md pb-4 text-center'>{props.item.summarise}</CardDescription>
            <div>{badges}</div>
        </CardContent>
        <CardFooter className='py-4'>
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