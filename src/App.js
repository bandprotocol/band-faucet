import React, { Component } from 'react'
import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import Navbar from 'components/Navbar'
import LandingPage from 'pages/Landing'
import CreateCommunityPage from 'pages/CreateCommunity';
import FaucetPage from 'pages/Faucet';
import NotFoundPage from 'pages/404'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/faucet" component={FaucetPage} />
            <Route exact path="/createcommunity" component={CreateCommunityPage} />
            <Route path="/" component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}
