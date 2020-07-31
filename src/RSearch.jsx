import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SResult from './SResult';
let Search = () => {
    const [img,setImg] = useState();
    const ipEvent = (e) =>{
        setImg(e.target.value)
        console.log(e.target.value)
       
    }
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-4">
                    <input type="text" className="form-control border border-danger"
                     placeholder="Search Here"
                     onChange={ipEvent}
                     value={img} />
                </div>
            </div>
{ img===""?null:<SResult imgsrc={img}/>}
            
        </>
    )
}

export default Search;