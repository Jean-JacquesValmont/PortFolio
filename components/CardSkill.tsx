import * as React from "react"
import Image from 'next/image'

import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card"

type SkillItem = {
  title: string
  image: string
  alt: string
}

type CardSkillProps ={
  key: string | number
  item: SkillItem
}

export function CardSkill(props: CardSkillProps) {
  return (
    <Card className="w-[150px]">
      <CardContent className="flex flex-col justify-center items-center">
        <Image src={props.item.image} alt={props.item.alt} width={300} height={300}/>
        <CardTitle className="pt-2">{props.item.title}</CardTitle>
      </CardContent>
    </Card>
  )
}