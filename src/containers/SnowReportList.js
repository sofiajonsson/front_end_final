import React, { Component } from "react";
import SnowReport from "../components/SnowReport"

class SnowReportList extends Component{
	constructor(props) {
		super(props)
		this.state={}
		console.log("Snow Report", props)
	}

	render(){
		return(
			<div>
				<h1>Snow Report List</h1>
				<SnowReport />
			</div>
		)
	}
}
export default SnowReportList
