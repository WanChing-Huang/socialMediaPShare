import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserPage from './UserPage';

import './App.css'

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path="/user/:username" component={UserPage} />
        </Switch>
      </Router>
    </>
  )
}

export default App
