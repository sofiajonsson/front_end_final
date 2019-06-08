import React, { Component } from "react";
import SnowReportList from './containers/SnowReportList'

import './App.css';


const API = "http://localhost:3000/snow_reports"
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      snowReports: []
    }

    fetch(API)
    .then(res => res.json())
    .then(snowReports => this.setState({ snowReports }), () => console.log(this.state.snowReports))
    console.log('hit ')
  }
render() {
  return (
    <div className="App">
    Snow Reports Recieved: {this.state.snowReports.length}
    <SnowReportList
      snowReports={this.state.snowReports}
      />
      {/*<WeeklyForecasts />
      <Resorts />
      <Users />
      <Reviews />*/}
    </div>
    );
  }
}

export default App;
