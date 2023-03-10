import type { NextPage } from 'next'
import LoginForm from "../components/auth/loginForm"


const Home: NextPage = () => {
  return (
      <div className='flex justify-center items-center w-screen h-screen bg-gray-300 overflow-hidden'>
          <img src="Polestar_2.jpg" alt="Background" className='z-10 absolute w-[100%] h-[100%]' />
          <div className='flex items-center w-[100%] h-[100%] flex-col z-20 bg-black bg-opacity-30'>
            <img src="GreenMobility_Logo_Green_Grey.webp" className='w-[30%] mt-[7%]'/>
            
            <LoginForm/> 

          </div>

      </div>

  )
}

export default Home
