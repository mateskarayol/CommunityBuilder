import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import CreateCommunityForm from './forms/CreateCommunityForm'
import Homepage from './forms/Homepage'
const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/home" component={Homepage} />
      <Route path="/forms/CreateCommunityForm" component={CreateCommunityForm} />
    </div>
  </Router>
)
//ReactDOM.render(routing, document.getElementById('root'));