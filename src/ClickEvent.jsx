import React, { useState } from 'react';

var ClickEvent = () =>
{
   let [clor,changcolor] = useState('#000');
   let [text,changText] = useState("Click Me");
    return(
       <>        
         <div className="centDiv" style={{backgroundColor:clor}}>
              <button className="btn" onClick={()=>{changcolor('red'); changText("ohhchu 😄 ")}} onDoubleClick={()=>{changcolor('#000'); changText("Abe nahi 😏")}}>{text}</button>
         </div>
      </>
    )
}

export default ClickEvent;