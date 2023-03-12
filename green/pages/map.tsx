import React from 'react'
import Navbar from "../components/navbar"
import CarMap from "../components/carMap"



export default function map() {
  return (
    <div className='flex flex-row'> 
      <Navbar />
      <CarMap />
    </div>
  )
}