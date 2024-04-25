import React, { useState } from 'react'
import { IoEye } from "react-icons/io5";
import { Link} from 'react-router-dom'
import { IoEyeOff } from "react-icons/io5";
import Logo from '../Assets/Png/Logo-Chatbot.gif'
import Robot from '../Assets/Png/Robot.png'

function Signup() {

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
                <form className='mt-[-1rem]'>
                    <input className='cursor-pointer mt-[2rem] ml-[46rem] pl-2 w-[20rem] h-[3rem] rounded-md text-white  bg-gray-600' type="text" name='name' placeholder='Name' required={true} />
                    <input className='cursor-pointer mt-[1rem] ml-[46rem] pl-2 w-[20rem] h-[3rem] rounded-md text-white  bg-gray-600' type="text" name='lastname' placeholder='Last Name' required={true} />
                    <input className='cursor-pointer mt-[1rem] ml-[46rem] pl-2 w-[20rem] h-[3rem] rounded-md text-white  bg-gray-600' type="email" name='email' placeholder='Enter Your Email Address' required={true} />
                    <div>
                        <input className='cursor-pointer mt-[1rem] ml-[46rem] pl-2 w-[20rem] h-[3rem] rounded-md text-white  bg-gray-600' type={(showPassword === false) ? 'password' : 'text'} placeholder='Password' name='password' required={true} />
                        {(showPassword === false) ? <IoEye onClick={HanddleIcon} className='cursor-pointer text-white size-[1.5rem] mt-[-2.3rem] ml-[64rem] ' /> : <IoEyeOff onClick={HanddleIcon} className='cursor-pointer text-white size-[1.5rem] mt-[-2.3rem] ml-[64rem] ' />}
                    </div>
                    <div>
                        <input className='cursor-pointer mt-[2rem] ml-[46rem] pl-2 w-[20rem] h-[3rem] rounded-md text-white  bg-gray-600' type={(showPassword === false) ? 'password' : 'text'} placeholder='Confirm Password' name='confirm' required={true} />
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