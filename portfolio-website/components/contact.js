import React from 'react';
import '../index.css'





const Contact = () => (
<>
<h2>Contact Me</h2>
  <section className="row">
    <div className="col-md-12 mt-xs-4 ">
      <h3>Matt Kulling</h3>
      <h4>Chicago, IL</h4>
      <p>Use one of the links below to get in touch!</p>
    </div>
    </section>

  <section className="row icons">
    <div className="col float-none">
      <a target="blank" href="https://github.com/mokulling"><i className="contact-icons fab fa-github-square fa-3x"></i></a>
      <a href="http://www.twitter.com" target="blank"><i className="contact-icons fab fa-twitter-square fa-3x"></i></a>
      <a href="https://www.linkedin.com/in/matt-kulling-67789562/" target="blank"><i className="contact-icons fab fa-linkedin fa-3x"></i></a>
      <a href="mailto: matt@mattkulling.com" target="blank"><i className="contact-icons fas fa-envelope-square fa-3x"></i></a>
      <a href="tel:630-346-0050"><i className="contact-icons fas fa-phone-square fa-3x"></i></a>
    </div>
    </section>
  </>
 

)

export default Contact