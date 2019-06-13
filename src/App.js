import React, { Component } from "react";

import Header from './containers/Header'
import Main from './containers/Main'


import { withRouter } from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          < Header />
          < Main />
      </div>
      );
    }
  }

export default withRouter(App);
