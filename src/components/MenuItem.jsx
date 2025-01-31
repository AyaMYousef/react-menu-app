import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function MenuItem({ item }) {
    const navigate = useNavigate();
    let { strMealThumb, idMeal, strMeal } = item || {};

    console.log(item);

    const handleViewRecipe = (idMeal) => {
        console.log(idMeal)
        navigate(`/mealdetails/${idMeal}`);
    };
    return (
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 mt-12'>
            <div className=' text-center justify-center hover:shadow-xl group  hover:scale-105 duration-300 transition-all bg-white p-12 pb-4  rounded-[35px]'>
                <img
                    src={strMealThumb}
                    className='w-full group-hover:rotate-[360deg] duration-700 transition-all rounded-full drop-shadow-xl  -translate-y-20  shadow-2xl'
                    alt={strMeal}
                />
                <p className="text-green-400 text-sm font-bold">
                    {strMeal || 'Unknown Category'}
                </p>
                <p>{strMeal}</p>
                <button className="mt-4 bg-secondary bg-green-500 text-center  hover:bg-emerald-600 
                font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300  
                px-8 py-2 rounded-full"   onClick={() => handleViewRecipe(idMeal)}> View Recipe
                </button>
            </div>

        </div>

    )
}


