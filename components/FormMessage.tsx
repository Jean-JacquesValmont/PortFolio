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
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col items-center justify-center pb-4'>
            <div className='flex w-full sm:w-[33rem]'>
                <div className='w-full sm:w-[33rem] pb-4 px-2'>
                    <p>Prénom</p>
                    <Input {...register("firstName")} type="text" placeholder="Prénom"/>
                </div>
                <div className='w-full sm:w-[33rem] pb-4 px-2'>
                    <p>Nom</p>
                    <Input {...register("lastName")} type="text" placeholder="Nom"/>
                </div>
            </div>
            <div className='w-full sm:w-[33rem] p-2 sm:pb-4'>
                <p>Email</p>
                <Input {...register("email")} type="email" placeholder="Email"/>
            </div>
            <div className='w-full sm:w-[33rem] p-2 sm:pb-4'>
                <p>Votre message</p>
                <Textarea {...register("message")} placeholder="Ecrivez votre message ici." />
            </div>
            <Button className="hover:bg-black hover:text-white" variant="outline" type="submit">Envoyer</Button>
        </div>
    </form>
  )
}

export default FormMessage
