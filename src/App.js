import React from 'react';
import './App.css';
import vanlogo from './assets/vanguard.png';
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import Landing from "./components/Landing/Landing";
import NotFound from "./components/NotFound";
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <Header/>
      <main style={{marginTop: '110px'}}>
    <div className="center">
      
      
      <h1>
        <Link to='/Gallery'>Gallery</Link>
      </h1>
      </div>
      </main>
      <Switch>
        <Route path="/Gallery">
          <Gallery/>
        </Route>
        <Route path="/">
          <Landing/>
        </Route>
        <Route component={NotFound}/>
      </Switch>
    
    </Router>
  );
}


