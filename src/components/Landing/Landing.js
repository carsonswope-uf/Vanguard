import React from 'react';
import LandingImage from './LandingImage.png';
//import {Image, Dimensions, View} from 'react-native';


class Landing extends React.Component {
    render () {
        return (
            <div>
                <h1>Welcome to Sunburst Yacht Charters</h1>
                <img src={require('./LandingImage.png')} resizeMode = 'contain'/>
            </div>
        )
    };
}

export default Landing;