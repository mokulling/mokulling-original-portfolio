import './App.css';
import Layout from './components/layout'
import Header from './components/header'
import Footer from './components/footer'
import Card from './components/card'
import Home from './pages/home'
import Contact from './components/contact'
import Intro from '../src/components/intro'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";



function App() {
  return (
    <Router>
      <>
        <Header />
        <div className="container">
        
          <Route path='/home'>
              <Intro />
              <Home>


                <Layout />
              </Home>
          </Route>

          <Route path='/portfolio'>
              <Card />


          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;
