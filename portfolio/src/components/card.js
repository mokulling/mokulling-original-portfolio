import React from 'react'



const Card = () => (
  <section className="container">
  <article className="row my-sm-6">
      <h1 className="text-sm-center">Portfolio</h1>
  </article>
  <hr />

    <article className="port row mb-sm-4">
    <h2 className="port">Wikigames</h2>
    <a target="_blank" href="https://mokulling.github.io/wikigames"><img alt="wikigames" className="img-port card img-fluid float-lg-right mb-md-4" src="wikigames.png" /></a>
    <p className="port">A web app utilizing the YouTube and RAWG games API users can search to make decisions about buying new games.</p>
  </article>
    <div>
    <h4>Technologies used:</h4>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>YouTube api</li>
      <li>RAWG api</li>
      <li>nes.css front-end framework</li>
    </ul>
</div>
<div>
      <p className="link-container"><a target="_blank" href="https://mokulling.github.io/wikigames">Live Site</a></p>
      <p className="link-container">  <a href="https://github.com/mokulling/wikigames" target="_blank:">Github Repository</a></p>
    <hr />
</div>
    <article className="port row mb-sm-4">
      <h2 className="port" >Weather Dashboard</h2>
      <a target="_blank" href="https://mokulling.github.io/weatherdashboard"><img alt="weather-dashboard" className="img-port card img-fluid float-lg-left mb-md-4" src="weatherdashboard.png" /> </a>
    <p className="port">A weather dashboard utilizing an API where users can search for weather forecasts anywhere around the world.</p>
    <h4>Technologies used:</h4>
  </article>
  <div>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>OpenWeatherMap API</li>
    </ul>
  </div>
  <a target="_blank" href="https://mokulling.github.io/weatherdashboard">
  <div>
      <p className="link-container">Live Site</p>
  </div>
</a>

  <a target="_blank" href="https://github.com/mokulling/Weather-Dashboard">
  <div>
      <p className="link-container">Github Repository</p>
    </div>
  </a>
    
    <hr />
    <article className="port row mb-sm-4">
      <h2 className="port">Note Taker</h2>
      <a href="https://still-retreat-16511.herokuapp.com/" target="_blank"> <img alt="password-generator" className="img-port card img-fluid float-lg-right mb-md-4" src="Notetaker.png" /></a>
      <p className="port">This project utilizes Express and node.js and it allows users to save and create new notes in a front end environment.  </p>
    </article>
    <div>
      <h4>Technologies used:</h4>
      <ul>
        <li>Node.js</li>
        <li>Express</li>
        <li>HTML</li>
        <li>Javascript</li>
        <li>CSS</li>
      </ul>
    </div>
    <a href="https://still-retreat-16511.herokuapp.com/" target="_blank"> 
    <div>
      <p className="link-container">Live Site</p>
    </div></a>
    <a href="https://github.com/mokulling/note-taker">
    <div>
      <p className="link-container">Github Repository</p>
    </div>
  </a>
    
      <hr />

      <article className="port row mb-sm-4">
        <h2 className="port">Readme Generator</h2>
        <a href="https://mokulling.github.io/passwordgenerator/" target="_blank"> <img alt="password-generator" className="img-port card img-fluid float-lg-right mb-md-4" src="readmegenerator.png" /></a>
        <p className="port">This project generates a markdown readme file with a table of contents, description, and contact information for the developer creating it. This project was created using node.js</p>
      </article>
      <div>
        <h4>Technologies used:</h4>
        <ul>
          <li>Node.js</li>
          <li>Express</li>
          <li>Inquirer</li>
        </ul>
      </div>
      <a target="_blank" href="https://vimeo.com/512654622">
      <div>
        <p className="link-container">Video walkthrough</p>
      </div>
    </a>
      <a target="_blank" href="https://github.com/mokulling/readmegenerator">
      <div>
        <p className="link-container">Github Repository</p>
      </div>
    </a>
    
    </section>

  
     


)



export default Card






