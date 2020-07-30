import React, { useState, useEffect } from 'react';
let ChgTitle = () => {
    let [num, setNum] = useState(0);

    useEffect(()=>{
        document.title = `Clicked me 😎 ${num}`;
    })
    return (
        <>
            <center>
                <br /><br />
                <button onClick={() => { setNum(num++) }}>Click ME 😜 {num} </button>
            </center>

        </>
    )
}
export default ChgTitle;