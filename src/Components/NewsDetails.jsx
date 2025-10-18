import React from 'react';
import { useOutletContext } from 'react-router';


const NewsDetails = () => {
    const news = useOutletContext();

    
  

    return (
        <div>
            <h1>{news.title}</h1>
        </div>
    );
};

export default NewsDetails;