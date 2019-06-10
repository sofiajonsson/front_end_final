import React, { Component } from "react";
import SnowReportList from './containers/SnowReportList'
import ResortList from './containers/ResortList'
import ForecastList from './containers/ForecastList'

import './App.css';


const snow_API = "http://localhost:3000/snow_reports"
const forecast_API = "http://localhost:3000/weekly_forecasts"
const resort_API = "http://localhost:3000/resorts"
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      snowReports: [],
      forecastReports: [],
      resorts: []
    }

    fetch(snow_API)
    .then(res => res.json())
    .then(snowReports => this.setState({ snowReports }), () => console.log(this.state.snowReports))
    console.log('hit snow api ')

    fetch(forecast_API)
    .then(res => res.json())
    .then(forecastReports => this.setState({ forecastReports }), () => console.log(this.state.forecastReports))
    console.log('hit forecast api')

    fetch(resort_API)
    .then(res => res.json())
    .then(resorts => this.setState({ resorts }), () => console.log(this.state.resorts))
    console.log('hit resort api ')
  }
render() {
  return (
    <div className="App">
    Snow Reports Recieved: {this.state.snowReports.length}
    <br/>
    Forecast Reports Recieved: {this.state.forecastReports.length}
    <br/>
    Resorts Recieved: {this.state.resorts.length}


    <SnowReportList
      snowReports={this.state.snowReports}
      />
    <ForecastList
      forecastReports={this.state.forecastReports}
      />
    <ResortList
      resorts={this.state.resorts}
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
