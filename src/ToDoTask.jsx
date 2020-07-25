import React from 'react';

var ToDoTask = (props) => {

    return (
        <>
            <li><button onClick={()=>{
                return(props.OnSelect(props.id))
                }
            } className="RmvBtn">X</button>{props.text}</li>

        </>
    )
}

export default ToDoTask;