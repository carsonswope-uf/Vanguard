import React from 'react';
import './Landing.css';

class Landing extends React.Component {
    render () {
        return (
            <div className="container">
                <h1 className="title">Welcome to Sunburst Yacht Charters</h1>
                <div className="button">
                    <button className="buttontext">Book your stay today</button>
                </div>
                <img src={require('./back5.png')} alt='landing' className='responsive'/>
                
            </div>
        )
    };
}

export default Landing;