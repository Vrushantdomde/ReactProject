import React from 'react';
import {useParams, useLocation, useHistory} from 'react-router-dom';
// let User = ({match}) =>{
//     return(              // old way 
//         <>
//    <h1>I am {match.params.fname} User</h1>

//         </>
//     )
// }

let User = () =>{
    var {fname, lname} = useParams(); // variable name must be same as you metion in route path
                                    // we have to get it as object in {}  
    var location = useLocation();
    // console.log(location);

    var history = useHistory();
    return(
        <>
   <h1>I am {fname} {lname} User</h1>
   <h2> Your Current location is {location.pathname} </h2>
   <br/> <br/>
   {location.pathname === `/user/vrush/code` ? (<button onClick={()=> alert("Vrush ka Code")}> Click ME </button>) : null}

   <button onClick={()=>history.goBack()}>GO Back</button> <br/><br/><hr/>
   <button onClick={()=>history.push('/')}>Hompage</button>
        </>
    )
}

export default User;