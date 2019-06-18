import React, { Component } from "react";
import SnowReport from "../components/SnowReport"
import SnowReportSearchBar from '../components/SnowReportSearchBar'
import Header from './Header'

class SnowReportList extends Component{
	constructor(props) {
		super(props)
		this.state={}
		// console.log("Snow Report", props)
	 }

	render(){
		console.log(this.props.snowReport)
		return(
			<div>
			<Header />
			<SnowReportSearchBar
				sortAlphabetically={this.props.sortAscAlphabetically}
				sortByOpen={this.props.sortByOpen}
			/>
				<h1>Snow Reports List</h1>
				<div className='ui centered three column grid' floated='right'>
					{this.props.snowReport.map(snowReport => {
						return <SnowReport key={snowReport.id} snowReport={snowReport}/>
					})
				}
				</div>
			</div>
		)
	}
}
export default SnowReportList
