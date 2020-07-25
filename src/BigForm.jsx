import React, { useState } from 'react'

var BigForm = () => {
    let [StudInfo,ChgStudInfo] = useState({
        Fname:'',
        Lname:'',
        Email:''
    });

    
    var inputEvent = (e) => {
        var value = e.target.value;
        var name = e.target.name;
              ChgStudInfo((preValue)=>{    // parameter "preValue" is an object contain previous values of "StudInfo" objects
                    if(name === 'fname')
                    {
                        return({
                           Fname:value,
                           Lname:preValue.Lname,
                           Email:preValue.Email
                        })
                    }
                    else if(name === 'lname')
                    {
                        return({
                            Fname:preValue.Fname,
                            Lname : value,
                            Email:preValue.Email
                        })
                    }
                    else if(name === 'email')
                    {
                        return({
                            Fname:preValue.Fname,
                            Lname:preValue.Lname,
                            Email:value
                        })
                    }
              })   
    } 


    
    var [ShowStudInfo,chgShowStudInfo] = useState({
        ShowFname:'',
        ShowLname:'',
        ShowEmail:''
    });

    let OnSubmit = (e) => {
        e.preventDefault();
        chgShowStudInfo({
            ShowFname: StudInfo.Fname,
            ShowLname: StudInfo.Lname,
            ShowEmail:StudInfo.Email
        });
        alert("Form Submited");

    }
    return (
        <>
            <form onSubmit={OnSubmit}>
                <div className="centDiv">
                    <h1 className="head">Hello {ShowStudInfo.ShowFname} {ShowStudInfo.ShowLname}</h1>
                    <h5><center>{ShowStudInfo.ShowEmail}</center></h5>
                    <input className="styleip" type="text" placeholder="Enter First Name "autoComplete="off" name='fname' onChange={inputEvent} value={StudInfo.Fname}></input>
                    <input className="styleip" type="text" placeholder="Enter Last Name " name="lname" onChange={inputEvent} value={StudInfo.Lname}></input>
                    <input className="styleip" type="email" placeholder="Enter Email " name="email" onChange={inputEvent} value={StudInfo.Email}></input>
                    <button type="submit" className="btn"> Click Me  👍</button>
                </div>
            </form>

        </>
    )
}

export default BigForm;
