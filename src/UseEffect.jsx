import React, { useState, useEffect } from 'react';
// Here We are learning the useEffect concept in Hook 
// useEffect call it's callback function to perform some operation after render 
// In Real example ,  we are performing some operation like after clicking on button 
// number will be increment , so if we want that after executing this operation some another 
// operation will execute like show some message  then this time we can use useEffect concept as follow
// note : useEffect will show message (execute operation) even if number will increment or not (onClick operation will execute or not )
//Hope you will understand , let's Use

let UseEffect = () => {
    let [num, setNum] = useState(0);
    let [nums, setNums] = useState(0);

    // useEffect(()=>{
    //     alert("Click Zala 😄"); // This will execute every time render method will called
    // })                          // like after refreshing , clicking on buttons

    // useEffect(()=>{
    //     alert("one time show");  // This will execute only one time after render method called
    // } , [] );                   // Because we are passing empty after callback function
 
    useEffect(()=>{
        alert("only for first button");  // This will execute on first refresh and num button clicked after
                                          // render method called
    },[num])                           // Because we are passing num in list after callback function
   
    return (
        <>
            <center>
                <button onClick={() => { setNum(num++) }}>Click Me 😄 {num}</button> 
                <br/> <br/>
                <button onClick={() => { setNums(nums++) }}>Click Me 😜 {nums}</button>
            </center>

        </>
    )
}

export default UseEffect;