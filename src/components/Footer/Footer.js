import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import iglogo from './ig-logo.png';
import abblogo from './airbnb_logo.png';

//arrow makes us not need the return after props
const Footer = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <div className="push-right"/>
            <div><Link to="/"><img src={iglogo} className="toolbar-logo" alt=""/></Link></div>
                <div className="toolbar-nav-items">
                    <ul>
                        <li><Link to="/Contact" >Contact Us</Link></li>
                        <li><Link to="/Social" >Social Media</Link></li>
                    </ul>
                </div>
        </nav>
    </header>

);


export default Footer;
