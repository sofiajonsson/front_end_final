import React, { Component } from "react";

class Resort extends Component{
	constructor(props) {
		super(props)
			this.state={}
		}

	render() {
		return(
			<div onClick={()=> this.props.handleClick(this.props.resort)}>
				<div className="card-body">
					<h3 className="card-title">{this.props.resort.title}</h3>

					<table className="forecast-table">

						<tbody>
							<tr>
								<td>
									<img src={`https://www.skiresort.info/${this.props.resort.img}`} alt="ski-resort-img"/>
								</td>
								<td>
									<h6>Elevation:</h6>
									<h6>Skiiable Terrain:</h6>
									<h6>Beginner Runs:</h6>
									<h6>Intermediate Runs:</h6>
									<h6>Expert Runs:</h6>
									<h6>Total Lifts:</h6>
									<h6>Ticket Price:</h6>
								</td>
								<td>
									<h6>{this.props.resort.elevation_gain}</h6>
									<h6>{this.props.resort.skiiable_terrain}</h6>
									<h6>{this.props.resort.beginner}</h6>
									<h6>{this.props.resort.intermediate}</h6>
									<h6>{this.props.resort.expert}</h6>
									<h6>{this.props.resort.total_lifts}</h6>
									<h6>{this.props.resort.ticket_price}</h6>
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
