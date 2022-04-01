import React from 'react';
import "./meal.css"

function Meal(props) {
    const { meal } = props;
    return (

            <div className='col-md-4'>
            <div className='card'>
                <img src={ meal.strMealThumb}  alt=""/>
                <h5>
                    {
                    meal.strMeal
                    }
                </h5>
                
        </div>
        </div>

    );
}

export default Meal;