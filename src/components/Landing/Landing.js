import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
    render () {
        return (
            <div className="containercontainer">
            <div className="container">
                
                <h1 className="title">Welcome to Sunburst Yacht Charters</h1>
                    <div className="button">
                        <Link to="/Booking" ><button className="buttontext">Make your reservation</button></Link>
                    </div>
                
                <img src={require('./back5.png')} alt='landing' className='responsive'/>
                
                <div className="about">About Us</div>
                <img className="aboutimage" src={require('../assets/dock1.jpg')}/>
                    <div className="aboutcontent">
                        Docked off downtown Tampa’s upscale Harbour Island, Sunburst Yacht Charters’ 82-foot-vessel ‘Vanguard’ is the luxury yacht of choice for Tampa Bay’s elite. Our high-end luxury yacht rental offers guests the opportunity to customize one-of-a-kind excursions. We provide you access to unparalleled amenities, activities, and entertainment that is certain to make your event an extraordinary one that you will never forget.
                    </div>
                
                
                <img className="aboutimage2" src={require('../assets/cigar1.jpg')}/>
                    <div className="aboutcontent2">
                        Docked off downtown Tampa’s upscale Harbour Island, Sunburst Yacht Charters’ 82-foot-vessel ‘Vanguard’ is the luxury yacht of choice for Tampa Bay’s elite. Our high-end luxury yacht rental offers guests the opportunity to customize one-of-a-kind excursions. We provide you access to unparalleled amenities, activities, and entertainment that is certain to make your event an extraordinary one that you will never forget.
                    </div>

                <img className="aboutimage3" src={require('../assets/dock3.jpg')}/>
                    <div className="aboutcontent3">
                        Docked off downtown Tampa’s upscale Harbour Island, Sunburst Yacht Charters’ 82-foot-vessel ‘Vanguard’ is the luxury yacht of choice for Tampa Bay’s elite. Our high-end luxury yacht rental offers guests the opportunity to customize one-of-a-kind excursions. We provide you access to unparalleled amenities, activities, and entertainment that is certain to make your event an extraordinary one that you will never forget.
                    </div>

                
            </div>
                    <div className="gallerytext">
                    We invite you to <Link to="/Gallery" >view our gallery</Link> for more images!
                    </div>

                    <div className="galleryrow">
                        <img className="rowimg" src={require('../assets/cigar1.jpg')}/>
                        <img className="rowimg" src={require('../assets/cigar2.jpg')}/>
                        <img className="rowimg" src={require('../assets/cigar3.jpg')}/>
                        <img className="rowimg" src={require('../assets/master1.jpg')}/>
                    </div>

                    <div className="morequestions">
                        Have any other inquiries before making a reservation? Please, <Link to="Contact">contact us!</Link>
                    </div>
                </div>
        )
    };
}

export default Landing;