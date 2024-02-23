"use client"
import React, { useState, useEffect } from 'react';

const Hero = () => {

  return (
    <div id="hero" className="h-full sm:h-[30rem] flex flex-col items-center justify-center py-2 transition-opacity">
        <p className='text-4xl text-center'>Bienvenue sur le portfolio de </p>
        <h1 className='text-6xl text-center font-bold p-4'>Jean-Jacques Valmont</h1>
        <p className='w-full sm:w-1/2 text-4xl text-center'> Développeur front-end React en recherche d&apos;alternance pour mars 2024 sur Paris</p>
    </div>
  )
}

export default Hero