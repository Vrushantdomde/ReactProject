import React from 'react';

function Card(props)
{
    return(
        <>
             <div className="card">
                 <img src={props.imgUrl} alt="My pics" className="card_img"/>
                 <div className="card_info">
                     <span className="card_category">{props.category}</span>
                     <h3 className="card_title">{props.title}</h3>
                     <a href={props.btnLink} target="_blank">
                         <button> Watch Now</button>
                     </a>
                 </div>
             </div>
        </>
    )
}

export default Card;