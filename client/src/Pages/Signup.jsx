import React from 'react'
import Logo from '../Assets/Png/Logo-Chatbot.gif'
import Robot from '../Assets/Png/Robot.png'
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <div>
            <span className='flex mt-1 ml-4'>
                <img src={Logo} alt="" />
                <h2 className='text-white mt-3 ml-3 font-bold text-xl font-serif'>AI Chatbot</h2>
            </span>
            <img className='mt-[4rem] ml-2 w-[25rem]' src={Robot} alt="" />
            <div>
                <h1 className='text-white text-center mt-[-26rem] ml-[26rem] font-extrabold text-2xl'>Create New Account</h1>
                <input className='mt-[2rem] ml-[46rem] pl-2 w-[20rem] h-[3rem] rounded-md text-white  bg-gray-600' type="text" placeholder='Name' />
                <input className='mt-[1rem] ml-[46rem] pl-2 w-[20rem] h-[3rem] rounded-md text-white  bg-gray-600' type="email" placeholder='Enter Your Email Address' />
                <input className='mt-[1rem] ml-[46rem] pl-2 w-[20rem] h-[3rem] rounded-md text-white  bg-gray-600' type="Password" placeholder='Password' />
                <input className='mt-[1rem] ml-[46rem] pl-2 w-[20rem] h-[3rem] rounded-md text-white  bg-gray-600' type="password" placeholder='Confirm Password' />
                <button className='mt-[1rem] ml-[46rem] w-[20rem] h-[3rem] rounded-md text-white font-bold bg-green-800 ' >Login</button>
            </div>
            <p className='text-center text-white mt-2 ml-[26rem]'>Already Have an Account Then ?<Link className='text-blue-500 ml-1' to='/login'>Login</Link></p>
        </div>
    )
}

export default Signup