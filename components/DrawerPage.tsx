import React from 'react'
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
  

const DrawerPage = () => {
  return (
    <Drawer>
        <DrawerTrigger><Button className='mx-2 hover:bg-black hover:text-white' variant="outline">En savoir plus</Button></DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose>
                        <Button className='mx-2 hover:bg-black hover:text-white' variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
    </Drawer>

  )
}

export default DrawerPage