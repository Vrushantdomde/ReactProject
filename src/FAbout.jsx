import React from 'react';
import Common from './FCommon'
import web from '../src/images/back4.jpg';
let About = () =>{

     return (
         <>
        <Common
            name="Welcome To About Page Of"
             imgsrc={web} 
             visit="/contact"
              btname="Contact Us"/>
         </>
     )
}

export default About;