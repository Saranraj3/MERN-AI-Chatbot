import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/Png/Logo-Chatbot.gif';
import { useTypewriter } from 'react-simple-typewriter';

function Home() {
    const [text] = useTypewriter({
        words: ['Give Me Ideas and Tips and Tricks', 'Type Whatever You Want', 'Gain Knowledges and Time Consuming', 'Everything You Need To Know'],
        loop: {},
    });
    return (
        <div className='min-h-screen bg-violet-900'>
            <span className='flex'>
                <img className='mt-2 ml-4 cursor-pointer size-[3rem]' src={logo} alt="" />
                <p className='mt-5 ml-2 cursor-pointer font-Noto font-bold text-xl text-white'>Chat AI</p>
            </span>
            <div className='mt-[-2rem] mr-6 gap-5 justify-end flex'>
                <Link to='/login'><button className='bg-white hover:bg-opacity-60 w-[5rem] h-[2rem] rounded-md font-Noto font-semibold '>Log in</button></Link>
                <Link to='/signup'><button className='bg-white hover:bg-opacity-60 w-[5rem] h-[2rem] rounded-md font-Noto font-semibold '>Sign up</button></Link>
            </div>
            <div className='text-white text-lg gap-3 flex mt-[10rem] m-5'>
                <p className='pt-2 pb-2 pl-4 cursor-pointer border rounded-md w-[30rem]'>Chatbots, also known as conversational agents, are designed with the help of AI (Artificial Intelligence) software. </p>
                <p className='pt-2 pb-2 pl-4 cursor-pointer border rounded-md w-[30rem]'>Artificial intelligence (AI) chatbots are apps or interfaces that can carry on human-like conversation using natural. </p>
                <p className='pt-2 pb-2 pl-4 cursor-pointer border rounded-md w-[30rem]'>They simulate a conversation (or a chat) with users in a via messaging applications, websites, mobile apps, or phone. </p>
                <p className='pt-2 pb-2 pl-4 cursor-pointer border rounded-md w-[30rem]'>Chatbots are computer programs designed to simulate human conversation, and they have evolved from simple rule-based. </p>
            </div>
            <div className='m-5 mt-[7rem] h-[3rem] cursor-pointer rounded-2xl border bg-violet-700 text-white'>
                <p className='mt-3 ml-3'>{text}</p>
            </div>
            <p className='text-white text-center cursor-pointer'>This Chat AI Can Make Mistakes</p>
        </div>
    )
}

export default Home