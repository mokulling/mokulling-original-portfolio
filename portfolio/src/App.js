import './App.css';
import Layout from './components/layout'
import Header from './components/header'
import Footer from './components/footer'
import Container from './components/container'
import Home from './pages/home'
import Intro from '../src/components/intro'
function App() {
  return (
    <>
    <Header />
    <Intro />
    <Home />
    <Layout />
    <Footer />
   </>

    );
}

export default App;
