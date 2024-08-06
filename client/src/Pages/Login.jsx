import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import googlelogo from '../Assets/Png/google.png';

function Login() {
    const [formdata, setFormdata] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const Handlechange = (e) => {
        setFormdata({ ...formdata, [e.target.id]: e.target.value });
    }
    const Handlesumbit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true);
            setError(false);
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formdata),
            });
            const data = await res.json()
            setLoading(false)
            if (data.success === false) {
                setError(true);
                return;
            }
            navigate('/');
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    };
    return (
        <div className='min-h-screen bg-gray-900'>
            <h1 className='pt-[3rem] font-Noto font-extrabold text-2xl cursor-pointer text-center text-white'>Welcome Back To You're Account </h1>
            <form onSubmit={Handlesumbit}>
                <div className='mt-5 flex justify-center'>
                    <input className='pl-2 cursor-pointer font-bold font-Noto rounded-sm outline-none border-black h-[2.5rem] w-[18rem] border' type="email" placeholder='Email' id='Email' required onChange={Handlechange} />
                </div>
                <div className='mt-3 flex justify-center'>
                    <input className='pl-2 cursor-pointer font-bold font-Noto rounded-sm outline-none border-black h-[2.5rem] w-[18rem] border' type="password" placeholder='Password' id='Password' required onChange={Handlechange} />
                </div>
                <div className='mt-3 flex justify-center'>
                    <button disabled={loading} type='submit' className='h-[2.5rem] w-[18rem] text-lg hover:opacity-80 rounded-sm bg-green-400'>{loading ? 'Loading...' : 'Submit'}</button>
                </div>
                <div className='mt-3 flex justify-center'>
                    <img className='cursor-pointer absolute size-[2.5rem]' src={googlelogo} alt="" />
                    <button type='submit' className='h-[2.5rem] w-[18rem] text-lg rounded-sm bg-white'></button>
                </div>
                <div className='mt-2 font-bold flex justify-center text-red-500'>
                    <p>{error && 'Something Went Wrong'}</p>
                </div>
                <span className='mt-3 flex justify-center'><p className='cursor-pointer text-white'>You Don't Have an Account ?</p><Link to='/signup' className='ml-2 cursor-pointer text-blue-400'> Singup</Link></span>
            </form>
        </div>
    )
}

export default Login