import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import Latest from '../Components/Latest';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/Homelayout/LeftAside';
import RightAside from '../Components/Homelayout/RightAside';

const HomeLayout = () => {
    return (
        <div>

            <header>
                  <Header></Header>
                  <section className='w-11/12 mx-auto my-3'>
                    <Latest></Latest>
                  </section> 
                  <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                  </nav>
            </header>

            <main className='w-11/12 mx-auto grid grid-cols-12  gap-3'>
                   <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                    </aside>               
                   <section className="col-span-9 md:col-span-6">
                    <Outlet></Outlet>
                    </section>                
                  <aside className=' hidden md:block md:col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                    </aside>               
            </main>
            
        </div>
    );
};

export default HomeLayout;