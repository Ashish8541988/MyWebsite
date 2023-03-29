import React from 'react'
import { app } from './firebase'
import { useState,useEffect} from 'react';
import { createUserWithEmailAndPassword, getAuth,onAuthStateChanged,updateProfile} from 'firebase/auth';
import { getFirestore, addDoc, collection, serverTimestamp,} from "firebase/firestore";







const db = getFirestore(app);
 const auth=getAuth(app);
  

export const Signup = () => {
    const[Name,setdisplayName]=useState("");
    const[user,setuser]=useState("");
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[prrovider,setprrovider]=useState("");
    
  
    
         console.log(Name)
    
    
    const loginHandler=async(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    
  user = userCredential.user;
  prrovider=user.providerData[0].providerId
   setprrovider(prrovider)
   setuser(user)
   console.log(user)



   
    updateProfile(auth.currentUser, {
        displayName: Name, photoURL: "https://static.vecteezy.com/system/resources/thumbnails/013/042/571/small/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg"
      }).then(() => {
        addDoc(collection(db, "User"), {
           
            Name:Name,
            uri: user.photoURL,
            email:user.email,
            createdAt: serverTimestamp(),
          });
          
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
       alert(error)
      });
    }
    // ...
  )
  .catch((error) => {
    alert("please fill correct email id")

    // ..
  });
    }
   
   
   
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (data) => {
        setuser(data);
      });
     return () => {
       unsubscribe();
       
     }
   }, [])
   
   
    
  return (
   <>
        <div className='userdetail'>
          <p>Name</p>
        <input type="name" placeholder="Enter your name" id='sign' className='iinput'value={Name} onChange={(e) => setdisplayName(e.target.value)}></input>
        <p>Email</p>
        <input type="email" placeholder="Enter your email" className='iinput'value={email} onChange={(e) => setemail(e.target.value)}></input>
        <p>Password</p>
        <input type ="password" placeholder='Enter your password' className='iinput' value={password} onChange={(e) => setpassword(e.target.value)}></input>
        </div>
        <div className='signIn'>
            <button className='restbtn' id='signup' onClick={loginHandler}>Sign Up</button>
            </div>
            </>
  )
}
