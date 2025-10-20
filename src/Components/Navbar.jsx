import React, { useContext } from 'react';

import userImg from '../assets/user.png';
import { AuthContext } from './AuthProvider';
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    const { user, logOut, setUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                setUser(null);
                alert('Successfully logged out');
            })
            .catch(error => {
                console.log(error);
            });
    }



    return (
        <div className='grid grid-cols-2 md:grid-cols-3 '>
            <div >
                <div className="navbar-start md:hidden">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/about'>About</NavLink>
                            <NavLink to='/career'>Career</NavLink>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=' hidden md:flex items-center justify-center gap-3'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex items-center justify-end gap-2'>
                <img className='w-12 h-12 rounded-full' src={`${user ? user.photoURL : userImg}`} alt="" />
                {user
                    ? <Link onClick={handleLogOut} className='btn btn-primary px-8 text-lg'>LogOut</Link>
                    : <Link to='/auth/login' className='btn btn-primary px-8 text-lg'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
