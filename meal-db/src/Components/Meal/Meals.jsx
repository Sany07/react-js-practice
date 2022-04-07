import React, { useEffect, useState } from 'react';
import Meal from './Meal';
import "./Meal.css"

const Meals = (props)=> {

    const [meals, setMeals] = useState([])

    useEffect(async ()=>{
        try{
            const res =  await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
            const data = await res.json()
            setMeals(data.meals);
        }catch(err){
            console.log(err);
        }

    },[])

    return (
        <div>
            <h1>Meals List</h1>
            <div className="container">
            {
                meals.map((meal,index)=>{
                        return <Meal key={index} meal={meal}/>   
                })
            }
            </div>
        </div>
    );
}

export default Meals;