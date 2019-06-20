import React, { Component } from "react";
import Forecast from '../components/Forecast'
import ForecastSearchBar from '../components/ForecastSearchBar'

class ForecastList extends Component{
	constructor(props) {
		super(props)
		this.state={
			displayType: ''
		}
	}
	renderReports =() => {
		 if (this.state.displayType === ''){
			 return(
				 	<div>
		 		{this.props.forecast.map(forecast => {
					return <Forecast
										key={forecast.id}
										forecast={forecast}
										forecastHandleClick={this.props.forecastHandleClick}
										/> })}
					</div>
		 	)
		} else if (this.state.displayType === "newSearch") {
			return(
				<div>
			 		{ this.props.searchForecastResults.map(searchForecastResult => {
			 		return <Forecast
										key={searchForecastResult.id}
										forecast={searchForecastResult}
										forecastHandleClick={this.props.forecastHandleClick}/> })}
					</div>
			 	)
	 		}
	 }
	 setSearch =() =>{
	 	this.setState({ displayType: "newSearch" })
	 }

	render(){
		return(
			<div>
				<ForecastSearchBar
					sortAlphabetically={this.props.sortAscAlphabetically}
					handleSearch={this.props.handleSearch}
					setSearch={this.setSearch}
				/>
					<h1>Forecast List</h1>
					<div className='ui centered three column grid' floated='right'>
						{this.renderReports()}
					</div>
			</div>
		)
	}
}
export default ForecastList
