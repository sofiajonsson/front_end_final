import React, { Component } from "react";
// import { Switch, Route } from 'react-router-dom'
import Resort from '../components/Resort'
import ResortSearchBar from '../components/ResortSearchBar'
import Header from './Header'

class ResortList extends Component{
	constructor(props) {
		super(props)
		this.state={
		}
		console.log("resort list", props)
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
			/>
				<h1>Resorts List </h1>
				<br/>
						<div className='ui centered three column grid'>
						{this.props.resorts.map(resort => {
							return <Resort key={resort.id} resort={resort} handleStock={this.props.favoriteResort}/>
						})
					}
			</div>
			</div>
		)
	}
}
export default ResortList
