import React, { Component } from "react";

import Header from './containers/Header'
import Main from './containers/Main'

import SnowReportList from './containers/SnowReportList'
import ResortList from './containers/ResortList'
import ForecastList from './containers/ForecastList'

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

export default App;
