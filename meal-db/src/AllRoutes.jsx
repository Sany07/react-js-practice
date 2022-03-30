import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Meals from './Components/Meal/Meals';
import NotFound from './Components/NotFound';
import Search from './Components/Search';

function AllRoutes() {
    return (
      <Routes>
      
            <Route path="/" element={<Meals />}></Route>
            <Route path="/search" element={<Search/>}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<ContactUs />}></Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AllRoutes;