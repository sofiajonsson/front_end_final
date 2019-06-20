import React, { Component } from "react";
import SnowReport from "../components/SnowReport"
import SnowReportSearchBar from '../components/SnowReportSearchBar'
import { Image, Header, Segment, TransitionablePortal } from 'semantic-ui-react'

const transitions = ['drop']

class SnowReportList extends Component{
	constructor(props) {
		super(props)
		this.state={
			displayType: '',
			portal: false
		}
		// console.log("Snow Report", props)
	 }
	portal=()=>{
		let portal = true
		 this.setState({ portal })
		 portal = false
		 setTimeout(() => this.setState({ portal }), 1000)
	}

renderReports =() => {
	 if (this.state.displayType === ''){
		 return(
			 	<div>
	 		{this.props.snowReport.map(snowReport => {
				return <SnowReport
									key={snowReport.id}
									snowReport={snowReport}
									snowReportHandleClick={this.props.snowReportHandleClick}
									portal={this.portal}
									 /> })}
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
									portal={this.portal}
									/> })}
				</div>
		 	)
 		}
 }


setSearch =() =>{
	this.setState({ displayType: "newSearch" })
}
	render(){
		// console.log(this.props.snowReport)
		const { drop} = transitions[0]
		const { duration } = 1000
		return(
			<div>
			<TransitionablePortal open={this.state.portal} transition={{ drop,duration }} >
					<Segment style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}>
							<Header>Added to favorites!</Header>
					</Segment>
			</TransitionablePortal>
			<SnowReportSearchBar
				sortAlphabetically={this.props.sortAscAlphabetically}
				sortByOpen={this.props.sortByOpen}
				handleSearch={this.props.handleSearch}
				setSearch={this.setSearch}
			/>

				<h1 className="List-title">Snow Reports List</h1>
				<div >
					{this.renderReports()}
				</div>
			</div>
		)
	}
}
export default SnowReportList
