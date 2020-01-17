import React from 'react';
import { Link } from 'react-router-dom';
import vanlogo from './vanguard.png';
import './header.css';

//arrow makes us not need the return after props
const Header = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <div></div>
            <div><Link to="/"><img src={vanlogo} className="toolbar-logo" /></Link></div>
            <div>
                <ul>
                    <li>
                    <Link to="/Contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

);


export default Header;
