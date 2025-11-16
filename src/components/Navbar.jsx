import React from 'react';
import { NavLink } from 'react-router';
import Button from '../common/Button';
import { data } from '../assets/asset';

function Navbar() {
    return (
        <div className='flex justify-between w-11/12'>
            <div></div>
            <div className='nav flex gap-6'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='login-btn flex gap-5'>
                <img
                    src={data.userLogo}
                    alt=''
                />
                <Button>Login</Button>
            </div>
        </div>
    );
}

export default Navbar;
