import React from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='grid grid-cols-3'>
            <div>

            </div>
            <div className='flex items-center justify-center gap-3'>
                   <NavLink to='/'>Home</NavLink>
                   <NavLink to='/about'>About</NavLink>
                   <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex items-center justify-end gap-2'>
                   <img src={userImg} alt="" />
                   <Link to={'/auth/login'} className='btn btn-primary px-8 text-lg'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;