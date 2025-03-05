import React from "react";

function Contact() {
    return (
        <div className="container contact-page">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className="text-center">Contact Us</h1>
                    <p className="text-center">Have questions? Reach out to us using the form below.</p>

                    <form className="contact-form">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-dark">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;