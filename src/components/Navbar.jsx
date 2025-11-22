import React from 'react';
import { Navigate, NavLink } from 'react-router';
import Button from '../common/Button';
import { data } from '../assets/asset';
import { AuthContext } from '../provider/Auth/AuthContext';
import { use } from 'react';

function Navbar() {
    const { user } = use(AuthContext);

    return (
        <div className='flex justify-between w-11/12'>
            <div>{user && user.email}</div>
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
                <NavLink to={'auth/login'}>
                    <Button>Login</Button>
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
