import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Meals from './Components/Meal/Meals'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Meals/>
    </div>
  )
}

export default App
