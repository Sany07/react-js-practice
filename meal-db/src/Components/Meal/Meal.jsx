import React from 'react';
import "./meal.css"

function Meal(props) {
    const { meal } = props;
    return (
            <div className='card'>
                <img src={ meal.strMealThumb}  alt=""/>
                <h5>
                    {
                    meal.strMeal
                    }
                </h5>
                
        </div>

    );
}

export default Meal;