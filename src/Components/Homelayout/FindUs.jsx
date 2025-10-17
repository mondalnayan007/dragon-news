import React from 'react';


import fb from '../../assets/fb.png'
import twitter from '../../assets/twitter.png'
import insta from '../../assets/instagram.png'

const FindUs = () => {
    return (
        <div>
            <p>Find Us On </p>
            <div className='border rounded-lg  py-4 flex flex-col gap-5'>
               <div>
                  <p className='flex items-center gap-2 text-gray-500 font-semibold text-lg'><span className='p-2 text-blue-700 rounded-full bg-base-200 flex items-center justify-center'><img src={fb} alt="" /></span> Facebook</p>
               </div>
                <hr className='w-full bg-gray-300 h-0' />
                <p className='flex items-center gap-2 text-gray-500 font-semibold text-lg'><span className='p-2 text-blue-700 rounded-full bg-base-200 flex items-center justify-center'><img src={twitter} alt="" /></span> Twitter</p>
                <p className='flex items-center gap-2 text-gray-500 font-semibold text-lg'><span className='p-2 text-blue-700 rounded-full bg-base-200 flex items-center justify-center'><img src={insta} alt="" /></span> Instagram</p>
            </div>
        </div>
    );
};

export default FindUs;