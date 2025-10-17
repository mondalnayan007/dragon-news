import React, { Suspense } from 'react';
import Categories from '../Categories';

const LeftAside = () => {
    return (
        <div>
            <p className='font-bold'>All Categories</p>
            <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;