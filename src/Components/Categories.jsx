import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then(res => res.json())

const Categories = () => {
    const category = use(categoryPromise);


    return (
        <div>

            <div className='grid grid-cols-1 mt-4 gap-3 outline outline-base-200'>
                {
                    category.map(category => <NavLink to={`/category/${category.id}`} key={category.id} className='px-5 py-2  hover:bg-base-200 text-accent'>{category.name}</NavLink>)
                }
            </div>

        </div>
    );
};

export default Categories;