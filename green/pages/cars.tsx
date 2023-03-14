import React from 'react';
import type { NextPage } from 'next';
import Navbar from "../components/navbar";
import CarList from "../components/carList"



const Cars: NextPage = () => {
  return (
    <div className='flex flex-row'> 
        <Navbar />

        {/* Car list */}
        <div className='w-full h-screen'>
            <CarList />
        </div>
    </div>
  )
}

export default Cars;
