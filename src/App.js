import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

export default function App() {
  return (
    <Router>
      <NavMenu />

      <Switch>
        <Route path="/about">
          <About />
        </Route>
      </Switch>

      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>

      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>

      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
