import React from 'react';
let SResult=(props)=>{
    const img = `https://source.unsplash.com/400x300/?${props.imgsrc}`;
    return(
        <>
         <div className="my-5 justify-content-center">
             <img className="center" src={img} />
         </div>

        </>
    )
}

export default SResult;