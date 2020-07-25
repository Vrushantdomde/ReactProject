import React, { useState } from 'react';

let Clock = () => {
//    let Time = new Date().toLocaleTimeString();
//    let [cTime,getCurTime] = useState(Time);             

//    let curTime = () =>
//    {
//        getCurTime(new Date().toLocaleTimeString());
//    }
  
//     setInterval(curTime,1000);
let [cTime,getCurTime] = useState(new Date().toLocaleTimeString())
 setInterval(()=>{getCurTime(new Date().toLocaleTimeString())},1000);  // In ONe Line 
 var name = "vrushant"

     let [curname,ChangeName]=useState(name)
     let chgName = () =>
     {
         name="vedant"
         ChangeName(name);
         console.log(name);
     } 
    return (
        <>
            <div className="container">
                <h1 style={{fontSize:'5rem' ,textShadow: '2px 4px 10px rgb(251, 255, 0)'}}> Digital Clock</h1>
                <h1 style={{fontSize:'3rem' , padding: '5rem'}}>{cTime}</h1>

                <h5>i am {curname} , my full name is {curname} domde . my name is very hard to talk which is {curname}. </h5>
                
                <button onClick={chgName}>Change Name</button>              
            </div>
        </>

    )

}

export default Clock; 

 