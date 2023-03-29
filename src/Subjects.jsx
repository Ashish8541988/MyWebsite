import React from 'react'
import Emft1 from './Documents/emft1st.pdf';
import Emft2 from './Documents/emft2nd.pdf';
import Emft3 from './Documents/emft3rd.pdf';
import Analog1 from './Documents/analog1st.pdf';
import Analog2 from './Documents/analog2nd.pdf';
import Analog3 from './Documents/analog3rd.pdf';
import Analog4 from './Documents/analog4th.pdf';
import Micro1 from './Documents/micro1st.pdf';
import Micro2 from './Documents/micro2nd.pdf';
import Micro3 from './Documents/micro3rd.pdf';
import Oop1 from './Documents/op1st.pdf';
import Oop2 from './Documents/op2nd.pdf';
import Oop3 from './Documents/op3rd.pdf';
import Cs1 from './Documents/cs1st.pdf';
import Cs2 from './Documents/cs2nd.pdf';
import Cs3 from './Documents/cs3rd.pdf';
import IC1 from './Documents/IC 1.pdf';
import IC2 from './Documents/IC 2.pdf';
import IC3 from './Documents/IC 3.pdf';

import Microe1 from './Documents/mc1st.pdf';
import Microe2 from './Documents/mc2nd.pdf';
import Microe3 from './Documents/mc3rd.pdf';

import Anteena1 from './Documents/Anteena 1.pdf';
import Anteena2 from './Documents/Anteena 2.pdf';
import Anteena3 from './Documents/Anteena 3.pdf';

import Python1 from './Documents/Python 1.pdf';
import Python2 from './Documents/python 2.pdf';
import Python3 from './Documents/python 3.pdf';

import embedded from './Documents/embedded1.pdf';
import embedded2 from './Documents/embedded 2.pdf';
import embedded3 from './Documents/embedded 3.pdf';

import pom from './Documents/pom1.pdf';
import pom2 from './Documents/pom 2.pdf';
import pom3 from './Documents/pom 3.pdf';

import { Subject } from './componant';
import { First } from "./First";
import { useState ,useEffect} from 'react';
import { onAuthStateChanged, getAuth,}  from "firebase/auth";
import { app } from './firebase';


const auth=getAuth(app)
function Emft11(){
    let alink = document.createElement('a');
            alink.href = Emft1;
            alink.download = './Documents/emft1st.pdf';
            alink.click();
}
function Embedded1(){
    let alink = document.createElement('a');
            alink.href = embedded;
            alink.download = './Documents/embedded1.pdf';
            alink.click();
}
function Embedded2(){
    let alink = document.createElement('a');
            alink.href = embedded2;
            alink.download = './Documents/embedded 2.pdf';
            alink.click();
}
function Embedded3(){
    let alink = document.createElement('a');
            alink.href = embedded3;
            alink.download = './Documents/embedded 3.pdf';
            alink.click();
}
function Pom(){
    let alink = document.createElement('a');
            alink.href = pom;
            alink.download = './Documents/pom1.pdf';
            alink.click();
}
function Pom22(){
    let alink = document.createElement('a');
            alink.href = pom2;
            alink.download = './Documents/pom 2.pdf';
            alink.click();
}
function Pom33(){
    let alink = document.createElement('a');
            alink.href = pom3;
            alink.download = './Documents/pom 3.pdf';
            alink.click();
}
function Cs11(){
    let alink = document.createElement('a');
            alink.href = Cs1;
            alink.download = './Documents/cs1st.pdf';
            alink.click();
}
function Cs22(){
    let alink = document.createElement('a');
            alink.href = Cs2;
            alink.download = './Documents/cs2nd.pdf';
            alink.click();
}
function Cs33(){
    let alink = document.createElement('a');
            alink.href = Cs3;
            alink.download = './Documents/cs3rd.pdf';
            alink.click();
}
function Emft22(){
    let alink = document.createElement('a');
            alink.href = Emft2;
            alink.download = './Documents/emft2nd.pdf';
            alink.click();
}
function Emft33(){
    let alink = document.createElement('a');
            alink.href = Emft3;
            alink.download = './Documents/emft3rd.pdf';
            alink.click();
}
function Analog11(){
    let alink = document.createElement('a');
            alink.href = Analog1;
            alink.download = './Documents/analog1st.pdf';
            alink.click();
}
function Analog22(){
    let alink = document.createElement('a');
            alink.href =Analog2;
            alink.download = './Documents/analog2nd.pdf';
            alink.click();
}
function Analog33(){
    let alink = document.createElement('a');
            alink.href = Analog3;
            alink.download = './Documents/analog3rd.pdf';
            alink.click();
}
function Analog44(){
    let alink = document.createElement('a');
            alink.href = Analog4;
            alink.download = './Documents/analog4th.pdf';
            alink.click();
}
function Micro11(){
    let alink = document.createElement('a');
            alink.href = Micro1;
            alink.download = './Documents/micro1st.pdf';
            alink.click();
}
function  Micro22(){
    let alink = document.createElement('a');
            alink.href = Micro2;
            alink.download = './Documents/micro2nd.pdf';
            alink.click();
}
function  Micro33(){
    let alink = document.createElement('a');
            alink.href = Micro3;
            alink.download = './Documents/micro3rd.pdf';
            alink.click();
}
function  Oop11(){
    let alink = document.createElement('a');
            alink.href = Oop1;
            alink.download = './Documents/op1st.pdf';
            alink.click();
}
function  Oop22(){
    let alink = document.createElement('a');
            alink.href = Oop2;
            alink.download = './Documents/op2nd.pdf';
            alink.click();
}
function  Oop33(){
    let alink = document.createElement('a');
            alink.href = Oop3;
            alink.download = './Documents/op3rd.pdf';
            alink.click();
}
function  Python11(){
    let alink = document.createElement('a');
            alink.href = Python1;
            alink.download = './Documents/Python 1.pdf';
            alink.click();
}
function  Python22(){
    let alink = document.createElement('a');
            alink.href = Python2;
            alink.download = './Documents/Python 2.pdf';
            alink.click();
}
function  Python33(){
    let alink = document.createElement('a');
            alink.href = Python3;
            alink.download = './Documents/Python 3.pdf';
            alink.click();
}
function  Anteena11(){
    let alink = document.createElement('a');
            alink.href = Anteena1;
            alink.download = './Documents/Anteena 1.pdf';
            alink.click();
}
function  Anteena33(){
    let alink = document.createElement('a');
            alink.href = Anteena3;
            alink.download = './Documents/Anteena 3.pdf';
            alink.click();
}
function  Anteena22(){
    let alink = document.createElement('a');
            alink.href = Anteena2;
            alink.download = './Documents/Anteena 2.pdf';
            alink.click();
}
function  IC11(){
    let alink = document.createElement('a');
            alink.href = IC1;
            alink.download = './Documents/IC 1.pdf';
            alink.click();
}
function  IC22(){
    let alink = document.createElement('a');
            alink.href = IC2;
            alink.download = './Documents/IC 2.pdf';
            alink.click();
}
function  IC33(){
    let alink = document.createElement('a');
            alink.href = IC3;
            alink.download = './Documents/IC 3.pdf';
            alink.click();
}
function  Microe11(){
    let alink = document.createElement('a');
            alink.href = Micro1;
            alink.download = './Documents/mc1st.pdf';
            alink.click();
}function  Microe22(){
    let alink = document.createElement('a');
            alink.href = Micro2;
            alink.download = './Documents/mc2nd.pdf';
            alink.click();
}function  Microe33(){
    let alink = document.createElement('a');
            alink.href = Micro3;
            alink.download = './Documents/mc3rd.pdf';
            alink.click();
}
// function  download({name,link}){
//     let alink = document.createElement('a');
//             alink.href = {name};
//             alink.download = {link};
//             alink.click();
// }






function Subjects() {
    const [user ,setuser] =useState(false);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (data) => {
          setuser(data);
        },[]);  
        return () => {
            unsubscribe();
          }; 
        });
    
  return (
    <div>{user ?(<>
        <section className="Subjects">
            <h1>Electronics Subjects</h1>
            <p>Download the Previous Year Question Paper</p>
            <div className="row">
               <Subject
               name={"Communcation"}
               I={Cs11}
               II={Cs22}
               III={Cs33}
               />
                <div className="subjects-col1">
                    <h3>ANALOG CIRCUIT</h3>
                    <pre className="correct">Click her to download<br/> CT-1 Exam Paper: <br/>    <button className="hero-btn red-btn" onClick={Analog11}>DOWNLOAD</button></pre><br/>
                        <pre className="correct">Click her to download <br/>CT-2 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={Analog22}>DOWNLOAD</button></pre><br/>
                            <pre className="correct">Click her to download<br/> CT-3 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={Analog33}>DOWNLOAD</button></pre><br/>
                            <pre className="correct">Click her to download<br/> 2022 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={Analog44}>DOWNLOAD</button></pre><br/>
                </div>
                <Subject
                name={"ELECTROMAGNETIC FIELD THEORY"}
                I={Emft11}
                II={Emft22}
                III={Emft33}
                />
               
            </div>
        <div className="row2">
                <Subject
                name={" OBJECT-ORIENTED PROGRAMING"}
                I={Oop11}
                II={Oop22}
                III={Oop33}
                />
               
           
                <Subject
                name={"MICROPROCESSOR AND MICROCONTROLLER"}
                I={Micro11}
                II={Micro22}
                III={Micro33}
                />
               
                <Subject
                name={"PYTHON PROGRAMING"}
                I={Python11}
                II={Python22}
                III={Python33}
                />
                
        
        </div>
        <div className='row2'>
        
                <Subject
                name={"INTEGRATED  CIRCUITS"}
                I={IC11}
                II={IC22}
                III={IC33}
                />
                
                <Subject
                name={"ANTENNA AND WAVE PROPAGATION"}
                I={Anteena11}
                II={Anteena22}
                III={Anteena33}
                />
            
        
        </div>
        <div className='row3'>
                <Subject
                name={"PRINCIPLES OF MANAGMENT"}
                I={Pom}
                II={Pom22}
                III={Pom33}
                />
                
                <Subject
                name={"EMBEDDED SYSTEM"}
                I={Embedded1}
                II={Embedded2}
                III={Embedded3}
                />
                 <Subject
                name={"MICROELECTRONICS"}
                I={Microe11}
                II={Microe22}
                III={Microe33}
                />
        
        </div>
        </section>
       
        <section className="facalities">
            <h3> facalities</h3>
            <p> Blank space for editing </p>
        <div className="row">
            <div className="facalities-col">
                <img src="image/books1.jpg" alt='book'/>
        <h3>All books related to course here</h3>
        <p>for your good practice</p>
            </div>
            <div className="facalities-col">
                <img src="image/books3.jpg" alt='book'/>
        <h3>All books related to course here</h3>
        <p>for your good practice</p>
            </div>
            <div className="facalities-col">
                <img src="image/books2.webp" alt='book'/>
        <h3>All books related to course here</h3>
        <p>for your good practice</p>
            </div>
        </div>
        </section>
        </>
         ):(<First/>)}

 
    </div>
  )
}

export default Subjects;