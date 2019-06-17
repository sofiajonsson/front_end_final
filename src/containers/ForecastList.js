import React, { Component } from "react";
import Forecast from '../components/Forecast'
import ForecastSearchBar from '../components/ForecastSearchBar'
import Header from './Header'

class ForecastList extends Component{
	constructor(props) {
		super(props)
		this.state={}
	}
	render(){
		return(
			<div>
			<Header />
			<ForecastSearchBar
				sortAlphabetically={this.props.sortAscAlphabetically}
			/>
				<h1>Forecast List</h1>
					{this.props.forecast.map(forecast => {
						return <Forecast id={forecast.id} forecast={forecast} />
					})}
			</div>
		)
	}
}
export default ForecastList
