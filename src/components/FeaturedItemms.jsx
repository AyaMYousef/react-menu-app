import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import MenuItem from './MenuItem'


export default function FeaturedItemms() {

    const [menuArr, setMenuArr] = useState([])
    const [loading, setloading] = useState(false)
    const [errMsg, setErrMsg] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All');
    //strCategory
    async function getItems() {
        try {
            let { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
            console.log('data', data.meals);
            setMenuArr(data.meals)
            setErrMsg('')
        } catch (error) {
            setErrMsg(error.message)
            console.log(error.message);
        }
    }




    useEffect(() => {
        getItems()

    }, [])
    return (
        <div className='container'>
            <div className='flex flex-wrap'>
                {menuArr.map(item => <MenuItem key={item.idMeal} item={item}></MenuItem>)}
            </div>

        </div>
    )
}
