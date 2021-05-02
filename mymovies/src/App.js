import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Link, NavLink, Route, Redirect } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Event from './component/Viewevents';
import Viewevents from './component/Viewevents';
import allevents from './component/allevents';
import Addevt from './component/Addevt';



class App extends Component{

  render(){
    return(
    <Router>

<div className="container">
          <header className="d-flex justify-content-center py-3 border-bottom">
            <ul className="nav nav-pills">
              <li className="nav-item"><NavLink to="/Home" className="nav-link active">Home</NavLink></li>
              <li className="nav-item"><NavLink to="/About" className="nav-link">About</NavLink></li>
              <li className="nav-item"><NavLink to="/Viewevents" className="nav-link">Viewevents</NavLink></li>
              
            </ul>
          </header>
        </div >
     
      
      <Route path="/Home" render={Home} />
      <Route path="/About" render={About}/>
      <Route path="/Viewevents" component={Viewevents}></Route>
      <Route path="/evt-details/:id" component={allevents}></Route>
      <Route path="/event-add" component={Addevt}></Route>
      
           
    </Router>
    );
  }
}


  

export default App;
