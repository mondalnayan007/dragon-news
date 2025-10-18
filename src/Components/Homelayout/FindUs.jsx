import React from 'react';


import fb from '../../assets/fb.png'
import twitter from '../../assets/twitter.png'
import insta from '../../assets/instagram.png'

const FindUs = () => {
    return (
        <div>
            <p className='font-bold '>Find Us On </p>
            <div className='  py-4 join join-vertical w-full'>
                
                    <button className='btn join-item  flex items-center justify-start gap-2 text-gray-500 font-semibold text-lg'><span className='p-2 text-blue-700 rounded-full bg-white flex items-center justify-center'><img src={fb} alt="" /></span> Facebook</button>
               
                
                <button className='btn join-item flex items-center justify-start  gap-2 text-gray-500 font-semibold text-lg'><span className='p-2 text-blue-700 rounded-full bg-white flex items-center justify-center'><img src={twitter} alt="" /></span> Twitter</button>
                <button className='btn join-item flex items-center justify-start  gap-2 text-gray-500 font-semibold text-lg'><span className='p-2 text-blue-700 rounded-full bg-white flex items-center justify-center'><img src={insta} alt="" /></span> Instagram</button>
            </div>

            
        </div>
    );
};

export default FindUs;