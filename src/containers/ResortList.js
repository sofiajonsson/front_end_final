import React, { Component } from "react";
// import { Switch, Route } from 'react-router-dom'
import Resort from '../components/Resort'


class ResortList extends Component{
	constructor(props) {
		super(props)
		this.state={}
		console.log("resort list", props)
	}
	// Steve's way of checking if it's working
// <h1>Resorts List {'authed? ' + this.props.isAuthed} {this.props.resorts.length}</h1>
	render(){
		return(
			<div>
				<h1>Resorts List </h1>
				List out all the resorts

			 <Resort key={resort.id} resort={this.props.resorts}/>


			</div>
		)
	}
}
export default ResortList
