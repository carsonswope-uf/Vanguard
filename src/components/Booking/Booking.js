import React from 'react';
import './Booking.css';
import _ from 'lodash';
import emailjs from 'emailjs-com';

class Booking extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        name: '',
        phone: '',
        email: '',
        startmonth: '',
        startday: '',
        enddate: '',
        description: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

//on submission, values in this.state are changed from '' to the values in the box
handleChange(submission) {
    this.setState({[submission.target.name]: submission.target.value})
}

//alerts user that their event has been submitted successfully
handleSubmit(submission) {
    let templateId = 'template_Coeqds6S';
    let formInput = {
        from_name: this.state.name, 
        phone: this.state.phone,
        email: this.state.email,
        startmonth: this.state.startmonth,
        startday: this.state.startday,
        startyear: this.state.startyear,
        endmonth: this.state.endmonth,
        endday: this.state.endday,
        endyear: this.state.endyear,
        message_html: this.state.description}
    
    //send out the form contents via email.js
    emailjs.send('gmail', templateId, formInput, 'user_qpZXYCKh3LLtJPUQzp5JF');

    

    alert(
    "Your reservation has been sent to our team \n\nname: " + this.state.name + 
    "\nphone: " + this.state.phone +
    "\nemail: " + this.state.email + 
    "\nstart month: " + this.state.startmonth +
    "\nstart day: " + this.state.startday +
    "\nstart year: " + this.state.startyear +
    "\nend month: " + this.state.endmonth + 
    "\nend day: " + this.state.endday +
    "\nend year: " + this.state.endyear +
    "\ndescription: " + this.state.description);

    window.location.reload();
    submission.preventDefault();
    }

    render () {
        return (
            <div className="container">
                <h1 className="textcolor">Book Your Reservation</h1>
                <div className="left">
                    <div class="centered">
                        <h2 className="textcolor">Please provide your reservation information</h2>
                            <h3>We will respond to your submission within 24 business hours</h3>
                    </div>
                    <img src={require('../assets/fly5.jpg')} alt='booking' className="responsive"/>
                </div>

                <div className="right"><div>
                        <form onSubmit={this.handleSubmit}>
                            <div className = 'upperleft'>
                                <label for="name">Name</label>
                                    <div>
                                        <input id="name" className="bookinginput" placeholder="Name" name="name" onChange={this.handleChange} required/>
                                    </div>
                            </div>
                            <div className = "uppermid">
                                <label for="email">Email Address</label>
                                    <div>
                                        <input id="email" className="bookinginput" placeholder="example@example.com" name="email" onChange={this.handleChange} required/>
                                    </div>
                            </div>
                            <div className = "upperright">
                                <label for="phone">Phone Number</label>
                                    <div>
                                        <input id="phone" className="bookinginput" placeholder="(555) 555-5555" name="phone" onChange={this.handleChange} required/>
                                    </div>
                            </div>
                            <label for="startdate">Starting date</label>
                                <div className="startdate">
                                    <select className="dateselect" id="startmonth" name="startmonth" onChange={this.handleChange} required>
                                        <option value="" disabled selected>Month</option>
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                        <option value="4">April</option>
                                        <option value="5">May</option>
                                        <option value="6">June</option>
                                        <option value="7">July</option>
                                        <option value="8">August</option>
                                        <option value="9">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </select>
                                    <select className="dayselect" id="startday" name="startday" onChange={this.handleChange} required>
                                        <option value="" disabled selected>Day</option>
                                        { _.range(1, 32).map(value => <option key={value} value={value}>{value}</option>)}
                                    </select>
                                    <select className="dateselect" id="startyear" name="startyear" onChange={this.handleChange} required>
                                        <option value="" disabled selected>Year</option>
                                        { _.range(2020, 2023).map(value => <option key={value} value={value}>{value}</option>)}
                                    </select>
                                </div>
                            <label for="enddate">Ending date</label>
                                <div className="enddate">
                                    <select className="dateselect" id="endmonth" name="endmonth" onChange={this.handleChange} required>
                                        <option value="" disabled selected>Month</option>
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                        <option value="4">April</option>
                                        <option value="5">May</option>
                                        <option value="6">June</option>
                                        <option value="7">July</option>
                                        <option value="8">August</option>
                                        <option value="9">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </select>
                                    <select className="dayselect" id="endday" name="endday" onChange={this.handleChange} requried>
                                        <option value="" disabled selected>Day</option>
                                        { _.range(1, 32).map(value => <option key={value} value={value}>{value}</option>)}
                                    </select>
                                    <select className="dateselect" id="endyear" name="endyear" onChange={this.handleChange} required>
                                        <option value="" disabled selected>Year</option>
                                        { _.range(2020, 2023).map(value => <option key={value} value={value}>{value}</option>)}
                                    </select>
                                </div>
                                <label for="description">Description</label>
                                    <div className="description">
                                        <textarea id="description" rows="4" type="text" placeholder="Any additional details" name="description" onChange={this.handleChange} required/>
                                    </div>
                            <input type="submit" value="Submit" className="submit"/>
                        </form>
                    </div>
                </div>
                <script type="text/javascript"
                    src="https://cdn.jsdelivr.net/npm/emailjs-com@2.4.1/dist/email.min.js">
                </script>
                <script type="text/javascript">
                    {emailjs.init("user_qpZXYCKh3LLtJPUQzp5JF")}
                </script>
            </div>
    )};
}
export default Booking