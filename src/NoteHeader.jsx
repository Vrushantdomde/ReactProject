import React from 'react';
import NoteLogo from './images/Notelogo.svg.png';
let Header = () => {
    return (
        <>
            <nav className='nav navbar-dark bg-dark'>
                <span className="navbar-brand mx-2 mb-0 h1">
                    <img src={NoteLogo} className="mx-3" width="30" height="30" alt="" loading="lazy" />
                    Keep Note
              </span>
            </nav>

        </>
    )
}

export default Header;