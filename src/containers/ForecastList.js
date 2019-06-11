import React, { Component } from "react";
import Forecast from '../components/Forecast'

class ForecastList extends Component{
	constructor(props) {
		super(props)
		this.state={}
	}
	render(){
		return(
			<div>
				<h1>Forecast List</h1>
					{this.props.forecast.map(forecast => {
						return <Forecast id={forecast.id} forecast={forecast} />
					})}
			</div>
		)
	}
}
export default ForecastList
