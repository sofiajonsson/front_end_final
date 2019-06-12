import React, { Component } from "react";
import Forecast from '../components/Forecast'
import ForecastSearchBar from '../components/ForecastSearchBar'
class ForecastList extends Component{
	constructor(props) {
		super(props)
		this.state={}
	}
	render(){
		return(
			<div>
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
