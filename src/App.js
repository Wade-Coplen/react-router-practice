import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ComponentOne from './component-1.js';
import ComponentTwo from './component-2.js';
import ComponentThree from './component-3.js';
import Navigation from './navigation.js';
import './App.css';

function App() {
  return (
    
    <Router>
      <Navigation />
      <div className="App">
        <Route 
          path = '/ComponentOne' 
          component= {ComponentOne}
          />
        <Route 
          path = '/ComponentTwo' 
          component= {ComponentTwo} 
          />
        <Route 
          path = '/ComponentThree' 
          component= {ComponentThree}
          />   
      </div>
    </Router>
  );
}

export default App;
