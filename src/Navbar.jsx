import React from 'react';
import { Link, NavLink } from 'react-router-dom';
let Navbar = () => {

    return (
        <>
            <a href="/">About US  </a>
            <a href="/contact"> Contact US</a>
            <a href="/contact/service">   Serives</a>
            {/* Above links will refresh page  */}
            <br /> <br />
            {/* It will not refresh the page  */}
            <Link to="/"> About US </Link>
            <Link to="/contact">  Contact As </Link>
            <Link to="/contact/service"> Services </Link>
            {/* But it is not showing which link it currtly active */}
            <br/><br/>
            <NavLink exact activeClassName="active_class" to="/"> About US </NavLink>
            <NavLink exact activeClassName="active_class" to="/contact">  Contact As </NavLink>
            <NavLink exact activeClassName="active_class" to="/contact/service"> Services </NavLink>
            <NavLink  activeClassName="active_class" to="/user/"> User </NavLink>
            <NavLink activeClassName="active_class" to="/search">  Search </NavLink>

        </>
    )
}

export default Navbar;


/* css used in Navbar.jsx */

// a.active_class{
//     color:black;
//     font-weight: bold;
//     border-bottom: 1px solid red;
//   }
  /* end */