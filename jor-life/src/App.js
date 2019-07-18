import React from 'react';
import Main from './components/Main.js'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About.js'


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Main}/>
        <Route exact path="/about" component={About}/>
      </div>
    </Router>
  );
}

export default App;
