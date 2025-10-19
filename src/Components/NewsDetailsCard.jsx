import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {


console.log(news)

    return (
        <div>
            <h1 className='text-lg font-bold pb-3'>Dragon News</h1>
            
            <div className='card p-4 outline outline-gray-300'>
                <img className='rounded-lg' src={news.image_url} alt="" />
                <h3 className='text-2xl font-bold py-4'>{news.title}</h3>
                <p>{news.details}</p>
                <Link to={'/'} className='bg-secondary text-white px-4 py-2 w-[28%] my-4'>← All news in this category</Link>

            </div>
            
        </div>
    );
};

export default NewsDetailsCard;