import React, { Component } from "react";
import SnowReport from "../components/SnowReport"

class SnowReportList extends Component{
	constructor(props) {
		super(props)
		this.state={}
	}
	render(){
		return(
			<div>
				<h1>Snow Report List</h1>
				List out the Snow Reports
			</div>
		)
	}
}
export default SnowReportList
