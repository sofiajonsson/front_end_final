import React, { Component } from "react";

class SnowReport extends Component{
	constructor(props){
		super(props)
			this.state={}
	}

	render(){
		return(
			<div className="ui cards">
				<a className="teal card">
					<div className="card-body">
						<h3 className="card-title">{this.props.snowReport.title}</h3>
						<h5> Elevation: {this.props.snowReport.elevation}</h5>
						<h5> Mountain: {this.props.snowReport.status}</h5>
						<h5> Depth: {this.props.snowReport.depth}</h5>
						<h5> Slopes Open:{this.props.snowReport.slopes}</h5>
						<h5> Lifts Open: {this.props.snowReport.lifts}</h5>
						<h5>
							<a href={this.props.snowReport.link}>More Details</a>
						</h5>
 					</div>
				</a>
			</div>
		)
	}
}

export default SnowReport
