import React from 'react';
import type { NextPage } from 'next';
import Navbar from "../components/navbar";
import CarMap from "../components/carMap";



const Cars: NextPage = () => {
  return (
    <div className='flex flex-row'> 
        <Navbar />
        <div className='w-full h-screen'>
            <CarMap />
        </div>
    </div>
  )
}

export default Cars;
