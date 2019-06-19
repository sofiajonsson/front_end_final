import React, { Component } from "react";
// import { Switch, Route } from 'react-router-dom'
import Resort from '../components/Resort'
import ResortSearchBar from '../components/ResortSearchBar'
import Header from './Header'

class ResortList extends Component{
	constructor(props) {
		super(props)
		this.state={
			displayType: ''
		}
		console.log("resort list", props)
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
		return(
			<div>
			<Header />
			<ResortSearchBar
				sortAlphabetically={this.props.sortAscAlphabetically}
				sortByPrice={this.props.sortByPrice}
				handleSearch={this.props.handleSearch}
				setSearch={this.setSearch}
			/>
				<h1>Resorts List </h1>
				<br/>
				<div className='ui centered three column grid' floated='right'>
				{this.renderReports()}
			</div>
			</div>
		)
	}
}
export default ResortList
