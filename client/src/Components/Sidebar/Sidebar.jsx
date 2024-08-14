import React, { useState } from 'react';
import { IoMdCreate } from "react-icons/io";
import { GrAppsRounded } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { RiSidebarFoldFill } from "react-icons/ri";

function Sidebar() {
  const [sidebar, setSidebar] = useState(true);

  const handleClick = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="relative min-h-screen flex">
      <div
        className={`transform transition-transform duration-300 ease-in-out ${sidebar ? 'translate-x-0' : '-translate-x-full'} 
        fixed w-1/5 p-5 pt-6 min-h-screen bg-gray-900 font-Noto text-white`}>
        <div className='flex justify-between'>
          <RiSidebarFoldFill onClick={handleClick} className='size-[1.5rem] cursor-pointer' />
          <Link to='/dashboard'><IoMdCreate className='size-[1.5rem] cursor-pointer' /></Link>
        </div>
        <span className='mt-7 flex cursor-pointer'>
          <IoMdCreate className='mt-4 size-[1.3rem]' />
          <Link to='/dashboard' className='mt-2 ml-2 text-lg '>Create a New Chat</Link>
        </span>
        <div className='mt-5 text-lg flex'>
          <GrAppsRounded className='mt-[6px] size-[1.3rem] cursor-pointer' />
          <Link to='/' className='ml-2'>Explore AI</Link>
        </div>
        <hr className='mt-5' />
        <div className='mt-3 grid'>
          <Link to='/' className='mt-3'>Chat List</Link>
        </div>
        <hr className='mt-5' />
        <div className='mt-3 cursor-default'>
          <h1>Upgrade AI Pro</h1>
        </div>
      </div>
      <div className={`flex-grow ml-0 ${sidebar ? 'ml-1/5' : ''} transition-all duration-300 ease-in-out`}>
        {!sidebar && (
          <div className='fixed flex top-5 left-5 cursor-pointer'>
            <RiSidebarFoldFill onClick={handleClick} className='size-[1.5rem] text-white' />
            <Link to='/dashboard'><IoMdCreate className='ml-[2rem] size-[1.5rem] cursor-pointer' /></Link>
          </div>
        )}
        <div className='invisible flex justify-center items-center'>
          <h1 className='invisible'>Dashboard Content</h1>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
