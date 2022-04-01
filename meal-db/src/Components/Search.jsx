import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Meal from './Meal/Meal'

const Search = () => {

    const [meals, setMeals] = useState([])
    const [searchText, setSearchText] = useState()

    const handleSearch= async (e)=>{
        e.preventDefault();
        try{
            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            const data = await res.json();
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
        <>
        <div className="row">
            <div className="col-md-12 w-50 py-5">
                <h1>Search {meals.length }</h1>
                <Form onSubmit={handleSearch}>
            <Form.Group className="my-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Search Your Meal</Form.Label>
                <Form.Control   required type="text" placeholder="Enter Meal Name" onChange={(e)=>setSearchText(e.target.value) } />
            </Form.Group>
            <Button onClick={handleSearch} variant="outline-primary">Search</Button>
                </Form>
            </div>
        </div>

        <div className="row">

        { meals.map((meal)=>{
            return <Meal key={meal.strMeal} meal={meal}/>
        })}
        </div>
        
        </>
        
    );
};

export default Search;