import React from 'react';

let Footer = ()=>{
    let year  = new Date().getFullYear();
    return(
        <>
        <footer className="bg-light text-center">
            <p> copyright © {year} VRUSH , All Rights Reserved , Terms and Condition Apply</p>
        </footer>

        </>
    )
}

export default Footer;