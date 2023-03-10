import React from 'react'
  
export default function main() {
  return (
    <div>
      <div className='flex flex-col bg-main-green-200 shadow-lg h-[100vh] w-[10vw] text-white'>
        <img src="GreenLogo.jpg" alt="GreenLogo" className='w-[50%] align-top'/>

        <div className=' flex justify-center flex-col align-middle border-2 border-blue-400 h-full'>
          <button className='w-full hover:bg-main-green-100 hover:w-[120%] duration-150 h-10'>
            Map
          </button>
          <button className='w-full hover:bg-main-green-100 hover:w-[120%] duration-150 h-10'>
            Cars
          </button>
        </div>

        <button className='w-full hover:bg-red-800 duration-150 border-2 border-green-400'>Log Out</button>
      </div>
    </div>
  )
}