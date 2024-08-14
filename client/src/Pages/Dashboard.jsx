import React, { useState } from 'react';
import { FaBrain } from "react-icons/fa";
import { IoMdCreate } from 'react-icons/io';
import { IoBulbSharp } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";

function Dashboard({ sidebarVisible }) {
  return (
    <div className={`${sidebarVisible ? 'w-4/5' : 'w-full'} flex flex-col items-center justify-center h-full`}>
      <div className='invisible flex justify-start ml-[-7rem]'>
        <BiMenuAltLeft className='size-[2rem]' />
      </div>
      <div className='w-full flex justify-end mr-5 mt-[-2rem]'>
        <MdAccountCircle className='size-[2rem]' />
      </div>
      <div className='mt-[10rem] text-white gap-3 max-w-[50rem] flex flex-wrap justify-center'>
        <p className='pt-2 pb-2 pl-3 cursor-pointer border rounded-md w-[10rem] flex items-center'>
          <FaBrain className='text-red-500 mr-2' /> Improve Your Knowledge
        </p>
        <p className='pt-2 pb-2 pl-3 cursor-pointer border rounded-md w-[10rem] flex items-center'>
          <IoMdCreate className='text-blue-500 mr-2' /> Write Anything
        </p>
        <p className='pt-2 pb-2 pl-3 cursor-pointer border rounded-md w-[10rem] flex items-center'>
          <IoBulbSharp className='text-yellow-500 mr-2' /> Tips and Tricks
        </p>
        <p className='pt-2 pb-2 pl-3 cursor-pointer border rounded-md w-[10rem] flex items-center'>
          <MdAccessTimeFilled className='text-green-500 mr-2' /> Time Managing For Productivity
        </p>
      </div>
      <div className='mt-[10rem] flex justify-center w-full'>
        <input className='outline-none pl-4 w-[44rem] h-[3rem] text-white bg-gray-600 rounded-3xl' autoFocus type="text" placeholder='Ask Anything You Need to Know' />
      </div>
      <div className='mt-[-2.6rem] invisible cursor-pointer flex justify-end w-full'>
        <FaArrowAltCircleUp className='size-[2rem]' />
      </div>
      <p className='mt-5 font-Noto text-white text-center cursor-default'>This Chat AI Can Make Mistakes</p>
    </div>
  );
}

export default Dashboard;
