import React from 'react'
import { useState } from 'react'
import {Signup} from "./Signup"
import {Login} from "./Login"
import { app } from './firebase'
import { getAuth, GoogleAuthProvider,signInWithPopup,}  from "firebase/auth";



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

  return (
    <div className='loginpage'>
    <>
  <div className='abc'>
    <>
      {page}
      </>
      <br></br>
      <button className='create' onClick={signup} style={{backgroundColor:"transparent",color:"white",borderColor:"wheat",cursor:"pointer"}}>Create An Account</button>
      <div className='google'>
          <button className='googlebtn' onClick={loginHandler}>SIGN IN WITH GOOGLE</button>
      </div>
      
  </div>
  
  </>
    
  </div>
  )
}
