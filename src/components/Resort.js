import React, { Component } from "react";

class Resort extends Component{
	constructor(props) {
		super(props)
			this.state={}
		}
	render() {
		return(
			<div>
			<h1>Hit Resort Page</h1>
				<div className="card-body">
					<h5 className="card-title">{this.props.resort.title}</h5>
				</div>
			</div>
		)
	}
}
export default Resort
