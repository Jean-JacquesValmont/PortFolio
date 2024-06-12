"use client"
import React, { useState, useEffect } from 'react';

const Hero = () => {

  return (
    <div id="hero" className="h-full sm:h-[30rem] flex flex-col items-center justify-center py-2 transition-opacity">
        <p className='text-2xl sm:text-4xl text-center px-4'>Bienvenue sur le portfolio de </p>
        <h1 className='text-2xl sm:text-6xl text-center font-bold p-4'>Jean-Jacques Valmont</h1>
        <p className='w-full sm:w-1/2 text-2xl sm:text-4xl text-center px-4'> Développeur front-end React en recherche d&apos;alternance pour septembre 2024 sur Paris</p>
    </div>
  )
}

export default Hero