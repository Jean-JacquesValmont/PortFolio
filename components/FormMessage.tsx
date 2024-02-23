"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from "@/components/ui/button"

const FormMessage = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data : any) => {
        console.log(data);
        // onSubmit={handleSubmit(onSubmit)}
    };

  return (
    <form action="https://formsubmit.co/bc4bbd2b00c779c8ea12f752a8e1a2fb"  method="POST">
        <div className='flex flex-col items-center justify-center pb-4 hidden'>
            <div className='flex w-full sm:w-[33rem]'>
                <div className='w-full sm:w-[33rem] pb-4 px-2'>
                    <p>Prénom*</p>
                    <Input {...register("firstName")} type="text" placeholder="Prénom" name="firstName" required/>
                </div>
                <div className='w-full sm:w-[33rem] pb-4 px-2'>
                    <p>Nom*</p>
                    <Input {...register("lastName")} type="text" placeholder="Nom" name="lastName" required/>
                </div>
            </div>
            <div className='w-full sm:w-[33rem] p-2 sm:pb-4'>
                <p>Email*</p>
                <Input {...register("email")} type="email" placeholder="Email" name="email" required/>
            </div>
            <div className='w-full sm:w-[33rem] p-2 sm:pb-4'>
                <p>Sujet*</p>
                <Input {...register("subject")} type="text" placeholder="Suject" name="subject" required/>
            </div>
            <div className='w-full sm:w-[33rem] p-2 sm:pb-4'>
                <p>Votre message*</p>
                <Textarea {...register("message")} placeholder="Ecrivez votre message ici." name="message" required/>
            </div>
            <Button className="hover:bg-black hover:text-white" variant="outline" type="submit">Envoyer</Button>
        </div>
    </form>
  )
}

export default FormMessage
