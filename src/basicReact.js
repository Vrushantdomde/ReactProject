import React from "react"
import ReactDom from "react-dom"

//  ## first app
// ReactDOM.render(
//   <h1>Hello World</h1>,
//   document.getElementById('root')
// );

// ## Diferent ways to render multiple JSX element

// ## USing List (old) :- 
// ReactDOM.render(
//   [
//   <h1>Hello World</h1>,
//   <p>I love my India oh ho</p>
//   ],
//   document.getElementById('root')
// );

// ## Using  Div Tag (not Efficient) :- 
// ReactDOM.render(
//   <div>
//   <h1>Hello World</h1>,
//   <p>I love my India oh ho</p>
//   </div>,
//   document.getElementById('root')
// );

// ## USing React.Fragment Tag (efficient) :-   
// ReactDOM.render(
//   <React.Fragment>
//   <h1>Hello World</h1>
//   <p>I love my India</p>
//   </React.Fragment>,
//   document.getElementById('root')
// );

// ## Using <> Tag (current used, efficient):-
// ReactDOM.render(
//   <>
//   <h1>Hello World</h1>,
//   <p>I love my India oh ho</p>
//   </>,
//   document.getElementById('root')
// );
var fname = "Vrushant"
var lname = "Domde"
var age = 18

var currDate  = new Date().toLocaleDateString();
var currTime  = new Date().toLocaleTimeString();

ReactDom.render(
    <>
  <h1 contentEditable="true">Hello World</h1>
  <p>My name is {fname} </p>
  <p>{`My Full Name is ${fname} ${lname}`}</p>
  <p>My age is {age}</p>
  <p>RAndom Number {Math.random()}</p>
  <p> 5 + 10 is {5+10}</p>
   <p> Current Date : {currDate}</p>
   <p> Current Time : {currTime} </p>    </> ,
   document.getElementById('root')
);