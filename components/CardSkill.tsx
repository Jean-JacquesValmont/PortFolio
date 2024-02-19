import * as React from "react"
import Image from 'next/image'

import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card"
 
export function CardSkill(props: any) {
  return (
    <Card className="w-[150px]">
      <CardContent className="flex flex-col justify-center items-center">
        <Image src={props.item.image} alt={props.item.alt} width={300} height={300}/>
        <CardTitle className="pt-2">{props.item.title}</CardTitle>
      </CardContent>
    </Card>
  )
}