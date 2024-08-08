import React from 'react';
import { IoMdCreate } from "react-icons/io";
import { GrAppsRounded } from "react-icons/gr";
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='overflow-y-hidden p-10 pt-6 min-h-screen bg-gray-900 font-Noto text-white'>
      <span className='flex'><IoMdCreate className='mt-4' />
        <Link to='/dashboard' className='mt-2 ml-2 text-lg '>Create a New Chat</Link>
      </span>
      <div className='mt-3 text-lg flex'>
        <GrAppsRounded className='mt-[6px]' />
        <Link to='/' className='ml-2'>Explore AI</Link>
      </div>
      <hr className='mt-5' />
      <div className='mt-3 grid '>
        <Link to='/' className='mt-3'>Chat List</Link>
      </div>
      <hr className='mt-5' />
      <div className='mt-3'>
        <h1>Upgrade AI Pro</h1>
      </div>
    </div>
  )
}

export default Sidebar;