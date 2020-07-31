import React from 'react';
import {NavLink} from 'react-router-dom';
let Card = (props) => {
    const {isrc,title,text} = props;
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={isrc} className="card-img-top" alt={isrc} />
                    <div class="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <NavLink to="/" class="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Card;