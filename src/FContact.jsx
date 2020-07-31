import React, { useState } from 'react';
let Contact = () => {
    var [Cinfo,setCinfo] = useState(
        {
            fname:"",
            phone:"",
            email:"",
            msg : "",
        }
    );
    let ipEvent = (e)=>{
       
        var {name,value}  = e.target;

        setCinfo((preval)=>{
            return(
                {
                    ...preval,
                    [name]:value,
                }
            )
        })

        
    }
    var [CSinfo,setCSinfo] = useState(
        {
            Sfname:"",
            Sphone:"",
            Semail:"",
            Smsg : "",
        }
    );
    let subtn = ()=>{
          setCSinfo(
              {
                  Sfname:Cinfo.fname,
                  Sphone: Cinfo.phone,
                  Semail : Cinfo.email,
                  Smsg : Cinfo.msg,
              }
          );
        const {Sfname,Sphone,Semail,Smsg} = CSinfo;
         alert(`my name is ${Sfname} , my phone number is ${Sphone} , My email is ${Semail} , 
           my Message is ${Smsg}`);
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="conatiner contact_div">
                <div className="row">
                    <div className="col-md-4 col-10 mx-auto">
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">FullName</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    name="fname"
                                    value={Cinfo.fname}
                                    onChange={ipEvent}
                                    placeholder="your fullname" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Phone</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    name="phone"
                                    value={Cinfo.phone}
                                    onChange={ipEvent}
                                    placeholder="phone number" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your Phone Number with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    name="email"
                                    value={Cinfo.email}
                                    onChange={ipEvent}
                                    placeholder="email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Messgae</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                    name="msg"
                                    value={Cinfo.msg}
                                    onChange={ipEvent}
                                ></textarea>
                            </div>
                            <button type="button" onClick={subtn} className="btn btn-outline-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;