import React, { useState } from 'react';
import '../styles/Contact.css';
import axios from 'axios';
import Alert from '../components/Alert';

const Contact = (props) => {
	const [contact, setContact] = useState({
		subject: '',
      	email: '',
      	message: '',
		alertMessage : null
	})
	const resetForm = () => setContact({subject: '', email: '', message: '', alertMessage : 'Email sent'})

	const handleSubmit = (e) => {
		e.preventDefault();
		axios({
			method: "POST",
			// url: "http://localhost/portfolio/api/contactEmail",
			url: "https://yanicktheodose.site/portfolio/api/contactEmail",
			data: contact
		})
		.then((response) => { 
			resetForm();
		})
		.catch(error => console.log(error))
	}
	return (<>
		<div className='contact'>
			<h1 className='title'>Contact</h1>
			<p className='contactIntro'>
			Are you interested in one of my services? Or do you simply have a question? <br/>Contact me using the form below and I will respond as soon as possible.
			</p>
			<form id="contact-form" onSubmit={handleSubmit} method="POST">
				<div className="form-group">
					<label htmlFor="subject">Subject</label>
					<input type="text" id='subject' className="form-control" value={contact.subject} onChange={(e) => setContact({...contact, subject: e.target.value})}/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Email address</label>
					<input type="email" id="email" className="form-control" aria-describedby="emailHelp" value={contact.email} onChange={(e) => setContact({...contact, email: e.target.value})}/>
				</div>
				<div className="form-group">
					<label htmlFor="message">Message</label>
					<textarea className="form-control" rows="5" value={contact.message} onChange={(e) => setContact({...contact, message: e.target.value})}></textarea>
				</div>
				<button type="submit" className="btn-form">Submit</button>
			</form>
			{contact.alertMessage && <Alert>{contact.alertMessage}</Alert>}
		</div>

	</>
		
	);
}

export default Contact;