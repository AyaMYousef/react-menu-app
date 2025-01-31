import React from 'react';

export default function CategoryList({ categories }) {
    return (
        <ul className="sm:flex hidden mt-8 flex-wrap gap-4 font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            {categories?.map(item => (
                <li key={item.strCategory} className="me-2">
                    <a
                        aria-current="page"
                        className="inline-block catLink px-4 py-2 border transition-all hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 active"
                        href="#/"
                        data-discover="true"
                       
                      
                    >
                        {item.strCategory}
                    </a>
                </li>
            ))}
        </ul>
    );
}
