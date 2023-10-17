import React from "react";
import Home from './project1/Home';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import About from './About';
import Subjects from './Subjects';
import {BrowserRouter,Route,Routes } from "react-router-dom"
import { app } from './firebase'
import { getAuth,onAuthStateChanged}  from "firebase/auth";
import { useState,useEffect } from "react";


 
 const auth=getAuth(app);





function App() {

  const [user ,setuser] =useState(false);
  console.log("ashu",user)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (data) => {
          setuser(data);
        },[]);  
        return () => {
            unsubscribe();
          }; 
        });
  
  return (
  <BrowserRouter>

      <Header user={user}/>
<Routes>
      <Route path="/" element ={<Home user={user}/>}/>
      <Route path="/About" element ={<About user={user}/>}/>
      <Route path="/Contact" element ={<Contact user={user}/>}/>
      <Route path="/Subjects" element ={<Subjects user={user}/>}/>
  </Routes>
     <Footer/>
     </BrowserRouter>
  );
}
export default App;