import React from 'react';
import vanlogo from './vanguard.png';

class Landing extends React.Component {
    render () {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <img src={vanlogo} alt=""/>
                <h1>Welcome to Sunburst Yacht Charters</h1>
            </div>
        )
    };
}

export default Landing;