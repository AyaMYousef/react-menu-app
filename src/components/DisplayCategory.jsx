import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';



export default function DisplayCategory() {
    const { strCategory } = useParams();
    console.log('CategoryID', strCategory)
    const [meals, setMeals] = useState([]);
    const [errMsg, setErrMsg] = useState('');


    useEffect(() => {
        async function fetchMeals() {
            try {
                let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`);
                console.log(' category:', data.meals.strCategory);
                setMeals(data.meals || []);
            } catch (error) {
                setErrMsg(error.message);
                console.error(error.message);
            }
        }

        fetchMeals();
    }, [strCategory]);

    return (
        <div>
            {errMsg && <p className="text-red-500">Error: {errMsg}</p>}
            <h2 className="text-xl font-bold mb-4">Meals in Category: {strCategory}</h2>
            <ul>
                {meals.map(meal => (
                    <li key={meal.idMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    );
}
