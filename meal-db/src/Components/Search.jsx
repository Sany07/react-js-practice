import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Search = () => {

    const [meals, setMeals] = useState([])
    const [searchText, setSearchText] = useState()

    const handleSearch= async ()=>{
        try{
            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            const data = await res.json();
            console.log(data.meals)
            setMeals(data.meals)
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        console.log(searchText)
    },[meals])

    return (
        <div className='row'>
            <div className="col-md-12 py-5">

            <h1>Search {meals.length }</h1>
            <Form>
            <Form.Group className="my-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Search Your Meal</Form.Label>
                <Form.Control type="text" placeholder="Enter Meal Name" onChange={(e)=>setSearchText(e.target.value)} />
            </Form.Group>
            </Form>
            <Button onClick={handleSearch} variant="outline-primary">Search</Button>
        </div>

        { meals.map((meal)=>{
            return(
                <div className="col-md-4" key={meal.idMeal}>
                    <img src={meal.strMealThumb} className="img-fluid" alt=""/>
                    <h1>{ meal.strMeal }</h1>
                    <h1>{ meal.strCategory }</h1>
                </div>
            )
        })}
        </div>
        
    );
};

export default Search;