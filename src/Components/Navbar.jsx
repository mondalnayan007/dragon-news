import React, { useContext } from 'react';

import userImg from '../assets/user.png';
import { AuthContext } from './AuthProvider';
import { Link,NavLink } from 'react-router';

const Navbar = () => {

    const { user, logOut, setUser} = useContext(AuthContext);

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
        <div className='grid grid-cols-3'>
            <div>
                {user && <h1>{user.email}</h1>}
            </div>
            <div className='flex items-center justify-center gap-3'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex items-center justify-end gap-2'>
                <img className='w-12 h-12 rounded-full' src={`${user ? user.photoURL : userImg}` } alt="" />
                {user 
                    ? <Link onClick={handleLogOut} className='btn btn-primary px-8 text-lg'>LogOut</Link> 
                    : <Link  to='/auth/login' className='btn btn-primary px-8 text-lg'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
