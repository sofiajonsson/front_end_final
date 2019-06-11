import React, { Component } from "react";
import SnowReport from "../components/SnowReport"

class SnowReportList extends Component{
	constructor(props) {
		super(props)
		this.state={}
		console.log("Snow Report", props)
	}


	render(){
		console.log(this.props.snowReport)
		return(
			<div>
				<h1>Snow Reports List</h1>
					{this.props.snowReport.map(snowReport => {
						return <SnowReport key={snowReport.id} snowReport={snowReport}/>
					})
				}

			</div>
		)
	}
}
export default SnowReportList
