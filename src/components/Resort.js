import React, { Component } from "react";

class Resort extends Component{
	constructor(props) {
		super(props)
			this.state={}
		}
	render() {
		console.log(this.props.resort);
		return(
			<div>
				<div className="card-body">
					<h3 className="card-title">{this.props.resort.title}</h3>
					<table className="forecast-table">
						<tbody>
						<tr>
							<td>
							</td>
							<td>
							Elevation:
							</td>
							<td>
							Skiiable Terrain:
							</td>
							<td>
							Beginner Runs:
							</td>
							<td>
							Intermediate Runs:
							</td>
							<td>
							Expert Runs:
							</td>
							<td>
							Total Lifts:
							</td>
							<td>
							Ticket Price:
							</td>
							</tr>
						<tr>
							<td>
							<img src={`https://www.skiresort.info/${this.props.resort.img}`} alt="ski-resort-img"/>
							</td>
							<td>
							<h5> {this.props.resort.elevation_gain}</h5>
							</td>
							<td>
							<h5> {this.props.resort.skiiable_terrain}}</h5>
							</td>
							<td>
							<h5> {this.props.resort.beginner}}</h5>
							</td>
							<td>
							<h5>{this.props.resort.intermediate}}</h5>
							</td>
							<td>
							<h5>{this.props.resort.expert}}</h5>
							</td>
							<td>
							<h5>{this.props.resort.total_lifts}}</h5>
							</td>
							<td>
							<h5> {this.props.resort.ticket_price}}</h5>
							</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}
export default Resort
