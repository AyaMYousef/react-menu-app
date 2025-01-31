import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryItem from './CategoryItem';
import MenuItem from './MenuItem';

export default function Categories() {
    const [categArr, setCatArr] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [meals, setMeals] = useState([]);
    const [errMsg, setErrMsg] = useState('');


    async function getCategories() {
        try {
            let { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
            setCatArr(data.categories);
            setErrMsg('');
        } catch (error) {
            setErrMsg(error.message);
            console.log(error.message);
        }
    }


    async function fetchMealsByCategory(category) {
        try {
            const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            setMeals(data.meals || []);
        } catch (error) {
            setErrMsg(error.message);
            console.log(error.message);
        }
    }

    async function fetchAllMeals() {
        try {
            const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
            setMeals(data.meals || []);
        } catch (error) {
            setErrMsg(error.message);
            console.log(error.message);
        }
    }

    useEffect(() => {
        getCategories();
        fetchAllMeals();
    }, []);

    useEffect(() => {
        if (selectedCategory === null) {
            fetchAllMeals();
        } else {
            fetchMealsByCategory(selectedCategory);
        }
    }, [selectedCategory]);

    return (
        <>
            <div className="container">
                <div className="flex flex-wrap">
                    {categArr.map(item => (
                        <CategoryItem
                            key={item.strCategory}
                            item={item}
                            onClick={() => setSelectedCategory(item.strCategory)}
                        />
                    ))}
                </div>
            </div>


            <ul className="sm:flex hidden mt-8 flex-wrap gap-4 font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">

                <li className="me-2">
                    <a
                        className="inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                        href="#"
                        onClick={() => setSelectedCategory(null)}
                    >
                        All
                    </a>
                </li>


                {categArr.map(category => (
                    <li key={category.idCategory} className="me-2">
                        <a
                            className="inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                            href="#"
                            onClick={() => setSelectedCategory(category.strCategory)}
                        >
                            {category.strCategory}
                        </a>
                    </li>
                ))}
            </ul>


            <div className="flex flex-wrap gap-4 mt-8">
                {meals.length > 0 ? (
                    meals.map(meal => (
                        <MenuItem key={meal.idMeal} item={meal} />
                    ))
                ) : (
                    <p>No meals found.</p>
                )}
            </div>
        </>
    );
}
