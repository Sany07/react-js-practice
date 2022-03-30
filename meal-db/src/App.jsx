import { useState } from 'react'
import './App.css'
import {  Routes } from "react-router-dom";
import Header from './Components/Header/Header'
import Meals from './Components/Meal/Meals'
import AllRoutes from './AllRoutes';


function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
          <Header/>
          <AllRoutes/>

    </div>
  )
}

export default App
