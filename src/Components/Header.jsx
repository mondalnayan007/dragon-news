import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex items-center justify-center flex-col mt-8 font-poppins'>
            <img src={logo} alt="" />
            <p className='my-3 text-accent'>Journalism Without Fear or Favour</p>
            <p className='font-semibold'>{format(new Date(), "EEEE , MMMM dd , yyyy" )}</p>
        </div>
    );
};

export default Header;