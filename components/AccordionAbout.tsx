import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const AccordionAbout = () => {
  return (
    <Accordion type="single" collapsible className="w-full md:w-[50rem] lg:w-[40rem] xl:w-[50rem] 2xl:w-[65rem]">
      <AccordionItem value="item-1">
        <AccordionTrigger className='text-2xl'>Présentation</AccordionTrigger>
        <AccordionContent>
        Bonjour, je me présente, Jean-Jacques Valmont, actuellement en reconversion pour devenir développeur front-end.
        Après avoir obtenu une licence en Environnement et occupé un poste en tant qu&apos;Animateur social et numérique, 
        je suis actuellement en formation de Développeur web à Ada Tech School.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className='text-2xl'>Pourquoi avoir voulue devenir développeur?</AccordionTrigger>
        <AccordionContent>
        Lors d&apos;un atelier de création de jeux vidéo pour les enfants que j&apos;avais organisé en tant qu&apos;animateur,
        je me suis rendu compte que c&apos;était moi qui prenais davantage de plaisir à créer en codant qu&apos;eux.
        C&apos;est à partir de là que j&apos;ai commencé à m&apos;auto-former, puis j&apos;ai intégré une formation pour acquérir les bases de ce métier.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionAbout



  