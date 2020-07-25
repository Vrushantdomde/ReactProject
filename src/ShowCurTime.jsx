import React,{useState} from 'react';
//  show currentTime using HOOK
let ShowCurTime = () => {
    let curTime = new Date().toLocaleTimeString();
    let [Time,updateTime] = useState(curTime);
    let getCurTime = () =>
    {
        updateTime(new Date().toLocaleTimeString());
    }
    setInterval(getCurTime,1000)
   return(
      <>
     <div className="container">
     <h1 style={{padding:'30px'}}>{Time}</h1>
     <button className="btn" onClick={getCurTime}> Click </button>
     </div>  
   </>
   )
}

export default ShowCurTime;
