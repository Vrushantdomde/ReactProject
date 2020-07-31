import React from 'react';
import {Link} from 'react-router-dom'
let ErrorMsg = ()=>{
    return(
        <>
        <h1> 404  Error page </h1>
         <h2>Oops ! Page Not Found</h2>
         <br/><hr/>
         <Link to='/'>Go Back</Link>
         <hr/>
        </>
    )
}

export default ErrorMsg;