import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col border-2 border-green-500'>
      <div className=' flex flex-col items-center bg-gray-200 h-[30vh] w-full bg-cover bg-center'>
        <img src="GreenMobility_Logo_Green_Grey.webp" alt="Green" className='w-[30%]' />
        <h1 className='text-2xl'>
          Velkommen til GreenMobility
        </h1>
        <button className='mt-[30vh]'>
          Login
        </button>
        
      </div>

    </div>
  )
}

export default Home
