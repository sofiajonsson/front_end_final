import React, { Component } from "react";

class Resort extends Component{
	constructor(props) {
		super(props)
			this.state={}
		}
	render() {
		return(
			<div>
				<div className="card-body">
					<h3 className="card-title">{this.props.resort.title}</h3>
					<img src={this.props.resort.img} alt="ski-resort-img"/>
					<h5> Elevation: {this.props.resort.elevation_gain}</h5>
					<h5>Skiiable Terrain: {this.props.resort.skiiable_terrain}}</h5>
					<h4>Types of Runs:</h4>
					<h5>Beginner: {this.props.resort.beginner}}</h5>
					<h5>Intermediate:{this.props.resort.intermediate}}</h5>
					<h5>Expert: {this.props.resort.expert}}</h5>
					<h5>Total Lifts: {this.props.resort.total_lifts}}</h5>
					<h5>Ticket Price: {this.props.resort.ticket_price}}</h5>
				</div>
			</div>
		)
	}
}
export default Resort
