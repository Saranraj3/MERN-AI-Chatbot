import React from 'react';
import { FaBrain } from "react-icons/fa";
import { IoMdCreate } from 'react-icons/io';
import { IoBulbSharp } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaArrowAltCircleUp } from "react-icons/fa";
function Dashboard() {
  return (
    <div className='justify-center items-center h-full'>
      <div className='mt-[13rem] text-white gap-3 max-w-[50rem] flex m-5'>
        <p className='pt-2 pb-2 pl-3 cursor-pointer border rounded-md w-[10rem]'><FaBrain className='text-red-500' /> Improve You're Knowledge</p>
        <p className='pt-2 pb-2 pl-3 cursor-pointer border rounded-md w-[10rem]'> <IoMdCreate className='text-blue-500' /> Write Anything</p>
        <p className='pt-2 pb-2 pl-3 cursor-pointer border rounded-md w-[10rem]'> <IoBulbSharp className='text-yellow-500' /> Tips and Tricks</p>
        <p className='pt-2 pb-2 pl-3 cursor-pointer border rounded-md w-[10rem]'> <MdAccessTimeFilled className='text-green-500' /> Time Managing For Productivity</p>
      </div>
      <div className='mt-[10rem]'>
        <input className='outline-none pl-4 w-[44rem] h-[3rem] text-white  bg-gray-600 rounded-3xl' autoFocus type="text" placeholder='Ask Anything You Need to Know' />
      </div>
      <div className='mt-[-2.6rem] mr-5 cursor-pointer flex justify-end'>
        <FaArrowAltCircleUp className='size-[2rem]' />
      </div>
      <p className='mt-5 font-Noto text-white text-center cursor-default'>This Chat AI Can Make Mistakes</p>
    </div>
  )
}

export default Dashboard