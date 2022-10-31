import React, { useState } from 'react'

const ContactFormSection = () => {
    
    const [contactForm, setContactForm] = useState({name: '', email: '', comment: ''})
    const [formErrors, setFormErrors] = useState({})
    const [Submitted, SetSubmitted] = useState(false)


    const validate = (values) => {
        const errors = {}
        const regex_email = (/^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/)

        if (!values.name)
        errors.name = "You must enter a name"

        if (!values.email)
        errors.email = "You must enter an e-mail adress"
        else if(!regex_email.test(values.email))
        errors.email = "You must enter a valid e-mail adress (eg. name@domain.com)"

        if (!values.comment)
        errors.comment = "You must enter a comment"
        else if(!values.comment.length < 5 )
        errors.comment = "Your comment must longer then five characters"
        
        if (Object.keys(errors).length === 0)
            SetSubmitted(true)
        else 
            SetSubmitted(false)    

        return errors;
    }

    
    const handleChange = (e) => {
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(contactForm))
    }



    return (  
       
        <section className="contact-form">
            <div className="container">
                {
                   Submitted ?
                    (<div className="d-flex justify-content-center align-items-center">
                        <div>Thank You For Your Comment!</div>
                    </div>)
                   :
                   (    
                        <>
                            <h2>Come in contact with us</h2>
                            <form onSubmit={handleSubmit} noValidate>
                                <div>
                                    <input id="name" type="text" placeholder="Your Name" value={contactForm.name} onChange={handleChange} />
                                    <div id="nameErrorMessage" className="errorMessage">{formErrors.name}</div>
                                </div>
                                <div>
                                    <input id="email" type="email" placeholder="Your Mail" value={contactForm.email}  onChange={handleChange} />
                                    <div id="emailErrorMessage" className="errorMessage">{formErrors.email}</div>
                                </div>
                                
                                <div className="textarea">
                                    <textarea id="comment" placeholder="Comments" value={contactForm.comment}  onChange={handleChange}></textarea>
                                    <div id="commentErrorMessage" className="errorMessage">{formErrors.comment}</div>
                                </div>
                        
                                <div>
                                    <button type="submit" className="btn-theme">
                                        <span className="corner-topLeft"></span>
                                        <span className="corner-topRight"></span>
                                        Post Comments
                                    </button>
                                </div>
                            </form>

                        </>  
                    )
                }    
                

            </div>     
        </section>        
    )


}    
export default ContactFormSection

