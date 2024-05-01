import React from 'react';
import Logo from '../../Assets/Png/Logo-Chatbot.gif';

function Navbar({ user }) {

    const logout = () => {
        window.open("http://localhost:4000/auth/logout", "_self");
    };

    return (
        <div>
            <span className='flex mt-1 ml-4 '>
                <img src={Logo} alt="" />
                <h2 className='text-white mt-3 ml-3 font-bold text-xl font-serif'>AI Chatbot</h2>
            </span>
            {user ? (
                <div className=''>
                    <img className='mt-[-3rem] ml-auto mr-[1rem] rounded-full w-[3rem]' src={user.photos[0].value} alt="" />
                    <ul className='text-right mt-2 mr-[1rem] font-bold font-mono text-white hover:visible '>
                        <li className='block' onClick={logout} >Logout</li>
                        <li className='block' >{user.displayName} </li>
                    </ul>
                </div>
            ) :
                <p></p>
            }
        </div>
    )
}

export default Navbar