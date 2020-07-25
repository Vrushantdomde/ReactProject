import React, { useState } from 'react';

let IncNum = () => {
    let [count,statecount] = useState(0);
    let INum = () =>
    {
        statecount(count + 1);
    }
    return(
     <>
      <div className="container">
      <h1 style={{padding:'30px'}}>{count}</h1>
      <button className="btn" onClick={INum}> Click </button>
      </div>  
    </>
    ) 
};

export default IncNum;
