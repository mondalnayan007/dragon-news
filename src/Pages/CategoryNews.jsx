import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsContainer from '../Components/NewsContainer';


const CategoryNews = () => {

    const {id} = useParams();
    const newsData = useLoaderData();
    console.log(newsData)

    const [categorynews , setCategorynews] = useState([])
    console.log(categorynews)
 

    useEffect(()=>{

        if(id == '0'){
            setCategorynews(newsData);
            return;
        }
        else if(id == '1'){
                const filteredNews= newsData.filter((data) => data.others.is_today_pick == true );
             setCategorynews(filteredNews)
        }else{
                 const filteredNews= newsData.filter((data) => data.category_id == Number(id) );
             setCategorynews(filteredNews)
        }
             

    },[newsData,id])
    
    return (
        <div className="grid grid-cols-1 gap-4">
            <h2 className='text-lg font-semibold'>Total <span className='text-secondary'>{categorynews.length}</span> News Found</h2>
            {
                categorynews.map(news => <NewsContainer news={news}></NewsContainer>)
            }
        </div>
    );
};

export default CategoryNews;