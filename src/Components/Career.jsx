import React from 'react';
import { Link } from 'react-router';

const Career = () => {
    return (
        <div className='min-h-screen flex flex-col gap-3 items-center justify-center'>
            <p className='text-2xl '>Vai Career niya kobe serious hobi🤔🤔...</p>
            <Link to={'/'} className='px-5 py-3 text-white bg-blue-500 rounded-lg'>ফেরত যাই</Link>
        </div>
    );
};

export default Career;