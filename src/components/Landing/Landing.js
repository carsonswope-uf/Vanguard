import React from 'react';
import './Landing.css';

class Landing extends React.Component {
    render () {
        return (
            <div className="container">
                <h1 className="title">Welcome to Sunburst Yacht Charters</h1>
                <img src={require('./back5.jpg')} alt='logo' className='responsive'/>
            </div>
        )
    };
}

export default Landing;