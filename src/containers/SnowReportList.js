import React, { Component } from "react";
import SnowReport from "../components/SnowReport"
import SnowReportSearchBar from '../components/SnowReportSearchBar'
import Header from './Header'

class SnowReportList extends Component{
	constructor(props) {
		super(props)
		this.state={
			displayType: ''
		}
		// console.log("Snow Report", props)
	 }

renderReports =() => {
	 if (this.state.displayType === ''){
		 return(
			 	<div>
	 		{this.props.snowReport.map(snowReport => {
				return <SnowReport
									key={snowReport.id}
									snowReport={snowReport}
									snowReportHandleClick={this.props.snowReportHandleClick} /> })}
				</div>
	 	)
	} else if (this.state.displayType === "newSearch") {
		return(
			<div>
		 		{ this.props.searchSnowResults.map(searchSnowResult => {
		 		return <SnowReport
				 					key={searchSnowResult.id}
									snowReport={searchSnowResult}
									snowReportHandleClick={this.props.snowReportHandleClick}
									/> })}
				</div>
		 	)
 		}
 }


setSearch =() =>{
	this.setState({ displayType: "newSearch" })
}
	render(){
		console.log(this.props.snowReport)
		return(
			<div>
			<Header />
			<SnowReportSearchBar
				sortAlphabetically={this.props.sortAscAlphabetically}
				sortByOpen={this.props.sortByOpen}
				handleSearch={this.props.handleSearch}
				setSearch={this.setSearch}
			/>
				<h1>Snow Reports List</h1>
				<div className='ui centered three column grid' floated='right'>
					{this.renderReports()}
				</div>
			</div>
		)
	}
}
export default SnowReportList
