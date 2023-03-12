import React from "react";

const Navbar = () => {
    return(
        <nav className='flex flex-col bg-main-green-200 shadow-lg h-[100vh] w-[10vw] text-white justify-between z-20'>
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
      </nav>
    )
};

export default Navbar;