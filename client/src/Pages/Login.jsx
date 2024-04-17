import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/Png/Logo-Chatbot.gif'
import Robot from '../Assets/Png/Robot.png'
import Google from '../Assets/Png/google.png'

function Login() {
    return (
        <div>
            <span className='flex mt-1 ml-4'>
                <img src={Logo} alt="" />
                <h2 className='text-white mt-3 ml-3 font-bold text-xl font-serif'>AI Chatbot</h2>
            </span>
            <img className='mt-[4rem] ml-2 w-[25rem]' src={Robot} alt="" />
            <div>
                <h1 className='text-white text-center mt-[-26rem] ml-[26rem] font-extrabold text-2xl'>Login To You're Account</h1>
                <input className='mt-[2rem] ml-[46rem] pl-2 w-[20rem] h-[3rem] rounded-md text-white  bg-gray-600' type="email" placeholder='Enter Your Email Address' />
                <input className='mt-[1rem] ml-[46rem] pl-2 w-[20rem] h-[3rem] rounded-md text-white  bg-gray-600' type="password" placeholder='Password' />
                <button className='mt-[1rem] ml-[46rem] w-[20rem] h-[3rem] rounded-md text-white text-lg font-bold bg-green-800 '>Login</button>
                <span className='flex'>
                    <button className='mt-[1rem] ml-[46rem] w-[20rem] h-[3rem] rounded-md text-black font-bold bg-white '></button>
                    <img className='w-[2.5rem] h-[2.5rem] mt-5 ml-[-11rem] bg-white ' src={Google} alt="" />
                </span>
            </div>
            <p className='text-center text-white mt-3 ml-[26.5rem]'>Don't Have an Account Create Then ?<Link className='text-blue-500 ml-1' to='/signup'>Signup</Link></p>
        </div>
    )
}

export default Login