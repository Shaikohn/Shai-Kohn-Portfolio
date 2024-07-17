import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contactContainer'>
        <h1>CONTACT</h1>
        <div name="contact" className='contact-container'>
    <form method='POST' action='https://getform.io/f/5383a8c5-069e-4adc-9d1a-f64232b81033' className='contact-form'>
        <div className='form-header'>
            <p className='form-title'>Contact me</p>
            <p className='form-description'>Submit the form below or shoot me an email - shaicokohn@gmail.com</p>
        </div>
        <input type="text" placeholder='Name' name="name" className='form-input' />
        <input type="email" placeholder='Email' name="email" className='form-input' />
        <textarea name="message" placeholder='Message' className='form-textarea'></textarea>
        <button type='submit' className='form-button'>Let's Collaborate</button>
    </form>
</div>
    </div>
  )
}

export default Contact