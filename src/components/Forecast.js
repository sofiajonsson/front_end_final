import React, { Component } from "react";

class Forecast extends Component {
	constructor(props){
		super(props)
			this.state={}
		}
	render(){
		return(
			<div>Hit Forecast Page
			<div className="card-body">
				<h3 className="card-title">{this.props.forecast.title}</h3>

				<h5> Today at Base: {this.props.forecast.today_at_base}</h5>
				<h5> Today on Mountain: {this.props.forecast.today_on_mountain}</h5>
				<h4> Tomorrow at Base: {this.props.forecast.tomorrow_at_base}</h4>
				<h5> Tomorrow on Mountain: {this.props.forecast.tomorrow_on_mountain}</h5>
				<h5> Day 3 at Base:{this.props.forecast.day3_at_base}</h5>
				<h5> Day 3 on Mountain:{this.props.forecast.day3_at_base}</h5>
				<h5> Day 4 at Base:{this.props.forecast.day4_at_base}</h5>
				<h5> Day 4 on Mountain: {this.props.forecast.day4_on_mountain}</h5>
				<h5> Day 5 at Base: {this.props.forecast.day5_at_base}}</h5>
				<h5> Day 5 on Mountain: {this.props.forecast.day5_on_mountain}</h5>
				<h5> Day 6 on Mountain: {this.props.forecast.day6_on_mountain}</h5>
				<h5> Day 6 on Mountain: {this.props.forecast.day6_on_mountain}</h5>
				<h5> Day 7 on Mountain: {this.props.forecast.day7_on_mountain}</h5>
				<h5> Day 7 on Mountain: {this.props.forecast.day7_on_mountain}</h5>
			</div>
			</div>
		)
	}
}


export default Forecast
