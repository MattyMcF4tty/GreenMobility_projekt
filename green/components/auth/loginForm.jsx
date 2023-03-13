import React from "react";

const LoginForm = () => {
    return (
    <form className='w-[22rem] flex-col flex justify-center items-center '>
    <div className='bg-white w-[100%] p-6 rounded shadow-sm '>
      <div className='flex items-center justify-center mb-4'>
        <img src="I7BmDtZqZgXf.png" className="h-32" />
      </div>
      <label htmlFor="text-gray-700">Email:</label>
      <input className="w-full py-1 bg-gray-100 px--1 outline-none mb-4 focus:bg-gray-200 hover:bg-gray-200 rounded pl-1" type="Email" />
      <label htmlFor="text-gray-700">Password:</label>
      <input className='w-full py-1 bg-gray-100  px--1 outline-none mb-4  focus:bg-gray-200 hover:bg-gray-200 rounded-md pl-1' type="Password" />
      <div className="flex flex-row mb-5">
      <input id='remember' className='' type={'checkbox'} />
      <label htmlFor="remember"> Remember me</label>
      <a href="/register" className="ml-32 hover:text-main-green-100 hover:underline">
      Register
      </a>
      </div>
      <button className='bg-main-green-100 w-full py-1 rounded text-white' type='submit'>Login</button>
    </div>
  </form>)
}
export default LoginForm;