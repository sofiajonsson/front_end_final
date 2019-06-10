import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'
// import SnowReport from "../components/SnowReport"

class ResortList extends Component{
	constructor(props) {
		super(props)
		this.state={}
	}
	render(){
		return(
			<div>
				<h1>Resorts List</h1>
				List out all the resorts
			</div>
		)
	}
}
export default ResortList
