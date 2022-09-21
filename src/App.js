// import logo from './logo.svg';
import React from 'react';
import './App.css';

// import Routes for navigation of pages
import {Routes, Route} from 'react-router-dom';


// import the components section here so that it can use those pages
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import NotFound from './components/NotFound';
import Footer from './components/Footer';





function App() {
  return (
    <>
      <Navbar />
      <Header /> 
      <div className='container'>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element = {<About />} />
          <Route path="/contactus" element = {<ContactUs />} />
          <Route path="*" element = {<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
