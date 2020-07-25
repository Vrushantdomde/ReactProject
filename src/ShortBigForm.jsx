import React , {useState} from 'react';
var ShortBigForm = () =>{
    let [StudInfo,ChgStudInfo] = useState({
        Fname:'',
        Lname:'',
        Email:'',
    });

     var inputEvent = (e) =>
     {
          var value = e.target.value;
          var name = e.target.name;

          ChgStudInfo((preValue)=>{
              return{
              ...preValue,
              [name] : value,
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

    return(
        <>
        <form onSubmit={OnSubmit}>
            <div className="centDiv">
                <h1 className="head">Hello {ShowStudInfo.ShowFname} {ShowStudInfo.ShowLname}</h1>
                <h5><center>{ShowStudInfo.ShowEmail}</center></h5>
                <input className="styleip" type="text" placeholder="Enter First Name " autoComplete="off" name='Fname' onChange={inputEvent} value={StudInfo.Fname}></input>
                <input className="styleip" type="text" placeholder="Enter Last Name " name="Lname" onChange={inputEvent} value={StudInfo.Lname}></input>
                <input className="styleip" type="email" placeholder="Enter Email " name="Email" onChange={inputEvent} value={StudInfo.Email}></input>
                <button type="submit" className="btn"> Click Me  👍</button>
            </div>
        </form>

    </>
    );
}
export default ShortBigForm;