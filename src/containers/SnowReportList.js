import React, { Component } from "react";
import SnowReport from "../components/SnowReport"
import SnowReportSearchBar from '../components/SnowReportSearchBar'

class SnowReportList extends Component{
	constructor(props) {
		super(props)
		this.state={}
		console.log("Snow Report", props)
	 }
	// <SearchBar
	// 	sortAlphabetically={this.props.snowReport.sortAlphabetically}
	// 	filtered={this.props.snowReport.filtered} />

	render(){
		console.log(this.props.snowReport)
		return(
			<div>
			<SnowReportSearchBar
				sortAlphabetically={this.props.sortAlphabetically}
			/>
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
