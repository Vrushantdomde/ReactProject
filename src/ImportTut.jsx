import React from 'react'
// import favYoutube , {favTut,favCar,favFilm} from './ExportTut' // first way to import  , note : favYoutube(any name can use) is default 
import * as favList from "./ExportTut"; // import all as favList
function List()
{
    return(
      <>      
      <h1>My Fav List</h1>
        {/* first way  */}
        {/* <ol>           
            <li>{favYoutube}</li>
            <li>{favTut} </li>       
            <li>{favFilm()}</li>
            <li>{favCar()}</li>
        </ol> */}

        {/* second way using obj */}
        <ol>           
            <li>{favList.default}</li>
            <li>{favList.favTut} </li>       
            <li>{favList.favFilm()}</li>
            <li>{favList.favCar()}</li>
            <li> divide of 10 by 3 is {favList.divide(10,3)}</li>
        </ol>
      </>

    )
}

export default List;