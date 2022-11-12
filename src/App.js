import React from "react";
import Home from './project1/Home';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import About from './About';
import Subjects from './Subjects';
import {BrowserRouter,Route,Routes } from "react-router-dom"
import { First } from "./First";





function App() {
  
  return (
  <BrowserRouter>

      <Header/>
<Routes>
      <Route path="/" element ={<First/>}/>
      <Route path="/Home" element ={<Home/>}/>
      <Route path="/About" element ={<About/>}/>
      <Route path="/Contact" element ={<Contact/>}/>
      <Route path="/Subjects" element ={<Subjects/>}/>
  </Routes>
     <Footer/>
     </BrowserRouter>
  );
}
export default App;