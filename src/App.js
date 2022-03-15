import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume'
import Contact from './components/pages/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Router>
          <Navbar/>
          <Routes>
            <Route className='home' path='/' element={<Home/>} />
            <Route className='resume' path='/resume' element={<Resume/>} />
            <Route className='contact' path='/contact' element={<Contact/>} />
          </Routes>
        </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
