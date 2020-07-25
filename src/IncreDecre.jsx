import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
// To USe Material ui in YOur project you need to fire bellow command to install it first.
// in your project directory
// $ npm install @material-ui/icons
// $ npm install @material-ui/core
var IncreDecre = ()=>{
    var [num,chgNum]=useState(0);
    var incre = ()=>{
        chgNum(num+1);
    }

    var decre = () =>{
      if(num!=0)
      {
        chgNum(num-1);
      }
      else{
          alert("0 limit exceed");
      }
        
    }
    return(
        <>
         <div className="main_div">
             <div className="center_div">
                 <h1 className="Heading" style={{margin:"10rem 0rem 5rem 0rem",fontSize:"5rem"}}>{num}</h1>
                 <Tooltip title="Add">
                 <Button onClick={incre} className="AddBtn" style={{marginRight:"2rem"}}><AddIcon/> </Button>
                 </Tooltip>
                 <Tooltip title="Delete">
                 <Button onClick={decre} className="DelBtn" style={{marginLeft:"2rem"}}><DeleteOutlineIcon/> </Button>
                 </Tooltip>
             </div>
         </div>     
        </>
    )
}

export default IncreDecre;