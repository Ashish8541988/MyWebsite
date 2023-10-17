import React from 'react'
import { First } from "./First";

function about(user1) {
  const user=user1.user

  return (
    <div>
      {user?(<section className="about-us">
    <div className="row">
        <div className="about-col">
<h1>We provide all content free of cost</h1>
<p>our team is providing trusted and verified exam papers for the students of Electronics and Communication Department of any engineering college, as we have spent more than 2 years here and found that it is more easier for the students to perform well in exams if, can get the previous year papers, also as our college is an autonomous institute and we people don't get previous year papers like other universities , so taking these things in mind me, Ashish Arya has developed this site with the help of my batchmates Himanshu sanwal, Aman Nakoti, Abhikalp Mishra. Here you can get the exam papers of previous years easily and also it would be helpful for you people. students of electronics and communication department of any engineering college can get profit from this site as it would be free of cost and far better than spending your money on buying sample papers for the same purpose. Giving best wishes for your future I just want to conclude by saying that grab the opportunity you get at any moment and we are also providing you an opportunity in a way possible.   </p>
<a href='./Subjects' className="hero-btn red-btn">EXPLORE NOW</a>
        </div>
        <div className="about-col">
<img src="image/pauri2.jpg" alt='Me and my friend'/>
        </div>
    </div>

</section>):(<First/>)}
      

     

    </div>
  )
}

export default about