import React, { createContext } from 'react';
import ComA from './ComA';

var FilmName = createContext();
var Earned = createContext();
let ContextAPI = () => {
    return (
        <>
            <FilmName.Provider value={'GolMaal film'}>
                <Earned.Provider value={'25 crore'}>
                    <ComA />
                </Earned.Provider>
            </FilmName.Provider>
        </>
    )
}

export default ContextAPI;
export { FilmName , Earned };