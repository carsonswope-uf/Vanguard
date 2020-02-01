import React from 'react';

class Landing extends React.Component {
    render () {
        return (
            <div>
                <h1>Welcome to Sunburst Yacht Charters</h1>
                <img src={require('./vanguard.png')} resizeMode = 'contain'/>
            </div>
        )
    };
}

export default Landing;