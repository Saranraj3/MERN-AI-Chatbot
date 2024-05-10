import React, { useState } from 'react';
import { IoEye } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import API from '../Common';
import { toast } from 'react-toastify';
import { IoEyeOff } from "react-icons/io5";
import Logo from '../Assets/Png/Logo-Chatbot.gif';
import Robot from '../Assets/Png/Robot.png';

function Signup() {

    const navigate = useNavigate();
    const [data, setData] = useState({
        Name: '',
        Email: '',
        Password: '',
        Confirmpassword: '',
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
        const dataresponse = await fetch(API.Signup.url, {
            method: API.Signup.method,
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
            <img className='mt-[4rem] ml-2 w-[25rem]' src={Robot} alt="" />
            <div>
                <h1 className='text-white text-center mt-[-28rem] ml-[26rem] font-extrabold text-2xl'>Create New Account</h1>
                <form onSubmit={HandleOnSubmit} className='mt-[-1rem]'>
                    <input className='cursor-pointer mt-[2rem] ml-[46rem] pl-2 w-[20rem] h-[3rem] rounded-md text-white  bg-gray-600' type="text" name='Name' placeholder='Name' value={data.Name} onChange={HandleOnChange} />
                    <input className='cursor-pointer mt-[1rem] ml-[46rem] pl-2 w-[20rem] h-[3rem] rounded-md text-white  bg-gray-600' type="email" name='Email' value={data.Email} onChange={HandleOnChange} placeholder='Enter Your Email Address' />
                    <div>
                        <input className='cursor-pointer mt-[1rem] ml-[46rem] pl-2 w-[20rem] h-[3rem] rounded-md text-white  bg-gray-600' type={(showPassword === false) ? 'Password' : 'text'} name='Password' value={data.Password} onChange={HandleOnChange} placeholder='Password' />
                        {(showPassword === false) ? <IoEye onClick={HanddleIcon} className='cursor-pointer text-white size-[1.5rem] mt-[-2.3rem] ml-[64rem] ' /> : <IoEyeOff onClick={HanddleIcon} className='cursor-pointer text-white size-[1.5rem] mt-[-2.3rem] ml-[64rem] ' />}
                    </div>
                    <button className='mt-[2rem] ml-[46rem] w-[20rem] h-[3rem] rounded-md text-white text-lg font-bold bg-green-800 '>Signup</button>
                </form>
            </div>
            <p className='text-center text-white mt-2 ml-[26rem]'>Already Have an Account Then ?<Link className='text-blue-500 ml-1' to='/login'>Login</Link></p>
        </div>
    )
}

export default Signup