import React, { Component } from 'react'
import './App.css'
import PageContainer from './components/PageContainer'
import { ThemeProvider } from 'styled-components'
import theme from 'ui/theme'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from 'components/Navbar'
import FaucetPage from 'pages/Faucet'
import NotFoundPage from 'pages/404'

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <React.Fragment>
            <Navbar />
            <PageContainer>
              <Switch>
                <Route exact path="/" component={FaucetPage} />
                <Route exact path="/faucet" component={FaucetPage} />
                <Route path="/" component={NotFoundPage} />
              </Switch>
            </PageContainer>
          </React.Fragment>
        </Router>
      </ThemeProvider>
    )
  }
}
