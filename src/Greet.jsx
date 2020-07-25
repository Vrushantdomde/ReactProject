import React from 'react';

function Greet() {
    var pstyle = {
        color: 'blue',
        marginTop: '2rem',
        fontSize: '20px',
        textAlign: 'center',
        fontFamily: ' "Oswald", sans-serif'
    }

    var curtime = new Date(2020, 5, 5, 2).getHours()
    var msg = ""
    const cssStyle = {}
    if (curtime >= 1 && curtime < 12) {
        msg = "Good Morning"
        cssStyle.color = "Green"
    }
    else if (curtime >= 12 && curtime < 18) {
        msg = "Good Evening"
        cssStyle.color = "orange"
    }
    else if (curtime >= 18 && curtime <= 24) {
        msg = "Good Night"
        cssStyle.color = "black"
    }
    return (
        <>

            <p style={{ color: 'blue', marginTop: '2rem', fontSize: '30px', textAlign: 'center' }}>  hi this is inline css </p>

            <p style={pstyle}>variable style hai ye bro</p>

            <div className="greet">
                <h1>Hello Sir , <span style={cssStyle}>{msg} </span></h1>
            </div>

        </>
    )
}

export default Greet;