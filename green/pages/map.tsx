import React from 'react'
  
export function dashboardMenu(){
  <div>
    <h1>hello world</h1>
  </div>
}

export default function map() {
  return (
    <div>
      <dashboardMenu />
      <div className='flex flex-col bg-main-green-200 shadow-lg h-[100vh] w-[10vw] text-white justify-between'>
        <div className='flex flex-row items-center'>
          <img src="GreenLogo.jpg" alt="GreenLogo" className='w-[40%] align-top'/>
        </div>

        <div className='flex flex-col '>
          <button className='w-full hover:bg-main-green-100 hover:w-[120%] duration-150 h-10'>
            Map
          </button>
          <button className='w-full hover:bg-main-green-100 hover:w-[120%] duration-150 h-10'>
            Cars
          </button>
        </div>

        <button className='w-full hover:bg-red-800 duration-150 h-10'>Log Out</button>
      </div>
    </div>
  )
}