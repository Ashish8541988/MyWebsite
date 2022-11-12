import React, { useState,useEffect } from 'react'
import { app } from './firebase'
import { getAuth,onAuthStateChanged, signInWithEmailAndPassword,}  from "firebase/auth";


 

  
const auth=getAuth(app);
  
export const Login =() => {
  

  
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");

  const loginHandler1=()=>{
    signInWithEmailAndPassword(auth,email,password);
    
  }

  const[user,setuser]= useState("");
useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth,(data)=>{
    setuser(data)
    
    return ()=>{
        unsubscribe()
    }
  },[])
}
)

  
  return (
    <>
        <div className='userdetail'>
        <p>Email</p>
        <input type="email" placeholder="Enter your email" className='iinput' value={email} onChange={(e)=>setemail(e.target.value)}></input>
        <p>Password</p>
        <input type ="password" placeholder='Enter your password' value={password} onChange={(e)=>setpassword(e.target.value)} className='iinput'></input>
        </div>
        <div className='signIn'>
            <button className='restbtn' onClick={loginHandler1}>Sign IN</button>
            <button className='restbtn' >LogOut</button> 
    </div>
    </>
    )
   
}
