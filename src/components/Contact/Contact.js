import React from 'react';
import './Contact.css';


class Contact extends React.Component {

constructor(props) {
    super(props);
    this.state = {email: '',
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
    alert("Your inquiry has been sent to our team \n\nEmail: " + this.state.email + "\nDescription: " + this.state.description);
    window.location.reload();

    //post events to backend using axios
    submission.preventDefault();
    const Submission = {
        email: this.state.email,
        description: this.state.description
    }
    //NEED TO READ AXIOS DOCUMENTATION WHEN WE GET TO BACKEND lol
    //axios.post('localhost:3000', Submission)
}

    render () {
        return (
            <div className="container">
                <h1 className="textcolor">Contact Us</h1>
                <div class="split left">
                    <div class="centered">
                        <h1 className="textcolor">Melanie Morales</h1>
                            <h2>Operations Manager</h2>
                                <h3>(813) 555-5828</h3>
                    </div>
                </div>
                    
                <div class="split right">
                    <div>
                        <form onSubmit={this.handleSubmit}>

                            <label for="email">Email</label>{/*make label appear above input box*/}
                                <div className="email">
                                    <input id="email" type="text" placeholder="Email" name="email" onChange={this.handleChange} required/>
                                </div>
                            <label for="description">Description</label>
                                <div className="description">
                                    <textarea id="description" rows="4" type="text" placeholder="Description" name="description" onChange={this.handleChange} required/>
                                </div>
                            <input type="submit" value="Submit" className="submit"/>
                        </form>
                    </div>
                </div>
                <img src={require('./contact.jpg')} alt='landing' className="responsive"/>
            </div>
    )};
}
export default Contact