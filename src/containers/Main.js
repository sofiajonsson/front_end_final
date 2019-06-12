import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import ResortList from './ResortList'
import ForecastList from './ForecastList'
import SnowReportList from './SnowReportList'


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


		 sortByPrice =()=> {
			const resortPrice = this.state.resorts.sort(this.priceSortMethod)

				this.setState({
					resorts: resortPrice
				})
			}

			priceSortMethod= (s1, s2) => {
				if(s1.ticket_price < s2.ticket_price){
					return 1;
				}
				if (s1.ticket_price > s2.ticket_price){
					return -1;
				}

				return 0
			}
			sortAlphabetically=() => {
	 			const rezSorted = this.state.resorts.sort(this.sortMethod)
	 			const forecastSorted = this.state.forecastReports.sort(this.sortMethod)
	 			const snowRepSorted = this.state.snowReports.sort(this.sortMethod)
		 			this.setState({
			 			resorts: rezSorted,
			 			forecastReports: forecastSorted,
			 			snowReports: snowRepSorted
				 })
			 }
			 sortMethod =(s1, s2) =>{
					if(s1.title < s2.title){
						return -1;
					}
					if (s1.title > s2.title){
						return 1;
					}
					return 0
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
          <Route exact path='/' render={()=>  <Home/>}/>
          <Route path='/resorts' render={() => <ResortList resorts={this.state.resorts} sortAlphabetically={this.sortAlphabetically} sortByPrice={this.sortByPrice} isAuthed={true} />}
          />
          <Route path='/forecasts' render={() => <ForecastList forecast={this.state.forecastReports} sortAlphabetically={this.sortAlphabetically} isAuthed={true} />}
          />
          <Route path='/snowreports' render={() => <SnowReportList snowReport={this.state.snowReports} sortAlphabetically={this.sortAlphabetically} isAuthed={true} />}
          />
      </Switch>
      </main>
    )
  }
}
export default Main
