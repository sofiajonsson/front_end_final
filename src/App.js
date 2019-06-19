import React, { Component } from "react";

import { Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import ResortList from './containers/ResortList'
import ForecastList from './containers/ForecastList'
import SnowReportList from './containers/SnowReportList'
import Login from './components/Login'
import User from './containers/User'
import FaveResort from './containers/FaveResort'


import './App.css'
import { withRouter } from 'react-router-dom'
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
      resorts: [],
      favoriteResorts: [],
      favoriteForecasts: [],
      favoriteSnowReports: [],
      searchSnowResults: [],
      searchForecastResults: [],
      searchResortResults: []
    }

    fetch(snow_API)
    .then(res => res.json())
    .then(snowReports => this.setState({ snowReports }, () => console.log(this.state.snowReports)))
    // .then(console.log(this.state.snowReports))
    // console.log('hit snow api ')
    // console.log("Snow Report Fetch", this.state.snowReports)

    fetch(forecast_API)
    .then(res => res.json())
    .then(forecastReports => this.setState({ forecastReports }, () => console.log(this.state.forecastReports)))
    // console.log('hit forecast api')

    fetch(resort_API)
    .then(res => res.json())
    .then(resorts => this.setState({ resorts }, () => console.log(this.state.resorts)))
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

    setStateUsernameEmailToken = (data) => {
      let user = {...this.state.user}
      user.email = data.email
      user.username = data.raw.names[0].displayName
      user.token = localStorage.getItem('Final_Project_Token')
      this.setState({user})
    }

    handleLogout = () => {
      localStorage.removeItem('Final_Project_Token')
      localStorage.removeItem('Final_Project_Email')
      localStorage.removeItem('Final_Project_Username')
      let user = {
        email: '',
        username: '',
        token: ''
      }
      this.setState({user})
    }

    addResort = (resort) => {
      // debugger
        console.log("hit add resort")
        if(!this.state.favoriteResorts.find(clicked => clicked.id === resort.id)){
          console.log("Resort added to Favorites");
          const newFavorite = [...this.state.favoriteResorts, resort]
          this.setState({
            favoriteResorts: newFavorite
          }, ()=>console.log(this.state.favoriteResorts))
        }
      }
    addForecast = (forecast) => {
      //debugger
        console.log("hit add forecast")
        if(!this.state.favoriteForecasts.find(clicked => clicked.id === forecast.id)){
          console.log("Resort added to Favorites");
          const newFavorite = [...this.state.favoriteForecasts, forecast]
          this.setState({
            favoriteForecasts: newFavorite
          }, ()=>console.log(this.state.favoriteForecasts))
        }
      }
    addSnowReport = (snowReport) => {
      // debugger
        console.log("hit add snowReport")
        if(!this.state.favoriteSnowReports.find(clicked => clicked.id === snowReport.id)){
          console.log("Resort added to Favorites");
          const newFavorite = [...this.state.favoriteSnowReports, snowReport]
          this.setState({
            favoriteSnowReports: newFavorite
          }, ()=>console.log(this.state.favoriteSnowReports))
        }
      }

    removeResort = (resort) => {
      console.log("removing")
      let favoriteResortCopy = this.state.favoriteResorts.filter(fave => {
        if (fave !== resort) return fave
      })
      this.setState({
        favoriteResorts: favoriteResortCopy
        })
      }
    removeForecast = (forecast) => {
      console.log("removing")
      let favoriteForecastCopy = this.state.favoriteForecasts.filter(fave => {
        if (fave !== forecast) return fave
      })
      this.setState({
        favoriteForecasts: favoriteForecastCopy
        })
      }
    removeSnowReport = (snowReport) => {
      console.log("removing")
      let favoriteSnowReportCopy = this.state.favoriteSnowReports.filter(fave => {
        if (fave !== snowReport) return fave
      })
      this.setState({
        favoriteSnowReports: favoriteSnowReportCopy
        })
      }

    handleSearch = (searchString) => {
      console.log(searchString);
      const searchSnowResults = this.state.snowReports.filter(snowReport => snowReport.title.includes(searchString))
      const searchForecastResults = this.state.forecastReports.filter(forecastReport => forecastReport.title.includes(searchString))
      const searchResortResults = this.state.resorts.filter(resortReport => resortReport.title.includes(searchString))
      console.log(searchSnowResults);
      console.log(searchForecastResults);
      console.log(searchResortResults);
      this.setState({
        searchSnowResults,
        searchForecastResults,
        searchResortResults })
    }


  render () {
    console.log(this.state);
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
          <Route path='/resorts' render={() => <ResortList
                                                  searchResortResults={this.state.searchResortResults}
                                                  resorts={this.state.resorts}
                                                  resortHandleClick={this.addResort}
                                                  handleSearch={this.handleSearch}
                                                  sortAscAlphabetically={this.sortAscAlphabetically}
                                                  sortByPrice={this.sortByPrice}
                                                  isAuthed={true}
                                                  />}
          />
          <Route path='/forecasts' render={() => <ForecastList
                                                    searchForecastResults={this.state.searchForecastResults}
                                                    forecast={this.state.forecastReports}
                                                    forecastHandleClick={this.addForecast}
                                                    handleSearch={this.handleSearch}
                                                    sortAscAlphabetically={this.sortAscAlphabetically}
                                                    sortByOpen={this.sortByOpen}
                                                    isAuthed={true}
                                                    />}
          />
          <Route path='/snowreports' render={() => <SnowReportList
                                                      searchSnowResults={this.state.searchSnowResults}
                                                      snowReport={this.state.snowReports}
                                                      snowReportHandleClick={this.addSnowReport}
                                                      handleSearch={this.handleSearch}
                                                      sortAscAlphabetically={this.sortAscAlphabetically}
                                                      sortByOpen={this.sortByOpen}
                                                      isAuthed={true}
                                                      />}
          />
          <Route path='/login' render={() => <Login
                                                isAuthed={true}
                                                setStateUsernameEmailToken={this.setStateUsernameEmailToken}
                                                user={this.state.user}
                                                />}
          />
          <Route path='/user' render={() => <User
                                              favoriteResorts={this.state.favoriteResorts}
                                              favoriteForecasts={this.state.favoriteForecasts}
                                              favoriteSnowReports={this.state.favoriteSnowReports}
                                              resortHandleClick={this.removeResort}
                                              forecastHandleClick={this.removeForecast}
                                              snowReportHandleClick={this.removeSnowReport}
                                              isAuthed={true}
                                              user={this.state.user} />}
          />
      </Switch>

      </main>
    )
  }
}

export default withRouter(App);
