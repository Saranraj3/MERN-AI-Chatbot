import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Sidebar/Sidebar'

function DashboardLayout() {
    return (
        <div className='overflow-hidden min-h-screen flex bg-gray-800 text-white'>
            <Sidebar />
            <div className='overflow-hidden flex-grow flex items-center justify-center p-4'>
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout