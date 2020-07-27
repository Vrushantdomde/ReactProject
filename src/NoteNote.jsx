import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Button } from '@material-ui/core';
let Note = () =>{
    return(
        <>
          <div className="note">
              <h5> title</h5>
              <br/>
              <p>this isn content</p>
             <Button><DeleteOutlineIcon className="deleteIcon"/></Button> 
          </div>

        </>
    )
}

export default Note;
