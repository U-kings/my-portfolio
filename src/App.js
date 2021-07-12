import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {About, Hero, Skills, Services, Testimonial, Contact, Work, Copyright, Qualification} from './components'

function App() {
  return (
    <Router>
      <Hero />
      <About />
      <Skills />
      <Qualification />
      <Services />
      {/* <Work /> */}
      {/* <Testimonial /> */}
      {/* <Contact /> */}
      {/* <Copyright /> */}
    </Router>
  );
}

export default App;
