import React from 'react'
import Heading from './Heading'
function Gallery()
{
    var img1 = "https://picsum.photos/200/350"

    var img2 = "https://picsum.photos/250/300"
    
    var img3 = "https://picsum.photos/200/250"

   return(
       <>
        <a href="basicReact.html">Basic React</a>
    <Heading/>
 {/* we use className instead of class in React because class keyword is reserved alredy in React */}
   <div className="image">
  <img src="https://picsum.photos/250/200" alt="random pics"/>
  <img src={img1} alt="random pics"/>
  <img src={img2} alt="random pics"/>
  <img src={img3} alt="random pics"/>
  </div>
  </>
   )
   
 
}

export default Gallery;