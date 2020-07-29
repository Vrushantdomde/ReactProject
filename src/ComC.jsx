import React from 'react';
import { FilmName, Earned } from './ContextAPI';
let ComC = () => {
    return (           // Here We are using Context API consumer to retrive the data 
                       // But it is More Complex So we use useContext method to retrive the same data in ComB.jsx
        <>             
            <FilmName.Consumer>
                {
                    (film) => {  // it is callback function which contain context value
                        return (
                            <>
                                <Earned.Consumer>
                                    {
                                        (Earn) => {
                                            return (
                                                <>
                                                    <h1>Use of Context consumer</h1>
                                                    <h2>{film}</h2>
                                                    <h3>Earning of Film  {Earn}</h3>
                                                    <p>Above data is from ComC</p>
                                                </>
                                            )
                                        }
                                    }
                                </Earned.Consumer>
                            </>
                        )
                    }
                }
            </FilmName.Consumer>
        </>
    )
}

export default ComC;