import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

function AuthLayOut() {
    return (
        <div className='bg-gray-100 min-h-screen'>
            <header className='w-11/12 mx-auto py-6'>
                <Navbar />
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default AuthLayOut;
