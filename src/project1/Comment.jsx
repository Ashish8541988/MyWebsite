
import React from 'react'
const Comment = ({text,uri,Name,rating}) => {
    var rate=parseInt(rating)
    const Star1=()=>{
        
        
        if(rate===1){
            return(
                <i className="fa-solid fa-star"id="star1"></i>)
    
        }
        else if (rate===2){
            return(
                <>
                <i className="fa-solid fa-star"id="star1"></i>
                <i className="fa-solid fa-star"id="star1"></i>
                </>
             )
        }
        else if (rate===3){
            return(
                <>
                <i className="fa-solid fa-star"id="star1"></i>
                <i className="fa-solid fa-star"id="star1"></i>
                <i className="fa-solid fa-star"id="star1"></i>
                </>
             )
        }
        else if (rate===4){
            return(
                <>
                <i className="fa-solid fa-star"id="star1"></i>
                <i className="fa-solid fa-star"id="star1"></i>
                <i className="fa-solid fa-star"id="star1"></i>
                <i className="fa-solid fa-star"id="star1"></i>
                </>
             )
        }
        else if (rate===5){
            return(
                <>
                <i className="fa-solid fa-star"id="star1"></i>
                <i className="fa-solid fa-star"id="star1"></i>
                <i className="fa-solid fa-star"id="star1"></i>
                <i className="fa-solid fa-star"id="star1"></i>
                <i className="fa-solid fa-star"id="star1"></i>
                </>
             )
        }
        else {
            return(
            <>
                <i className="fa-solid fa-star"id="star1"></i>
                <i className="fa-solid fa-star"id="star1"></i>
                <i className="fa-solid fa-star"id="star1"></i>
                <i className="fa-solid fa-star"id="star1"></i>
                <i className="fa-solid fa-star"id="star1"></i>
                </>
                )
        }
        
    }     
    Star1();
    return (
        <div className="test-col">
       <img src={uri} alt="user"/>
       <h5>{Name}</h5>
       <>
       <Star1/>
       </>
           <p>{text}</p>
       </div>
      
    )
  }
  
  export default Comment