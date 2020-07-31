import React from 'react'
import {Route , Switch, Redirect} from "react-router-dom"
import Contact from './RContact'
import About from './RAbout'
import ErrorMsg from './ErrorMsg'
import Navbar from './Navbar'
import User from './UseParams'
import Search from './RSearch';
let Service = ()=>{
  return(<>
   <h1>This is Service page</h1>
  </>)
}
let Router = ()=>{
    return(<>
    {/* <Switch> */}
        {/* <Route path="/" component={About}/>  */}
        {/* show about page */}
        {/* <Route path="/contact" component={Contact}/>  */}
         {/* show about page because 
        router see / at start of /contact it assume it as first path  */}
    {/* </Switch> */}

    {/* <Switch> */}
      {/* <Route exact path="/" component={About}/> */}
       {/* show about page */}
      {/* <Route path="/contact" component={Contact}/> */}
       {/* show contact page because we include exact in path="/" 
       so  this will show about page only and in path="/contact"
        contact will show */}
        {/* <Route component={ErrorMsg} />/ */}
    {/* </Switch> */}
   
    {/* <Switch> */}
      {/* <Route exact path="/" component={About}/> */}
      {/* <Route exact path="/contact" component={Contact}/>  */}
      {/* We have use exact here also because in next path 
      it will show contact page if we not use exact */}
      {/* <Route path="/contact/service" component={Service}/> */}
      {/* <Route component={ErrorMsg}/> */}
    {/* </Switch> */}

    <Navbar/>
    <Switch>
    {/* To Pass The Props to bellow about component */}
      <Route exact path="/" component={()=><About text="About US" />}/>
      {/* We can also use render in place of component like bellow */}
      <Route exact path="/contact" render={Contact}/> 
      <Route path="/contact/service" component={Service}/>
      <Route path="/user/:fname/:lname" component={User}/>
      <Route path="/search" component={Search}/>
      {/* <Route component={ErrorMsg}/> */}
      <Redirect to="/"/> 
      {/* Redirect can use to redirect page to given path 
      when page doesn't exsist , it can be used instead of 
      showing 404 error page, so when user enter in wrong url 
      it will redirect to certain given path  */}
    </Switch>
       {/* Difference between component and render */}
       {/* both gives the similar output  */}
       {/* component -> it fetch full component each & every time compoent call */}
       {/* render -> it fetch only updated part of component each and every time comopent call*/}
    </>)
}

export default Router;