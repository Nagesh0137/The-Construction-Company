import React from "react";
import './style.css'
import Header from "./Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Footer";
import Project from "./Pages/Project";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function App(){
    return(
        <>
        <Router>
            <Header></Header>
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/about' element={<About></About>}></Route>
              <Route path='/projects' element={<Project></Project>}></Route>
              <Route path='/services' element={<Services></Services>}></Route>
              <Route path='/contact' element={<Contact></Contact>}></Route>
              <Route path='/blog' element={<Blog></Blog>}></Route>
            </Routes>
            <Footer></Footer>
        </Router>
        </>
    )
}