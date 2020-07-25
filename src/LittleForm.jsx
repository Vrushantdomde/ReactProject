import React, { useState } from 'react'
// Basic Form , MOre Advanced code is in BigForm.jsx
var LittleForm = () => {
    let [Fname, chgHead] = useState('');
    let chgFName = (ipText) => {
        chgHead(ipText.target.value);
    }

    let [Lname,chgHead1] = useState('');
    let chgLName = (ipText) =>{
           chgHead1(ipText.target.value);
    }


    let [FirstName, DisplayFName] = useState('');
    let [LastName, DisplayLName] = useState('');
    let OnSubmit = (event) =>{
        event.preventDefault(); // To Stop Form Default bahaviour like refreshing page after submit
         DisplayFName(Fname);
         DisplayLName(Lname);
    }
    return (
        <>
        <form onSubmit={OnSubmit}>
            <div className="centDiv">
                <h1 className="head">Hello {FirstName} {LastName}</h1>
                <input className="styleip" type="text" placeholder="Enter First Name " onChange={chgFName} value={Fname}></input>
                <input className="styleip" type="text" placeholder="Enter Last Name " onChange={chgLName} value={Lname}></input>
                <button type="submit" className="btn"> Click Me  👍</button>
            </div>
        </form>

        </>
    )
}

export default LittleForm;