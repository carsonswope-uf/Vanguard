import React from 'react';
import { Link } from 'react-router-dom';
import vanlogo from './sunburstlogo.png';
import './header.css';

//arrow makes us not need the return after props
const Header = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <div><Link to="/"><img src={vanlogo} className="toolbar-logo" alt=""/></Link></div>
            <div className="push-right"/>
                <div className="toolbar-nav-items">
                    <ul>
                        <li><Link to="/Gallery" >Gallery</Link></li>
                        <li><Link to="/Booking" >Make a Reservation</Link></li>
                        <li><Link to="/Contact" >Contact Us</Link></li>
                    </ul>
                </div>
        </nav>
    </header>

);


export default Header;
