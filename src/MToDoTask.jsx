import React, { useState } from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Button } from '@material-ui/core';
var MToDoTask = (props) =>{
    const [line,chgLine]=useState(false);
    let cutIt =()=>{
        chgLine(true); 
    }
    return(
        <>
        <div>
        
        <li><Button onClick={cutIt} className="RmvBtn"><DeleteOutlineIcon/> 
        </Button> <span style={{textDecoration:line?'line-through':'none'}}>{props.text}</span></li>

        </div>

        </>
    )
}

export default MToDoTask;