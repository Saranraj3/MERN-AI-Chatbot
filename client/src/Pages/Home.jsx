import React from 'react';
import logo from '../Assets/Png/Logo-Chatbot.gif';

function Home() {
    return (
        <div className='min-h-screen bg-background'>
            <span className='flex'>
            <img className='mt-2 ml-4 size-[3rem]' src={logo} alt="" />
            <p className='mt-5 ml-2 font-Noto font-bold text-xl text-white'>Chat AI</p>
            </span>
        </div>
    )
}

export default Home