import React from 'react';
import { Simulate } from 'react-dom/test-utils';

let SlotM = (props) => {
  // let x =  props.x;
  // let y =  props.y;
  // let z = props.z;

  // Now we will use object Destructing here
   let {x,y,z} = props;  //we used
 

  if (x === y && y === z) {
    return (
      <>
        <div className="slot">
          <h1> {x}    {y}    {z}</h1>
          <h5 style={{ margin: '10px', fontSize: '18px' }}>This is Matching</h5>

        </div>
      </>
    )
  }
  else
  {
    return (
      <>
        <div className="slot">
          <h1> {x}    {y}    {z}</h1>
          <h5 style={{ margin: '10px', fontSize: '14px' }}>This is NOT Matching</h5>

        </div>
      </>
    )

  }

}

var SlotMachine = () => {

  return (
    <>

      <h2 className="heading_style">🎰 Welocome To  Slot Machine Game 🎰</h2>
      <div className="slotMachine">
        <SlotM x=" 😏 " y=" 🎯 " z=" 😏 "/>
        <SlotM x=" 💃 " y=" 💃 " z=" 💃 "/>
        <SlotM x=" 👼" y=" 😠" z=" 💋"/>
      </div>
    </>

  )
}

export default SlotMachine;