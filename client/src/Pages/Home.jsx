import React from 'react';
import logo from '../Assets/Png/Logo-Chatbot.gif';

function Home() {
    return (
        <div className='min-h-screen bg-background'>
            <span className='flex'>
            <img className='mt-2 ml-4 cursor-pointer size-[3rem]' src={logo} alt="" />
            <p className='mt-5 ml-2 cursor-pointer font-Noto font-bold text-xl text-white'>Chat AI</p>
            </span>
            <div className='mt-[-2rem] mr-6 gap-5 justify-end flex'>
                <button className='bg-white hover:bg-opacity-60 w-[5rem] h-[1.6rem] rounded-md font-Noto font-semibold '>Log in</button>
                <button className='bg-white hover:bg-opacity-60 w-[5rem] h-[1.6rem] rounded-md font-Noto font-semibold '>Sign up</button>
            
            </div>
        </div>
    )
}

export default Home