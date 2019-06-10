import React, { Component } from "react";
// import SnowReport from "../components/SnowReport"

class ForecastList extends Component{
	constructor(props) {
		super(props)
		this.state={}
	}
	render(){
		return(
			<div>
				<h1>Forecast List</h1>
				<ul>
				Listing forecasts
				</ul>
			</div>
		)
	}
}
export default ForecastList
