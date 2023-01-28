import './styles/Contact.css'


const Contact = () => {


    return( 
        <div className="Contact-container">
            <h2>Contact Us</h2>
            <form >
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