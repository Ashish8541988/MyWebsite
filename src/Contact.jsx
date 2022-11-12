import React from 'react'
import { useState} from 'react';
import { app } from './firebase'
import { getFirestore, addDoc, collection, serverTimestamp,} from "firebase/firestore";


const db=getFirestore(app);
function Contact() {
const[suggestion,setsuggestion]=useState({
    Name:"",
    email:"",
    subject:"",
    message:""
})
let name,value;
const postdata=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setsuggestion({...suggestion,[name]:value})

}

const post=async(e)=>{
   e.preventDefault();
   const {Name,email,subject,message}=suggestion;
   if (Name && email && subject && message){
   
    try {
        await addDoc(collection(db, "Suggestion"), {
            name: Name,
            email: email,
            subject:subject,
            message:message,
            createdAt: serverTimestamp(),
          });

        
    } catch (error) {
        alert(error)
        
    }
    if(post){
        alert("message sent")
        setsuggestion({
            Name:"",
            email:"",
            subject:"",
            message:""

        })
    } 
}
else{
    alert("please fill the data")
}
}
  return (
    <div>
        <>
      <section className="location">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6855.0043997875555!2d78.1278467707175!3d30.788548036710424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908b995b02ff9a1%3A0x64e8b4c8b59ff67e!2sNaugaon%2C%20Uttarakhand%20249171!5e0!3m2!1sen!2sin!4v1656337525378!5m2!1sen!2sin" title='this is map'></iframe>
</section>
<section className="contact-us">
<div className="row">
    <div className="contact-col">
        <div>
            <i className="fa-solid fa-house"></i>
            <span>
                <h5>Naugaon, Uttarkashi, 20249171</h5>
                <p>Uttrakhand, India</p>
            </span>
        </div>
        <div>
            <i className="fa-solid fa-phone"></i>
            <span>
                <h5>+9368041369</h5>
                <p>Sunday to saturday, 5 to 8pm</p>
            </span>
        </div>
        <div>
            <i className="fa-solid fa-envelope-open-text"></i>
            <span>
                <h5>ashisharya8541988@gmail.com</h5>
                <p>Email us your query</p>
            </span>
        </div>
    </div>
    <div className="contact-col">
        <form onSubmit={post}>
            <input type="text" name="Name" placeholder="Enter your name" value={suggestion.Name} onChange={
            postdata} required/>
            <input type="email" name="email" placeholder="Enter your email address"  value={suggestion.email} onChange={
            postdata} required/>
            <input type="text" name="subject" placeholder="Enter your subject" value={suggestion.subject} onChange={postdata} required/>
            <textarea  rows="8" name="message" placeholder="Message" value={suggestion.message} onChange={postdata} required></textarea>
            <button type="submit" className="hero-btn red-btn" >Send Me Message</button>
        </form>
    </div>

</div>
</section>
</>
       
    </div>
  )
}

export default Contact;