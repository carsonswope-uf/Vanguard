import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Landing from "./components/Landing/Landing";
import NotFound from "./components/NotFound";
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <Header/>
        <main style={{marginTop: '100px'}}>
          <div className="container">
  
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


