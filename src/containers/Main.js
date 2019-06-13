import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import ResortList from './ResortList'
import ForecastList from './ForecastList'
import SnowReportList from './SnowReportList'
import Login from '../components/Login'


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
    // console.log('hit snow api ')
    // console.log("Snow Report Fetch", this.state.snowReports)

    fetch(forecast_API)
    .then(res => res.json())
    .then(forecastReports => this.setState({ forecastReports }), () => console.log(this.state.forecastReports))
    // console.log('hit forecast api')

    fetch(resort_API)
    .then(res => res.json())
    .then(resorts => this.setState({ resorts }), () => console.log(this.state.resorts))
    // console.log('hit resort api ')
  }

//Resort Price Sort
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

//Snow Report Status Sort
      sortByOpen =()=> {
       const resortStatus = this.state.snowReports.sort(this.openSortMethod)

         this.setState({
           snowReports: resortStatus
         })
       }

       openSortMethod= (s1, s2) => {
         if(s1.status < s2.status){
           return 1;
         }
         if (s1.status > s2.status){
           return -1;
         }

         return 0
       }

//Sorting all ASCAlphabetically
			sortAscAlphabetically=() => {
	 			const rezSorted = this.state.resorts.sort(this.resortSortMethod)
	 			const forecastSorted = this.state.forecastReports.sort(this.resortSortMethod)
	 			const snowRepSorted = this.state.snowReports.sort(this.resortSortMethod)
		 			this.setState({
			 			resorts: rezSorted,
			 			forecastReports: forecastSorted,
			 			snowReports: snowRepSorted
				 })
			 }
			 resortSortMethod =(s1, s2) =>{
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

      <div id="container">
      </div>


      <Switch>
          <Route exact path='/' render={()=>  <Home/>}/>
          <Route path='/resorts' render={() => <ResortList resorts={this.state.resorts} sortAscAlphabetically={this.sortAscAlphabetically} sortByPrice={this.sortByPrice} isAuthed={true} />}
          />
          <Route path='/forecasts' render={() => <ForecastList forecast={this.state.forecastReports} sortAscAlphabetically={this.sortAscAlphabetically} sortByOpen={this.sortByOpen} isAuthed={true} />}
          />
          <Route path='/snowreports' render={() => <SnowReportList snowReport={this.state.snowReports} sortAscAlphabetically={this.sortAscAlphabetically} sortByOpen={this.sortByOpen} isAuthed={true} />}
          />
          <Route path='/login' render={() => <Login  isAuthed={true} />}
          />
      </Switch>
    
      </main>
    )
  }
}
export default Main
