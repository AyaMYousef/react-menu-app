import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function MealDetails() {
    const { idMeal } = useParams();
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchMealDetails() {
            try {
                const response = await axios.get(
                    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
                );
                console.log('API Response:', response.data);

                if (response.data.meals && response.data.meals.length > 0) {
                    setMeal(response.data.meals[0]);
                } else {
                    setError('Meal not found');
                }

            } catch (error) {
                setError('Failed to fetch meal details');
            } finally {
                setLoading(false);
            }
        }
        fetchMealDetails();
    }, [idMeal]);
    if (!meal) return <p>No meal found</p>;
    return (
        <>

            <div className="container">
                <div className="flex flex-row lg:flex-row ">
                    <div className='p-6 w-2/3 flex flex-row'>
                        <div className='p-2 w-1/2'>
                            <img className="p-4 w-full  h-25 rounded-lg" src={meal.strMealThumb} alt={meal.strMeal} />
                            <ul class="flex gap-4 justify-center">
                                <li class="bg-red-600  text-white  rounded-lg ">
                                    <a target="_blank" href={meal.strYoutube} class="flex justify-center items-center  rounded-lg p-2">
                                        youtube </a></li>
                                <li class=" text-white  rounded-lg  ">

                                    <a target="_blank" href={meal.strSource} className="flex justify-center items-center bg-green-500 rounded-lg p-2">
                                        source </a></li></ul>
                        </div>
                        <div className='p-2 w-1/2'>
                            <h1>{meal.strMeal}</h1>
                            <p>{meal.strInstructions}</p>
                        </div>

                    </div>

                    <div class="w-1/3  p-4 ">
                        <div class="bg-white rounded-2xl p-4">
                            <h3 class="text-2xl font-semibold mb-4 border-b-4 p-2 bg-slate-300">Ingredients</h3>
                            <div class="flex justify-between p-2 border-b-2 last-of-type:border-b-0 ">
                                <span>{meal.strIngredient1}</span>
                                <span>{meal.strMeasure1}</span>
                            </div>

                            <div class="flex justify-between p-2 border-b-2 last-of-type:border-b-0 ">
                                <span>{meal.strIngredient2}</span>
                                <span>{meal.strMeasure2}</span>
                            </div>

                            <div class="flex justify-between p-2 border-b-2 last-of-type:border-b-0 ">
                                <span>{meal.strIngredient3}</span>
                                <span>{meal.strMeasure3}</span>
                            </div>

                        </div>
                    </div>
                </div>




            </div>

        </>
    );
}
