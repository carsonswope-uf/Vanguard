import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import iglogo from './ig-logo.png';
import twitlogo from './twitter-logo.png';

//arrow makes us not need the return after props
const Footer = props => (
    <header className="footer">
        <div className="push-right"/>
            <nav className="footer-items">
                <div className="copyright">© Sunburst Yacht Charters 2019   |   All Rights Reserved</div>
                <div className="logo-container">
                <a href="https://www.instagram.com/sunburstyachtcharters/"><img src={iglogo} className="logos" alt=""/></a>
                
                <a href="https://twitter.com/SunburstYacht"><img src={twitlogo} className="logos" alt=""/></a>
                </div>
            </nav>
        
    </header>

);


export default Footer;
