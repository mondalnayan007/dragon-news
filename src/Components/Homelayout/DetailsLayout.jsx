import React from 'react';
import Header from '../Header';
import { Outlet, useLocation } from 'react-router';
import RightAside from './RightAside';
import NewsDetails from '../NewsDetails';


const DetailsLayout = () => {

    const location = useLocation();
    const news = location.state?.news || {}; 

    
   
   
    
    
    
    return (
        <div>
        
                    <header>
                          <Header></Header>
                          
                          
                    </header>
        
                    <main className='w-11/12 mx-auto grid grid-cols-12  gap-3'>
                                         
                           <section className="col-span-9">
                            <Outlet  context={news}>
                                
                            </Outlet>
                            </section>                
                          <aside className='col-span-3'>
                            <RightAside></RightAside>
                            </aside>               
                    </main>
                    
                </div>
    );
};

export default DetailsLayout;