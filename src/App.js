import React from 'react';
import './App.css';
import vanlogo from './assets/vanguard.png';
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery";
import NotFound from "./components/NotFound";
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <Header/>
    <div className="App">
      
      
      <h1>
        <Link to='/Gallery'>Gallery</Link>
      </h1>
      <Switch>
        <Route path="/Gallery">
          <Gallery/>
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
    </Router>
  );
}


