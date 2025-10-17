import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest = () => {
    return (
        <div className='bg-base-200 p-2 flex items-center gap-5'>
            <p className='text-white py-2 px-4 bg-secondary text-lg'>Latest</p>
            <Marquee className='flex gap-6' pauseOnHover={true} speed={60}>
                <p className='font-semibold'>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </p>
                <p className='font-semibold'>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </p>
                <p className='font-semibold'>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </p>
               
            </Marquee>
        </div>
    );
};

export default Latest;