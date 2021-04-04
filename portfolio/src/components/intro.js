import React from 'react'
import '../index.css'

const Intro = () => (
    <>
    <div className="intro">
    <h1 id="type1">Hi, I'm Matt.</h1>
    <h2 id ="type2">I'm a <span classNameName="background">web developer.</span></h2>
    <h3 id="type3">I like concepting and creating cool things for the web.</h3>
    <h4><span className="background">about me</span></h4>
    </div>

        
   
    <div className="row">
      <div className="col-lg-4"><img className="img-fluid" src="portfolio/src/images/matt-headshot.jpg" /></div>

        <div className="col-lg-8">
            <p id="aboutme">I'm a full stack web developer interested in the intersection between art and tech. I find the most joy in creating and learning about technologies that not only work seamlessly, but look good at the same time. Tech as a field interests me because it's an opportunity to continue learning, there's always a new tech stack or technology you can use to make your workflow easier, and taking on those new and exciting challenges is what keeps me going. Happy to connect with anyone working to make something pretty on the front end and useful on the back end. I have extensive experience in marketing, working with product and engineering teams to create retention campaigns, coding email templates and working on landing pages.</p>
            <p>I am most comfortable using the following technologies:</p>
           
            <ul>
                <li>HTML<i className="fab fa-html5"></i>
                </li>
                <li>CSS <i className="fab fa-css3"></i>
                </li>
                <li>Javascript <i className="fab fa-js-square"></i>
                </li>     
                <li>
                  Node <i className="fab fa-node-js"></i>
                </li>
                <li>
                  Git <i className="fab fa-git"></i>
                </li>
                <li>
                  Bootstrap <i className="fab fa-bootstrap"></i>
                </li>
                <li>
                  React <i className="fab fa-react"></i>
                </li>
                <li>
                  MySQL
                </li>
                <li>
                  Handlebars.js
                </li>
              
            </ul>
           
        </div>
    </div>
    <br />
    <br />



</>


)

export default Intro