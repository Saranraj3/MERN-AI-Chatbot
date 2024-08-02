import React from 'react';
import { Link } from 'react-router-dom';
import googlelogo from '../Assets/Png/google.png';

function Login() {
    return (
        <div className='min-h-screen bg-violet-900'>
            <h1 className='pt-[3rem] font-Noto font-extrabold text-2xl cursor-pointer text-center text-white'>Welcome Back To You're Account </h1>
            <div>
                <div className='mt-5 flex justify-center'>
                    <input className='pl-2 cursor-pointer font-bold font-Noto rounded-sm outline-none border-black h-[2.5rem] w-[18rem] border' type="email" placeholder='Email' required />
                </div>
                <div className='mt-3 flex justify-center'>
                    <input className='pl-2 cursor-pointer font-bold font-Noto rounded-sm outline-none border-black h-[2.5rem] w-[18rem] border' type="password" placeholder='Password' required />
                </div>
                <div className='mt-3 flex justify-center'>
                    <button type='submit' className='h-[2.5rem] w-[18rem] text-lg hover:opacity-80 rounded-sm bg-blue-400'>Continue</button>
                </div>
                <div className='mt-3 flex justify-center'>
                    <img className='absolute size-[2.5rem]' src={googlelogo} alt="" />
                    <button type='submit' className='h-[2.5rem] w-[18rem] text-lg rounded-sm bg-white'></button>
                </div>
                <span className='mt-3 flex justify-center'><p className='cursor-pointer text-white'>You Don't Have an Account ?</p><Link to='/signup' className='ml-2 cursor-pointer text-blue-400'> Singup</Link></span>
            </div>
        </div>
    )
}

export default Login