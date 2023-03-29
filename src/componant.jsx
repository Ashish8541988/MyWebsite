import React from 'react'

export const Subject = ({name,I,II,III}) => {
  return (
     <div className="subjects-col1">
            <h3>{name}</h3>
            <pre className="correct">Click her to download<br/> CT-1 Exam Paper: <br/>   <button className="hero-btn red-btn" onClick={I}>DOWNLOAD</button></pre><br/>
                <pre className="correct">Click her to download <br/>CT-2 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={II}>DOWNLOAD</button></pre><br/>
                    <pre className="correct">Click her to download<br/> 2022 Exam Paper:  <br/>   <button className="hero-btn red-btn" onClick={III}>DOWNLOAD</button></pre><br/>
        </div>
  )
}
