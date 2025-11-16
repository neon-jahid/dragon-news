import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('./categories.json').then((res) => res.json());

function Categories() {
    const categoriesData = use(categoryPromise);
    return (
        <div>
            <h2>All Categories={categoriesData.length}</h2>

            <div className='grid grid-cols-1 mt-5 gap-3'>
                {categoriesData.map((category) => (
                    <NavLink
                        to={`category/${category.id}`}
                        key={category.id}
                        className='bg-base-100 border-0 hover:bg-gray-50 py-3 text-center font-semibold'>
                        {category.name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default Categories;
