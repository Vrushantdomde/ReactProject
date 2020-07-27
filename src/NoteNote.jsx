import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Button } from '@material-ui/core';
let Note =(props) =>{
    var {title,text} = props.note;
    return(
        <>
         <div className="col-3 my-3">
          <div className="note">
              <h5>{title}</h5>
              <br/>
              <p>{text}</p>
             <Button onClick={()=>{props.delete(props.id)}}><DeleteOutlineIcon className="deleteIcon"/></Button> 
          </div>
          </div>

        </>
    )
}

export default Note;
