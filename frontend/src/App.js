import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Cart from './components/Cart'
import Footer from './components/Footer'
import NavBar from './components/NavBar';
import ProductCard from './components/ProductCard'
import Backdrop from './components/Backdrop';
import Sidedrawer from './components/Sidedrawer';




function App() {
  const [sideToggle, setSidetoggle] = useState(false)


  return (
      <Router>
          <NavBar click={() => setSidetoggle(true)} />
          <Sidedrawer show={sideToggle} click={() => setSidetoggle(false)} />
          <Backdrop show={sideToggle} click={() => setSidetoggle(false)} />
          <main>
            <Routes>
              <Route exact path='/' Component={Home}/>
              <Route exact path='/product/:id' Component={ProductCard}/>
              <Route exact path='/cart' Component={Cart}/>
            </Routes>
          </main>
          <Footer />
      </Router>
  );
}

export default App;
