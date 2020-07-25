import React from 'react';
// " ... " this is spread operator
var Spread = ()=>{

    // 1st use in array
    var name = ['vrush','Domde']
    var vrushInfo = [17,...name,18,'male']   // to concatinate array in another array

    // 2nd use in array
    var clgInfo = ['IT','3rd year',86]
    var allInfo = [...vrushInfo,...clgInfo] // to join two or more array

    // 3rd use in object
    var info = {
        name: 'vrushant',
        surname : 'Domde',
        Age : 18,
        Gender : 'male'
    }

    var BioData = {
        mail : 'vrushantdomde@gmail.com',
        phone : 9284802170,
        ...info,
        field : "IT",
    }
    console.log(BioData);
     
    // 4th in object destructing
    var [field,...otherInfo] = clgInfo;
    return(
        <>
        {allInfo.map((value,index) => {
              return(<h1>{index+1}   :   {value}</h1>)
        })}
        <hr></hr>
        <h1>field = {field}</h1>
        <hr></hr>
        {otherInfo.map((value,index) => {
              return(<h1>{index+1}   :   {value}</h1>)
        })}
        </>
    )
}

export default Spread;