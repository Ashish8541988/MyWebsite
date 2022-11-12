import React from 'react'
import { useState,useEffect } from 'react'
import {Signup} from "./Signup"
import {Login} from "./Login"
import { app } from './firebase'
import { Navigate } from 'react-router-dom'
import { getAuth, GoogleAuthProvider,onAuthStateChanged,signInWithPopup,}  from "firebase/auth";



const auth=getAuth(app);
const loginHandler=()=>{
  const provider = new GoogleAuthProvider(auth);
  signInWithPopup(auth, provider);
  
 
}

export const First = () => {

    const [page,setpage]=useState(<Login/>);
    const signup=()=>{
      setpage(<Signup/>)
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
    <div className='loginpage'>
    {user?(<div><Navigate to="/Home"/></div>):(<>
  <div className='abc'>
    <>
      {page}
      </>
      <br></br>
      <button onClick={signup} style={{backgroundColor:"transparent",color:"white",borderColor:"wheat",cursor:"pointer"}}>Create An Account</button>
      <div className='google'>
          <button className='googlebtn' onClick={loginHandler}>SIGN IN WITH GOOGLE</button>
      </div>
      
  </div>
  
  </>)}
    
  </div>
  )
}
