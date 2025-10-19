import React, { useEffect, useState } from 'react';

import Header from './Header';
import RightAside from './Homelayout/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from './NewsDetailsCard';


const NewsDetails = () => {
  

const data = useLoaderData()

const { id } = useParams()

const [news,setNews] = useState({})

useEffect(()=>{
    const newsDetails = data.find(singleNews => singleNews.id == id)
    setNews(newsDetails)
},[data,id])


    return (
        <div>
            <header>
                <Header />
            </header>

            <main className='w-11/12 mx-auto grid grid-cols-12  gap-3'>

                <section className="col-span-9">
                     <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>

        </div>
    );
};

export default NewsDetails;