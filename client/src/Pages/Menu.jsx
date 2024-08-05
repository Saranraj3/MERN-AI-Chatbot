import React from 'react'
import { Outlet } from 'react-router-dom'

function Menu() {
    return (
        <div className='min-h-screen bg-gray-900'>
            <h1>Menu</h1>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Menu