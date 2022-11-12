import React from "react";
import { useState,useEffect,useRef } from 'react';
import { app } from '../firebase';
import { onAuthStateChanged, getAuth,}  from "firebase/auth";
import { getFirestore, addDoc, collection, serverTimestamp, onSnapshot, query, orderBy,} from "firebase/firestore";
import Comment from "./Comment";





const auth=getAuth(app);
const db = getFirestore(app);

function btn(){
    let alink=document.createElement('a');
    alink.href="./Subjects";
    alink.click();
}

//rating function


function Home() {
    const custumElement1=useRef(null)
    const custumElement2=useRef(null)
    const custumElement3=useRef(null)
    const custumElement4=useRef(null)
    const custumElement5=useRef(null)
let a=0
const[rate,setrating]=useState("");
const star1=()=>{
    
    
    custumElement1.current.style.color="yellow"
     a=1
    setrating(a)
}
const star2=()=>{
    a=2;
    setrating(a)
    custumElement1.current.style.color="yellow"
    custumElement2.current.style.color="yellow"

}

const star3=()=>{
    a=3;
    setrating(a)
    custumElement1.current.style.color="yellow"
    custumElement2.current.style.color="yellow"
    custumElement3.current.style.color="yellow"
}

const star4=()=>{
    a=4;
    setrating(a)
    custumElement1.current.style.color="yellow"
    custumElement2.current.style.color="yellow"
    custumElement3.current.style.color="yellow"
    custumElement4.current.style.color="yellow"
}

const star5=()=>{
    a=5;
    setrating(a)
    custumElement1.current.style.color="yellow"
    custumElement2.current.style.color="yellow"
    custumElement3.current.style.color="yellow"
    custumElement4.current.style.color="yellow"
    custumElement5.current.style.color="yellow"
}





    //Rating end

const [comments,setcomments]=useState([])
const [comment,setcomment]=useState("");
const [user ,setuser] =useState(false);
const submitHandlerr = async (e) => {
    e.preventDefault();
setcomment("");
setrating("")
    try {

      await addDoc(collection(db, "Comments"), {
        rating:rate,
        text:comment,
        Name:user.displayName,
        uri: user.photoURL,
        email:user.email,
        createdAt: serverTimestamp(),
      });

    } catch (error) {
      alert(error);
    }
  };
  
  useEffect(() => {
    const q = query(collection(db, "Comments"), orderBy("createdAt", "asc"));

    const unsubscribe = onAuthStateChanged(auth, (data) => {
      setuser(data);
    },[]);

    const unsubscribeForComment = onSnapshot(q, (snap) => {
      setcomments(
        snap.docs.map((item) => {
          const id = item.id;
          return { id, ...item.data() };
        })
      );
    });

    return () => {
      unsubscribe();
      unsubscribeForComment();
    };
  }, []);
 
  return (
    <div>
  
   <div className="text-box">
    <h1>B.TECH ELECTRONICS AND COMMUNICATION QUESTION PAPER BANK</h1>
    
    <p>A platform which provides you with the number of exam papers for Electronics and Communication Engineering subjects at the same place in a single click.</p>
    <h3> GETTING DIFFICULTY IN PASSING EXAMS???</h3>
   <h3> HAVING LESS TIME FOR THE PREPARATION OF EXAMS???</h3>
   <h3>WANNA DO WELL IN EXAMS BY JUST GIVING A FEW HOURS OF STUDY???</h3> 
   <h3>   NO NEED TO WORRY NOW!!</h3>
  
    <a href="./Contact" className="hero-btn"> Visit Us To Know More</a>
</div>
    <div className=""name='daily'>
      <section className="Subjects">
    <h1>Electronics Subjects</h1>
    <p>Download the Previous Year Question Paper</p>
    <div className="row">
        <div className="subjects-col" onClick={btn}>
            <h3>COMMUNICATION SYSTEM</h3>
            <pre>Download Question Paper</pre>
             {/* -- <button></button>   <a href="Our Subjects.html">Go</a> -- */}
        </div>
        <div className="subjects-col" onClick={btn}>
            <h3>ANALOG CIRCUIT</h3>
            <pre>Download Question Paper</pre>
        </div>
        <div className="subjects-col" onClick={btn}>
            <h3>ELECTROMAGNETIC FIELD THEORY</h3>
            <pre>Download Question Paper</pre>
        </div>
        <div className="subjects-col" onClick={btn}>
        <h3>OBJECT-ORIENTED PROGRAMING</h3>
        <pre>Download Question Paper</pre>
    </div>
    </div>
<div className="row2">
    <div className="subjects-col" onClick={btn}>
        <h3>MICROPROCESSOR AND MICROCONTROLER</h3>
        <pre>Download Question Paper</pre>
    </div>
   
    <div className="subjects-col" onClick={btn}>
        <h3>PYTHON PROGRAMING</h3>
        <pre>Download Question Paper</pre>
    </div>
    <div className="subjects-col" onClick={btn}>
        <h3> INTEGRATED  CIRCUITS</h3>
        <pre>Download Question Paper</pre>
    </div>
    <div className="subjects-col" onClick={btn}>
        <h3> EMBEDDED SYSTEM</h3>
        <pre>Download Question Paper</pre>
    </div>
    

</div>
<div className="row3">
<div className="subjects-col" onClick={btn}>
        <h3> PRINCIPLES OF MANAGMENT</h3>
        <pre>Download Question Paper</pre>
    </div>
    <div className="subjects-col" onClick={btn}>
        <h3> ANTENNA AND WAVE PROPAGATION</h3>
        <pre>Download Question Paper</pre>
    </div>
</div>
</section>
{/* -- ------CAMPUS------- -- */}
<section className="campus">
    <h3>OUR TEAM MEMBER'S</h3>
    <p>Blanck space for information</p>
    <div className="campus-row">
        <div className="campus-col">
            <img src="./image/ashish2.jpg" alt="our collage"/>
            <div className="layer">
                <h3>ASHISH ARYA</h3>
    
            </div>
    
        </div>
        <div className="campus-col">
            <img src="./image/himanshu.jpg" alt="our collage"/>
            <div className="layer">
                <h3>HIMANSHU SANWAL</h3>
    
            </div>
    
        </div>
        <div className="campus-col">
            <img src="image/aman.jpg" alt="our collage"/>
            <div className="layer">
                <h3>Aman Nakoti</h3>
    
            </div>
    
        </div>
       
    </div>
</section>
{/* -- --------Facalities--------- -- */}
<section className="facalities">
    <h3> facalities</h3>
    <p> Blank space for editing </p>
<div className="row">
    <div className="facalities-col">
        <img src="image/books1.jpg" alt="our collage"/>
<h3>All books related to course here</h3>
<p>for your good practice</p>
    </div>
    <div className="facalities-col">
        <img src="image/books3.jpg" alt="our collage"/>
<h3>All books related to course here</h3>
<p>for your good practice</p>
    </div>
    <div className="facalities-col">
        <img src="image/books2.webp" alt="our collage"/>
<h3>All books related to course here</h3>
<p>for your good practice</p>
    </div>
</div>
</section>
{/* -- ------test------- -- */}
<section className="test">
    <h3>Rate Us</h3>
    <i className="fa-solid fa-star" id="star1" style={{color:"black"}} ref={custumElement1} onClick={star1}></i>
    <i className="fa-solid fa-star" id="star2" style={{color:"black"}} ref={custumElement2} onClick={star2}></i>
    <i className="fa-solid fa-star" id="star3" style={{color:"black"}} ref={custumElement3} onClick={star3}></i>
    <i className="fa-solid fa-star" id="star4" style={{color:"black"}} ref={custumElement4} onClick={star4}></i>
    <i className="fa-solid fa-star" id="star5" style={{color:"black"}} ref={custumElement5} onClick={star5}></i>
    
    <h3>Add your comment</h3>
    <br/>
    
    <div className="tag">
    <input type="text" placeholder="Enter Name comment" className="input1"value={comment} onChange={(e) => setcomment(e.target.value)}/><br/>
    <button id="svmit" onClick={submitHandlerr} className="mybtn">Submit</button>
    </div>
  
    <h3>Student's Reactions</h3>
    <p>Comment us and share your review about our site.</p>
    <div className="test-row">
    {comments.map((item) => {
        return(
        <Comment 
        rating={item.rating}
        key={item.id}
        text={item.text}
        uri={item.uri}
        Name={item.Name}/>
        )})}
    </div>
    
</section>
{/* -- -------Call To Action------ -- */}
<section className="cta">
    <h1> <br/> "The beautiful thing about learning is that no one can take it away from you."</h1>
    <a href="./Contact" className="hero-btn-1">Contact Us</a>

</section>
    </div> 
    </div>
  )
}
export default Home;

