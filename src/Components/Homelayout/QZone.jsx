import React from 'react';
import swimming from '../../assets/swimming.png'
import classImg from'../../assets/class.png'
import playImg from '../../assets/playground.png'

const QZone = () => {
    return (
        <div className='bg-[#f2f2f2] p-3'>
            <h1 className='font-bold pb-3'>Q-Zone</h1>
            <div>
                <img src={swimming} alt="" />
                <img src={classImg} alt="" />
                <img src={playImg} alt="" />

            </div>
        </div>
    );
};

export default QZone;