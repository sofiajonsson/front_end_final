import React, { Component } from "react";
// import { Switch, Route } from 'react-router-dom'
import Resort from '../components/Resort'
import ResortSearchBar from '../components/ResortSearchBar'
import { Image, Header, Segment, TransitionablePortal } from 'semantic-ui-react'

const transitions = ['drop']

class ResortList extends Component{
	constructor(props) {
		super(props)
		this.state={
			displayType: '',
			portal: false
		}
		// console.log("resort list", props)
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
		 		{this.props.resorts.map(resort => {
					return <Resort
										key={resort.id}
										resort={resort}
										resortHandleClick={this.props.resortHandleClick}
										portal={this.portal}
										 />
									 })}
					</div>
		 	)
		} else if (this.state.displayType === "newSearch") {
			return(
				<div>
			 		{ this.props.searchResortResults.map(searchResortResult => {
			 		return <Resort
									key={searchResortResult.id}
									resort={searchResortResult}
									resortHandleClick={this.props.addResort}
									portal={this.portal}
									/>
								})}
					</div>
			 	)
	 		}
	 }
	setSearch =() =>{
		this.setState({ displayType: "newSearch" })
	}
	// Steve's way of checking if it's working
// <h1>Resorts List {'authed? ' + this.props.isAuthed} {this.props.resorts.length}</h1>
	render(){
		const { drop} = transitions[0]
		const { duration } = 1000
		return(
			<div>
				<ResortSearchBar
					sortAlphabetically={this.props.sortAscAlphabetically}
					sortByPrice={this.props.sortByPrice}
					handleSearch={this.props.handleSearch}
					setSearch={this.setSearch}
				/>
				<TransitionablePortal open={this.state.portal} transition={{ drop,duration }} >
						<Segment style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}>
								<Header>Added to favorites!</Header>
						</Segment>
				</TransitionablePortal>
					<h1>Resorts List </h1>
					<br/>
					<div>
					{this.renderReports()}
				</div>
			</div>
		)
	}
}
export default ResortList
