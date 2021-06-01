import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {About, Hero, Services, Testimonial, Contact, Work, Copyright} from './components'

function App() {
  return (
    <Router>
      <Hero />
      <About />
      {/* <Services /> */}
      {/* <Work /> */}
      {/* <Testimonial /> */}
      {/* <Contact /> */}
      {/* <Copyright /> */}
    </Router>
  );
}

export default App;
