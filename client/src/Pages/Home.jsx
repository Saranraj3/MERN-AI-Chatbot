import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/Png/Logo-Chatbot.gif';
import { useTypewriter } from 'react-simple-typewriter';

function Home() {
    const [text] = useTypewriter({
        words: ['Give Me Ideas Tips and Tricks', 'Type Whatever You Want', 'Gain Knowledges ', 'Everything You Need To Know'],
        loop: {},
    });
    return (
        <div className='overflow-hidden min-h-screen bg-gray-900'>
            <span className='flex'>
                <img className='xs:size-[3rem] xs:mt-3 xs:ml-4 cursor-default' src={logo} alt="" />
                <p className='xs:mt-[1.6rem] xs:ml-2 xs:text-lg cursor-default font-Noto font-bold text-white'>Chat AI</p>
            </span>
            <div className='xs:gap-3 xs:mt-[-2.3rem] xs:mr-4 xs:text-lg text-nowrap justify-end flex'>
                <Link to='/login'><button className='xs:w-[4.5rem] xs:h-[2rem] md:w-[5rem] md:h-[2.3rem] bg-white hover:bg-opacity-60 rounded-md font-Noto font-semibold '>Log in</button></Link>
                <Link to='/signup'><button className='xs:w-[4.5rem] xs:h-[2rem] md:w-[5rem] md:h-[2.3rem] bg-white hover:bg-opacity-60 rounded-md font-Noto font-semibold '>Sign up</button></Link>
            </div>
            <div className='flex justify-center items-center h-screen'>
                <div className='xs:mt-[20rem] xs:grid-cols-1 xs:text-lg xs:gap-7 md:gap-5 lg:mt-[5rem] lg:grid-cols-2 text-white grid'>
                    <p className='xs:w-[20rem] xs:pt-2 xs:pb-2 xs:pl-4 md:pl-3 md:w-[30rem] cursor-pointer border rounded-md'>Chatbots, also known as conversational agents, are designed with the help of AI (Artificial Intelligence) software. </p>
                    <p className='xs:w-[20rem] xs:pt-2 xs:pb-2 xs:pl-4 md:pl-3 md:w-[30rem] cursor-pointer border rounded-md'>Artificial intelligence (AI) chatbots are apps or interfaces that can carry on human-like conversation using natural. </p>
                    <p className='xs:w-[20rem] xs:pt-2 xs:pb-2 xs:pl-4 md:pl-3 md:w-[30rem] cursor-pointer border rounded-md'>They simulate a conversation (or a chat) with users in a via messaging applications, websites, mobile apps, or phone. </p>
                    <p className='xs:w-[20rem] xs:pt-2 xs:pb-2 xs:pl-4 md:pl-3 md:w-[30rem] cursor-pointer border rounded-md'>Chatbots are computer programs designed to simulate human conversation, and they have evolved from simple rule-based. </p>
                </div>
            </div>
            <div className='xs:mt-[20rem] lg:mt-[5rem] top-full sticky pb-2'>
                <div className='xs:m-5 xs:mt-[5rem] xs:h-[3rem] cursor-default rounded-3xl border bg-gray-800 text-white'>
                    <p className='xs:mt-3 xs:ml-3 xs:text-sm md:text-base'>{text}</p>
                </div>
                <p className='xs:mt-[1rem] xs:text-sm md:text-base text-white text-center cursor-default'>This Chat AI Can Make Mistakes</p>
            </div>
        </div>
    )
}

export default Home