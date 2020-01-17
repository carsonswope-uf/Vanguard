import React from 'react';
import LandingImage from './LandingImage.png';
import {Image, Dimensions, View} from 'react-native';

let {width, height} = Dimensions.get("window")
class Landing extends React.Component {
    render () {
        return (
            <View>
                <h1>Welcome to Sunburst Yacht Charters</h1>
                <Image source={require('./LandingImage.png')} resizeMode = 'contain' style={{maxHeight: height, maxWidth: width}}/>
            </View>
        )
    };
}

export default Landing;