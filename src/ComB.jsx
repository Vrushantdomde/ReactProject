import React, { useContext } from 'react';
import ComC from './ComC';
import { FilmName, Earned } from './ContextAPI'; //first step
let  ComB  = ()=>{
   const film = useContext(FilmName);
   const earn = useContext(Earned);
    return(
        <>
         {/* Here we are using the useContext to retrive data easily from ContextAPI.jsx  */}
         <div style={{color:"red"}}>
             <h1>use of useContext</h1>
             <h2>FilmName : {film} </h2>
             <h3>Earned : {earn} </h3>
             <p>Above data is from ComB</p>
             <br/>
         </div>
      <ComC/>

        </>
    )
}

export default ComB  ;