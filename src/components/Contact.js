import './styles/Contact.css'
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const refForm = useRef()

    const sendForm = (e) => {
        e.preventDefault()
        console.log(refForm)
    }


    return( 
        <div className="Contact-container">
            <h2>Contact Us</h2>
            <form ref={refForm} onSubmit={sendForm}>
                <ul>
                    <li className='half'>
                        <input type='text' name='name' placeholder='Name' required />
                    </li>
                    <li className='half'>
                        <input type='email' name='email' placeholder='Email' required />
                    </li>
                    <li>
                        <input type='text' name='subject' placeholder='Subject' required />
                    </li>
                    <li>
                        <textarea placeholder='Message' name='message' required></textarea>
                    </li>
                    <li>
                        <input className='flat-button' type='submit' value='Send' />
                    </li>


                </ul>

            </form>

        </div>
    )
}

export default Contact