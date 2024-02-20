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
        <AccordionTrigger className='text-2xl'>Mon histoire</AccordionTrigger>
        <AccordionContent>
          Description text here.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className='text-2xl'>Pourquoi</AccordionTrigger>
        <AccordionContent>
        Description text here.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className='text-2xl'>Titre 3</AccordionTrigger>
        <AccordionContent>
        Description text here.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionAbout



  