import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

export default function App() {
  return (
    <Router>
      <NavMenu />
      <Home />
      <About />
      <Projects />
      <Contact />
    </Router>
  );
}
