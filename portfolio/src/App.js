import './App.css';
import Layout from './components/layout'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Intro from '../src/components/intro'


function App() {
  return (
    <>
    <Header />
    <div className="container">
    <Intro />
    <Home>
    <Layout />
    </Home>
    </div>
    <Footer />
   </>

    );
}

export default App;
