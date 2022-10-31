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
                   Submitted ? (
                    <div className="alert alert-success text-center" role="alert">
                        <h3>Thank you for your comments!</h3>
                        <p>We will contact you as soon as possible!</p>
                        </div>) : (<></>)
                }        
                        
                {
                   Submitted ? (
                    <div className="alert alert-danger text-center" role="alert">
                        <h3>Something went wrong!</h3>
                        <p>We couldn't submitt your comments!</p>
                        </div>) : (<></>)
                }    
                            <h2>Come in contact with us</h2>
                            <form onSubmit={handleSubmit} noValidate>
                                <div>
                                    <input id="name" value={contactForm.name} onChange={handleChange} type="text" placeholder="Your Name"/>
                                    <div id="nameErrorMessage" className="errorMessage">{formErrors.name}</div>
                                </div>
                                <div>
                                    <input id="email" value={contactForm.email}  onChange={handleChange}  type="email" placeholder="Your Mail" />
                                    <div id="emailErrorMessage" className="errorMessage">{formErrors.email}</div>
                                </div>
                                
                                <div className="textarea">
                                    <textarea id="comment" value={contactForm.comment}  onChange={handleChange} placeholder="Comments"></textarea>
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


            </div>     
        </section>        
    )

}
export default ContactFormSection

