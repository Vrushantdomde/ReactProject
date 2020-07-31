import React from 'react';
import Common from './FCommon';
import web from '../src/images/back4.jpg';
let Home = () => {

    return (
        <>
           <Common
            name="Welcome To Home Page Of"
             imgsrc={web} 
             visit="/service"
              btname="Get Started"/>
        </>
    )
}

export default Home;