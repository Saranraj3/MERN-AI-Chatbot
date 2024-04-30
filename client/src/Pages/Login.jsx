import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import Logo from '../Assets/Png/Logo-Chatbot.gif';
import Robot from '../Assets/Png/Robot.png';
import Google from '../Assets/Png/google.png';
import API from '../Common';
import { toast } from 'react-toastify';

function Login() {

    const navigate = useNavigate();
    const [data, setData] = useState({
        Email: '',
        Password: '',
    })

    const HandleOnChange = (e) => {
        const { name, value } = e.target
        setData((preve) => {
            return {
                ...preve,
                [name]: value
            };
        });
    };

    const HandleOnSubmit = async (e) => {
        e.preventDefault()
        const dataresponse = await fetch(API.Login.url, {
            method: API.Login.method,
            credentials: 'include',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const dataAPI = await dataresponse.json()
        if (dataAPI.success) {
            toast.success(dataAPI.message)
            navigate('/')
        }
        if (dataAPI.error) {
            toast.error(dataAPI.message)
            
        }
    }

    const [showPassword, setShowPassword] = useState(false);

    const HanddleIcon = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div>
            <span className='flex mt-1 ml-4'>
                <img src={Logo} alt="" />
                <h2 className='text-white mt-3 ml-3 font-bold text-xl font-serif'>AI Chatbot</h2>
            </span>
            <img className='mt-[5rem] ml-2 w-[25rem]' src={Robot} alt="" />
            <form onSubmit={HandleOnSubmit}>
                <h1 className='text-white text-center mt-[-26rem] ml-[26rem] font-extrabold text-2xl'>Login To You're Account</h1>
                <input className='cursor-pointer mt-[2rem] ml-[46rem] pl-2 w-[20rem] h-[3rem] rounded-md text-white  bg-gray-600' type="email" name='Email' value={data.Email} onChange={HandleOnChange} placeholder='Enter Your Email Address' />
                <input className='cursor-pointer mt-[1rem] ml-[46rem] pl-2 w-[20rem] h-[3rem] rounded-md text-white  bg-gray-600' type={(showPassword === false) ? 'Password' : 'text'} name='Password' value={data.Password} onChange={HandleOnChange} placeholder='Password' />
                {(showPassword === false) ? <IoEye onClick={HanddleIcon} className='cursor-pointer text-white size-[1.5rem] mt-[-2.3rem] ml-[64rem] ' /> : <IoEyeOff onClick={HanddleIcon} className='cursor-pointer text-white size-[1.5rem] mt-[-2.3rem] ml-[64rem] ' />}
                <button className='mt-[2rem] ml-[46rem] w-[20rem] h-[3rem] rounded-md text-white text-lg font-bold bg-green-800 '>Login</button>
                <span className='flex'>
                    <button className='mt-[1rem] ml-[46rem] w-[20rem] h-[3rem] rounded-md text-black font-bold bg-white '></button>
                    <img className='w-[2.5rem] h-[2.5rem] mt-5 ml-[-11rem] bg-white ' src={Google} alt="" />
                </span>
            </form>
            <p className='text-center text-white mt-3 ml-[26.5rem]'>Don't Have an Account Create Then ?<Link className='text-blue-500 ml-1' to='/signup'>Signup</Link></p>
        </div>
    )
}




export default Login
