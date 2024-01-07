import React from 'react';

const Contact = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <h2 className="section-heading">Contact Us</h2>
                    <p>
                        If you have any questions or feedback, please don't hesitate to reach out
                        to us. You can contact us using the information below or by filling out the
                        contact form.
                    </p>

                    <address>
                        <strong>Your Company/Organization Name</strong>
                        <br />
                        Street Address
                        <br />
                        City, State ZIP Code
                        <br />
                        <abbr title="Phone">P:</abbr> (123) 456-7890
                    </address>

                    <address>
                        <strong>Email</strong>
                        <br />
                        <a href="mailto:info@example.com">info@example.com</a>
                    </address>

                    {/* You can add a contact form component here if needed */}
                </div>
            </div>
        </div>
    );
};

export default Contact;
