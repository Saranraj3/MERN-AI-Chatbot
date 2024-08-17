import React, { useState } from 'react';
import { IoMdCreate } from "react-icons/io";
import { GrAppsRounded } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { RiSidebarFoldFill, RiVipDiamondFill } from "react-icons/ri";
import { BiMenuAltLeft } from 'react-icons/bi';
import { MdAccountCircle } from 'react-icons/md';

function Sidebar() {
  const [sidebar, setSidebar] = useState(true);

  const handleClick = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="relative min-h-screen flex">
      {/* Large Screen Sidebar */}
      <div className="hidden lg:flex">
        <div
          className={`transform transition-transform duration-300 ease-in-out ${sidebar ? 'translate-x-0' : '-translate-x-full'}
            fixed w-64 md:w-1/5 p-5 pt-6 min-h-screen bg-gray-900 font-Noto text-white`}>
          <div className='flex justify-between items-center'>
            <RiSidebarFoldFill onClick={handleClick} className='text-2xl cursor-pointer' />
            <Link to='/dashboard'><IoMdCreate className='text-2xl cursor-pointer' /></Link>
          </div>
          <div className='mt-10'>
            <span className='flex items-center cursor-pointer'>
              <IoMdCreate className='text-xl' />
              <Link to='/dashboard' className='ml-2 text-nowrap text-base'>Create a New Chat</Link>
            </span>
            <div className='mt-5 flex items-center cursor-pointer'>
              <GrAppsRounded className='text-xl' />
              <Link to='/' className='ml-2 text-nowrap text-base'>Explore AI</Link>
            </div>
            <hr className='my-5' />
            <Link to='/' className='block mt-3 text-nowrap text-base'>Chat List</Link>
            <hr className='my-5' />
            <div className='absolute bottom-0 w-full pb-2'>
              <span className='flex items-center cursor-default'>
                <RiVipDiamondFill className='text-emerald-500 text-xl' />
                <h1 className='ml-2 text-nowrap text-base'>Upgrade AI Pro</h1>
              </span>
            </div>
          </div>
        </div>
        <div className={`flex-grow transition-all duration-300 ease-in-out ${sidebar ? 'lg:ml-64 md:ml-1/5' : 'ml-0'}`}>
          {!sidebar && (
            <div className='fixed flex top-5 left-5 cursor-pointer'>
              <RiSidebarFoldFill onClick={handleClick} className='text-2xl text-white' />
              <Link to='/dashboard'><IoMdCreate className='ml-8 text-2xl cursor-pointer' /></Link>
            </div>
          )}
        </div>
      </div>

      {/* Small Screen Sidebar */}
      <div className="lg:hidden flex">
        <div
          className={`transform transition-transform duration-300 ease-in-out ${sidebar ? 'translate-x-0' : '-translate-x-full'}
            fixed w-64 p-5 pt-6 min-h-screen bg-gray-900 font-Noto text-white`}>
          <div className='flex justify-between items-center'>
            <BiMenuAltLeft onClick={handleClick} className='text-2xl cursor-pointer' />
            <Link to='/dashboard'><IoMdCreate className='text-2xl cursor-pointer' /></Link>
          </div>
          <div className='mt-10'>
            <span className='flex items-center cursor-pointer'>
              <IoMdCreate className='text-xl' />
              <Link to='/dashboard' className='ml-2 text-nowrap text-base'>Create a New Chat</Link>
            </span>
            <div className='mt-5 flex items-center cursor-pointer'>
              <GrAppsRounded className='text-xl' />
              <Link to='/' className='ml-2 text-nowrap text-base'>Explore AI</Link>
            </div>
            <hr className='my-5' />
            <Link to='/' className='block mt-3 text-nowrap text-base'>Chat List</Link>
            <hr className='my-5' />
            <div className='absolute bottom-0 w-full pb-2'>
              <span className='flex items-center cursor-default'>
                <RiVipDiamondFill className='text-emerald-500 text-xl' />
                <h1 className='ml-2 text-nowrap text-base'>Upgrade AI Pro</h1>
              </span>
              <span className='flex items-center cursor-default'>
                <MdAccountCircle className='mt-2 ml-[-0.4rem] size-[2rem]' />
                <h1 className='mt-1 ml-2 text-base'>name</h1>
              </span>
            </div>
          </div>
        </div>
        <div className={`flex-grow transition-all duration-300 ease-in-out ${sidebar ? 'ml-64' : 'ml-0'}`}>
          {!sidebar && (
            <div className='fixed justify-between w-full flex top-5 cursor-pointer'>
              <BiMenuAltLeft onClick={handleClick} className='ml-[1rem] text-2xl text-white' />
              <Link to='/dashboard'><IoMdCreate className='ml-[-2rem] text-2xl cursor-pointer' /></Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
