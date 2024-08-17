import React from 'react';
import { FaBrain } from "react-icons/fa";
import { IoMdCreate } from 'react-icons/io';
import { IoBulbSharp } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";

function Dashboard({ sidebarVisible }) {
  return (
    <div className={`${sidebarVisible ? 'w-full md:w-4/5' : 'w-full'} flex flex-col items-center min-h-screen transition-all duration-300 ease-in-out`}>
      <div className='flex justify-between items-center w-full px-4'>
        <BiMenuAltLeft className='xs:invisible ml-[-1.3rem] size-[2rem] cursor-pointer' />
        <MdAccountCircle className='xs:invisible lg:visible mr-[-1.3rem] size-[2.3rem] cursor-pointer' />
      </div>
      <div className='mt-[-5rem] flex justify-center items-center h-screen'>
        <div className='text-white gap-3 max-w-2xl lg:grid-cols-4 lg:grid flex flex-wrap justify-center'>
          <p className='pt-2 pb-2 pl-3 cursor-pointer border rounded-md w-40 flex items-center'>
            <FaBrain className='text-red-500 mr-2' /> Improve Your Knowledge
          </p>
          <p className='pt-2 pb-2 pl-3 cursor-pointer border rounded-md w-40 flex items-center'>
            <IoMdCreate className='text-blue-500 mr-2' /> Write Anything
          </p>
          <p className='pt-2 pb-2 pl-3 cursor-pointer border rounded-md w-40 flex items-center'>
            <IoBulbSharp className='text-yellow-500 mr-2' /> Tips and Tricks
          </p>
          <p className='pt-2 pb-2 pl-3 cursor-pointer border rounded-md w-40 flex items-center'>
            <MdAccessTimeFilled className='text-green-500 mr-2' /> Time Managing For Productivity
          </p>
        </div>
      </div>
      <div className='mt-[-10rem] top-full sticky pb-5'>
        <div className='flex justify-center w-full relative'>
          <div className='relative xs:w-[20rem] sm:w-[35rem] md:w-[45rem] lg:w-[rem] w-full max-w-[em]'>
            <input
              className='outline-none pl-3 pr-10 w-full h-12 text-white bg-gray-600 rounded-3xl'
              autoFocus
              type="text"
              placeholder='Ask Anything You Need to Know'
            />
            <FaArrowAltCircleUp
              className='absolute top-1/2 right-3 transform -translate-y-1/2 text-white text-[1.8rem] cursor-pointer'
            />
          </div>
        </div>
        <p className='mt-2 font-Noto text-white text-center cursor-default'>
          This Chat AI Can Make Mistakes
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
