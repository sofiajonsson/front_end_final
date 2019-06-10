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
    .then(snowReports => this.setState({ snowReports }))
    .then(console.log(this.state.snowReports))
    // .then(() => this.state.snowReports = props.match )

    console.log('hit snow api ')
    console.log("Snow Report Fetch", this.state.snowReports)

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
          <Route exact path='/' render={Home}/>
          <Route path='/resorts' render={() => <ResortList resorts={this.state.resorts} isAuthed={true} />}
          />
          <Route path='/forecasts' render={() => <ForecastList forecast={this.state.forecastReports} isAuthed={true} />}
          />
          <Route path='/snowreports' render={() => <SnowReportList snowReport={this.state.snowReports} isAuthed={true} />}
          />
        </Switch>
      </main>
    )
  }
}
export default Main
