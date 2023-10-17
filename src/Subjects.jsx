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

// import Microe1 from './Documents/mc1st.pdf';
// import Microe2 from './Documents/mc2nd.pdf';
// import Microe3 from './Documents/mc3rd.pdf';

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

function download(name,link){
    let alink = document.createElement('a');
            alink.href = name;
            alink.download = link;
            alink.click();
}









function Subjects(user1) {
    const user=user1.user
    
  return (
    <div>{user ?(<>
        <section className="Subjects">
            <h1>Electronics Subjects</h1>
            <p>Download the Previous Year Question Paper</p>
            <div className="row">
               <Subject
               name={"Communcation"}
               I={()=>(download(Cs1,'./Documents/cs1st.pdf'))}
               II={()=>(download(Cs2,'./Documents/cs2nd.pdf'))}
               III={()=>(download(Cs3,'./Documents/cs3rd.pdf'))}
               />
                <div className="subjects-col1">
                    <h3>ANALOG CIRCUIT</h3>
                    <pre className="correct">Click her to download<br/> CT-1 Exam Paper: <br/>    <button className="hero-btn red-btn" onClick={()=>(download(Analog1,'./Documents/analog1st.pdf'))}>DOWNLOAD</button></pre><br/>
                        <pre className="correct">Click her to download <br/>CT-2 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={()=>(download(Analog2,'./Documents/analog2nd.pdf'))}>DOWNLOAD</button></pre><br/>
                            <pre className="correct">Click her to download<br/> CT-3 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={()=>(download(Analog3,'./Documents/analog3rd.pdf'))}>DOWNLOAD</button></pre><br/>
                            <pre className="correct">Click her to download<br/> 2022 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={()=>(download(Analog4,'./Documents/analog4th.pdf'))}>DOWNLOAD</button></pre><br/>
                </div>
                <Subject
                name={"ELECTROMAGNETIC FIELD THEORY"}
                I={()=>(download(Emft1,'./Documents/emft1st.pdf'))}
                II={()=>(download(Emft2,'./Documents/emft2nd.pdf'))}
                III={()=>(download(Emft3,'./Documents/emft3rd.pdf'))}
                />
               
            </div>
        <div className="row2">
                <Subject
                name={" OBJECT-ORIENTED PROGRAMING"}
                I={()=>(download(Oop1,'./Documents/op1st.pdf'))}
                II={()=>(download(Oop2,'./Documents/op2nd.pdf'))}
                III={()=>(download(Oop3,'./Documents/op3rd.pdf'))}
                />
               
           
                <Subject
                name={"MICROPROCESSOR AND MICROCONTROLLER"}
                I={()=>(download(Micro1,'./Documents/micro1st.pdf'))}
                II={()=>(download(Micro2,'./Documents/micro2nd.pdf'))}
                III={()=>(download(Micro3,'./Documents/micro3rd.pdf'))}
                />
               
                <Subject
                name={"PYTHON PROGRAMING"}
                I={()=>(download(Python1,'./Documents/Python 1.pdf'))}
                II={()=>(download(Python2,'./Documents/Python 2.pdf'))}
                III={()=>(download(Python3,'./Documents/Python 3.pdf'))}
                />
                
        
        </div>
        <div className='row2'>
        
                <Subject
                name={"INTEGRATED  CIRCUITS"}
                I={()=>(download(IC1,'./Documents/IC 1.pdf'))}
                II={()=>(download(IC2,'./Documents/IC 2.pdf'))}
                III={()=>(download(IC3,'./Documents/IC 3.pdf'))}
                />
                
                <Subject
                name={"ANTENNA AND WAVE PROPAGATION"}
                I={()=>(download(Anteena1,'./Documents/Anteena 1.pdf'))}
                II={()=>(download(Anteena2,'./Documents/Anteena 2.pdf'))}
                III={()=>(download(Anteena3,'./Documents/Anteena 3.pdf'))}
                />
            
        
        </div>
        <div className='row3'>
                <Subject
                name={"PRINCIPLES OF MANAGMENT"}
                I={()=>(download(pom, './Documents/pom1.pdf'))}
                II={()=>(download(pom2,'./Documents/pom 2.pdf'))}
                III={()=>(download(pom3,'./Documents/pom 3.pdf'))}
                />
                
                <Subject
                name={"EMBEDDED SYSTEM"}
                I={()=>(download(embedded, './Documents/embedded1.pdf'))}
                II={()=>(download(embedded2, './Documents/embedded 2.pdf'))}
                III={()=>(download(embedded3, './Documents/embedded 3.pdf'))}
                />
                 <Subject
                name={"MICROELECTRONICS"}
                I={()=>(download(Micro1,'./Documents/mc1st.pdf'))}
                II={()=>(download(Micro1,'./Documents/mc2nd.pdf'))}
                III={()=>(download(Micro2,'./Documents/mc3rd.pdf'))}
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