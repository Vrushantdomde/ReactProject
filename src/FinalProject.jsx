import React from 'react';
import Home from './FHome';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Popper from 'popper.js';
import "./FinalProject.css";
import { Route,Switch} from 'react-router-dom';
import About from './FAbout';
import Contact from './FContact';
import Service from './FService';
import Navbar from './FNavbar';
import Footer from './FFooter';
let FinalProject = () =>{

     return (
         <>
         <Navbar/>
         <Switch> 
             <Route exact path="/" component={Home}/>
             <Route exact path="/about" component={About}/>
             <Route exact path="/contact" component={Contact}/>
             <Route exact path="/service" component={Service}/>
         </Switch>
         <Footer/>
         </>
     )
}

export default FinalProject;