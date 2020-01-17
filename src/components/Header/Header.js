import React from 'react';
import { Link } from 'react-router-dom';
import vanlogo from './vanguard.png';
import './header.css';

//arrow makes us not need the return after props
const Header = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
{/*the logo link contains a bug where the anchor tag lies slightly beneath the logo itself*/}
            <div><Link to="/"><img src={vanlogo} className="toolbar-logo" /></Link></div>
            <div className="push-right"/>
                <div className="toolbar-nav-items">
                    <ul>
                        <li><Link to="/Contact" >Contact Us</Link></li>
                        <li><Link to="/Social" >Social Media</Link></li>
                    </ul>
                </div>
        </nav>
    </header>

);


export default Header;
