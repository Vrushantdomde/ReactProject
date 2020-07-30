import React, { useState, useEffect } from 'react';
import Axios from 'axios';

let AxiosPokemon = () => {
    let [num,setNum] = useState();
    let [name,setName] = useState("");
    let [move,setMove] = useState();

    useEffect(()=>{
        async function getData(){
            const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(res.data.name);
            setMove(res.data.moves.length);
        } 
       getData();
    });
    return (
        <>
            <h1> You Choose :<span style={{color:"red"}}> {num} </span></h1>
            <h2> My Name is :<span style={{color:"red"}}>  {name}</span> </h2>
            <h3> My Moves : <span style={{color:"red"}}> {move} </span> </h3>
            <br/>
            <select value={num} onChange={(event)=>{
                setNum(event.target.value);
            }}>
                <option value="1">1</option>
                <option value="25">25 </option>
                <option value="3">3</option>
                <option value="4 ">4</option>
                <option value="5">5</option>

            </select>
        </>
    )
}

export default AxiosPokemon;