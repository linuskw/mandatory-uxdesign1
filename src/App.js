import React from 'react';
import './App.css';

import Main from './components/Main.js';

import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Main} />
      </Router>
    </>
  );
}

export default App;
