import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
    render () {
        return (
            <div className="container">
                <h1 className="title">Welcome to Sunburst Yacht Charters</h1>
                <div className="button">
                    <Link to="/Booking" ><button className="buttontext">Book your stay today</button></Link>
                </div>
                <img src={require('./back5.png')} alt='landing' className='responsive'/>
                
            </div>
        )
    };
}

export default Landing;