import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import ResortList from './ResortList'
import ForecastList from './ForecastList'
import SnowReportList from './SnowReportList'
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

const snow_API = "http://localhost:3000/snow_reports"
const forecast_API = "http://localhost:3000/weekly_forecasts"
const resort_API = "http://localhost:3000/resorts"

class Main extends Component {
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
  render () {
    return (
      <main>
      Snow Reports Recieved: {this.state.snowReports.length}
      <br/>
      Forecast Reports Recieved: {this.state.forecastReports.length}
      <br/>
      Resorts Recieved: {this.state.resorts.length}
      <br/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/resorts' component={ResortList}/>
          <Route path='/forecasts' component={ForecastList}/>
          <Route path='/snowreports' component={SnowReportList}/>
        </Switch>
      </main>
    )
  }
}
export default Main
