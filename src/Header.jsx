import React from 'react'
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import { app } from './firebase'
import { onAuthStateChanged, getAuth,signOut, }  from "firebase/auth";
import { getFirestore, addDoc, collection, serverTimestamp,} from "firebase/firestore";





  const db=getFirestore(app);
  const auth=getAuth(app);








  
  function showMenu(){
     var navLinks = document.getElementById("navLinks");
      navLinks.style.right = "0";
  }
  function hideMenu(){
     var navLinks = document.getElementById("navLinks");
      navLinks.style.right = "-200px";                                   
  
  }






const logoutHandler=()=>{
    
    signOut(auth);
  }
function header() {
    const [user ,setuser] =useState(false);
    useEffect(() => {
      const unsubscribe=onAuthStateChanged(auth,(data)=>{
        setuser(data)
        return ()=>{
            unsubscribe()
        }
      })
 
    })
    const submitHandler = async (e) => {
        e.preventDefault();
    
        try {

    
          await addDoc(collection(db, "Messages"), {
            Name:user.displayName,
            uid: user.uid,
            uri: user.photoURL,
            createdAt: serverTimestamp(),
          });

        } catch (error) {
          alert(error);
        }
      };
      
  return (
    
       
 <section className="header1">
       
    
<nav>
<div className='userrr'>
 {user ? (<div className='userr'>


        <p>{user.displayName} <br /> <button style={{color:"white"}} onClick={logoutHandler}>sign Out</button></p>
        
        <div className='photooo'> <img className="photoo" src={user.photoURL} alt="user" />
       
        </div>
    </div>
 ):(<div>login Please!</div>)}
     
        </div>
    {/* <a href="index.html"><img src="image/logo.png" alt='logo'/></a> */}
<div className="nav-links" id="navLinks">
    <i className="fa-solid fa-xmark" style={{color:"white"}} onClick={hideMenu}></i>
    <ul>
    <li><Link to="/">HOME</Link> </li>
    <li><Link to="/About">About</Link> </li>
    <li><Link to="/Contact">Contact</Link> </li>
    <li><Link to="/Subjects">Subjects</Link></li>
</ul>

</div>
<i className="fa-solid fa-bars" onClick={showMenu}></i>
</nav>
<button className='hidden' onClick={submitHandler}></button>
</section>

  )
}

export default header