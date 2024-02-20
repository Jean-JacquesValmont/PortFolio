import React from 'react'
import Image from 'next/image'

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

const CardProject = (props: any) => {

    const badges = props.item.technology.map((element : any) => (
        <Badge key={element.techno} variant="outline">
            {element.techno}
        </Badge>
    ));
  return (
    <Card className="w-[300px] flex flex-col items-center hover:scale-105 transition-transform">
        <CardHeader className='w-full border-b-2 border-black flex items-center p-0'>
            <Image src={props.item.image} alt={props.item.alt} width={500} height={500}/> 
        </CardHeader>
        <CardContent className="flex flex-col items-center">
            <CardTitle className='text-4xl pb-4'>{props.item.title}</CardTitle>
            <CardDescription className='text-md pb-4'>{props.item.text}</CardDescription>
            <div>
                {badges}
            </div>
        </CardContent>
        <CardFooter className='py-4'>
            <DrawerPage />
            <a href={props.item.link} target="_blank" rel="noopener noreferrer"><Button className="hover:bg-black hover:text-white" variant="outline">Site web</Button></a>
        </CardFooter>
    </Card>
  )
}

export default CardProject