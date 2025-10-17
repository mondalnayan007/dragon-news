import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';


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
        <div>
            {
                
            }
        </div>
    );
};

export default CategoryNews;