import React from 'react'
import { Link } from 'react-router-dom'

const Member = ({name}) => {
  return (
    <div className="subjects-col">
            
    <h3>{name}</h3>
    
    <Link to="/Subjects"><pre style={{color:"black"}}>Download Question Paper</pre></Link>
</div>
  )
}
const MMM=({name,src,role})=>{
    return(
        <div className="campus-col">
        <img src={src} alt="our collage"/>
        <div className="layer">
            <h3>{name}</h3>
            <br/>
            <h4>{role}</h4>

        </div>
        </div>
    )
}

export {MMM,Member}