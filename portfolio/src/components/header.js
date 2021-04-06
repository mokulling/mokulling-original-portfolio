import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
  



const Header = () => {

    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <>Matt Kulling</>
            <div className='navbar'><Link to='/home'>Home</Link></div>
            <div className='navbar'><Link to='/portfolio'>Portfolio</Link></div>
            <div className='navbar'><Link to='/contact'>Contact</Link></div>

        </nav>
    
    </> 
    )

}

export default Header;
