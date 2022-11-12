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
import Anteena1 from './Documents/Anteena 1.pdf';
import Python1 from './Documents/Python 1.pdf';
import embedded from './Documents/embedded1.pdf';
import pom from './Documents/pom1.pdf';



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
function Pom(){
    let alink = document.createElement('a');
            alink.href = pom;
            alink.download = './Documents/pom1.pdf';
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
function  Anteena11(){
    let alink = document.createElement('a');
            alink.href = Anteena1;
            alink.download = './Documents/Anteena 1.pdf';
            alink.click();
}
function  IC11(){
    let alink = document.createElement('a');
            alink.href = IC1;
            alink.download = './Documents/IC 1.pdf';
            alink.click();
}






function Subjects() {
   
    
  return (
    <div>
        {/* <h1 className='h11'>Our subjects</h1> */}

 <>
<section className="Subjects">
    <h1>Electronics Subjects</h1>
    <p>Download the Previous Year Question Paper</p>
    <div className="row">
        <div className="subjects-col">
            <h3>COMMUNICATION SYSTEM</h3>
            <pre className="correct">Click her to download<br/> CT-1 Exam Paper: <br/>    <button className="hero-btn red-btn" onClick={Cs11}>DOWNLOAD</button></pre><br/>
                <pre className="correct">Click her to download <br/>CT-2 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={Cs22}>DOWNLOAD</button></pre><br/>
                    <pre className="correct">Click her to download<br/> 2022 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={Cs33}>DOWNLOAD</button></pre><br/>
        </div>
        <div className="subjects-col">
            <h3>ANALOG CIRCUIT</h3>
            <pre className="correct">Click her to download<br/> CT-1 Exam Paper: <br/>    <button className="hero-btn red-btn" onClick={Analog11}>DOWNLOAD</button></pre><br/>
                <pre className="correct">Click her to download <br/>CT-2 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={Analog22}>DOWNLOAD</button></pre><br/>
                    <pre className="correct">Click her to download<br/> CT-3 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={Analog33}>DOWNLOAD</button></pre><br/>
                    <pre className="correct">Click her to download<br/> 2022 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={Analog44}>DOWNLOAD</button></pre><br/>
        </div>
        <div className="subjects-col">
            <h3>ELECTROMAGNETIC FIELD THEORY</h3>
            <pre className="correct">Click her to download <br/>CT-1 Exam Paper: <br/>    <button className="hero-btn red-btn" onClick={Emft11}>DOWNLOAD</button></pre><br/>
                <pre className="correct">Click her to download<br/> CT-2 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={Emft22}>DOWNLOAD</button></pre><br/>
                    <pre className="correct">Click her to download<br/> 2022 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={Emft33}>DOWNLOAD</button></pre><br/>
                        
        </div>
        
    </div>
<div className="row2">
   
    <div className="subjects-col">
        <h3>OBJECT-ORIENTED PROGRAMING</h3>
        <pre className="correct">Click her to download<br/> CT-1 Exam Paper: <br/>    <button className="hero-btn red-btn" onClick={Oop11}>DOWNLOAD</button></pre><br/>
            <pre className="correct">Click her to download<br/> CT-2 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={Oop22}>DOWNLOAD</button></pre><br/>
                <pre className="correct">Click her to download <br/>2022 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={Oop33}>DOWNLOAD</button></pre><br/>
    </div>
    <div className="subjects-col">
        <h3>MICROPROCESSOR AND MICROCONTROLLER</h3>
        <pre className="correct">Click her to download <br/>CT-1 Exam Paper: <br/>    <button className="hero-btn red-btn" onClick={Micro11}>DOWNLOAD</button></pre><br/>
            <pre className="correct">Click her to download <br/>CT-2 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={Micro22}>DOWNLOAD</button></pre><br/>
                <pre className="correct">Click her to download <br/> 2022 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={Micro33}>DOWNLOAD</button></pre><br/>
    </div>
    <div className="subjects-col">
        <h3>PYTHON PROGRAMING</h3>
        <pre className="correct">Click her to download<br/> CT-1 Exam Paper: <br/>    <button className="hero-btn red-btn" onClick={Python11}>DOWNLOAD</button></pre><br/>
            <pre className="correct">Click her to download<br/> CT-2 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={Oop22}>DOWNLOAD</button></pre><br/>
                <pre className="correct">Click her to download <br/> 2022 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={Oop33}>DOWNLOAD</button></pre><br/>
    </div>
    

</div>
<div className='row2'>

    <div className="subjects-col">
        <h3>INTEGRATED  CIRCUITS</h3>
        <pre className="correct">Click her to download<br/> CT-1 Exam Paper: <br/>    <button className="hero-btn red-btn" onClick={IC11}>DOWNLOAD</button></pre><br/>
            <pre className="correct">Click her to download<br/> CT-2 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={Oop22}>DOWNLOAD</button></pre><br/>
                <pre className="correct">Click her to download<br/> 2022 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={Oop33}>DOWNLOAD</button></pre><br/>
    </div>
    <div className="subjects-col">
        <h3>ANTENNA AND WAVE PROPAGATION</h3>
        <pre className="correct">Click her to download<br/> CT-1 Exam Paper: <br/>    <button className="hero-btn red-btn" onClick={Anteena11}>DOWNLOAD</button></pre><br/>
            <pre className="correct">Click her to download<br/> CT-2 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={Oop22}>DOWNLOAD</button></pre><br/>
                <pre className="correct">Click her to download<br/> 2022 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={Oop33}>DOWNLOAD</button></pre><br/>
    </div>
    

</div>
<div className='row3'>
<div className="subjects-col">
        <h3>PRINCIPLES OF MANAGMENT</h3>
        <pre className="correct">Click her to download<br/> CT-1 Exam Paper: <br/>    <button className="hero-btn red-btn" onClick={Pom}>DOWNLOAD</button></pre><br/>
            <pre className="correct">Click her to download<br/> CT-2 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={Oop22}>DOWNLOAD</button></pre><br/>
                <pre className="correct">Click her to download<br/> 2022 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={Oop33}>DOWNLOAD</button></pre><br/>
    </div>
    <div className="subjects-col">
        <h3>EMBEDDED SYSTEM</h3>
        <pre className="correct">Click her to download<br/> CT-1 Exam Paper: <br/>    <button className="hero-btn red-btn" onClick={Embedded1}>DOWNLOAD</button></pre><br/>
            <pre className="correct">Click her to download<br/> CT-2 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={Oop22}>DOWNLOAD</button></pre><br/>
                <pre className="correct">Click her to download<br/> 2022 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={Oop33}>DOWNLOAD</button></pre><br/>
    </div>

</div>
</section>
{/* // <!-- ----------Facalities-------- --> */}
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
 
    </div>
  )
}

export default Subjects;