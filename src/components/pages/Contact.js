import React from 'react'
import emailjs from 'emailjs-com'
import '../../css/contact.css'

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_owwdguk', 'template_xuzns8l', e.target, 'user_QHPAAN4RyoYjdmj4juAyU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <>
            <main className='page-container'>
                <div className='form-box-container'>
                    <div className='contact-form-box'>
                        <form onSubmit={sendEmail} className='contact-form'>
                            <div className='form-group'>
                                <label>Name:</label>
                                <input type='text' name='name' placeholder='John Doe' required />
                            </div>
                            <div className='form-group'>
                                <label>Email:</label>
                                <input type='email' name='email' placeholder='john@doe.com' required />
                            </div>
                            <div className='form-group message'>
                                <label>Message:</label>
                                <textarea className='message-field' name='message' wrap='soft' placeholder='What would you like to chat about?' required />
                            </div>
                            <div className='form-group submit'>
                                <input className='submit-button' type='submit' name='submit' />
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Contact
