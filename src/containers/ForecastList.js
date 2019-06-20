import React, { Component } from "react";
import Forecast from '../components/Forecast'
import ForecastSearchBar from '../components/ForecastSearchBar'
import { Image, Header, Segment, TransitionablePortal } from 'semantic-ui-react'

const transitions = ['drop']

class ForecastList extends Component{
	constructor(props) {
		super(props)
		this.state={
			displayType: '',
			portal: false
		}
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
		 		{this.props.forecast.map(forecast => {
					return <Forecast
										key={forecast.id}
										forecast={forecast}
										forecastHandleClick={this.props.forecastHandleClick}
										portal={this.portal}
										/> })}
					</div>
		 	)
		} else if (this.state.displayType === "newSearch") {
			return(

				<div>
			 		{ this.props.searchForecastResults.map(searchForecastResult => {
			 		return <Forecast
										key={searchForecastResult.id}
										forecast={searchForecastResult}
										forecastHandleClick={this.props.forecastHandleClick}
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
		const { drop} = transitions[0]
		const { duration } = 1000
		return(
			<div>
				<ForecastSearchBar
					sortAlphabetically={this.props.sortAscAlphabetically}
					handleSearch={this.props.handleSearch}
					setSearch={this.setSearch}
				/>
				<TransitionablePortal open={this.state.portal} transition={{ drop,duration }} >
						<Segment style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}>
								<Header>Added to Favorites!</Header>
						</Segment>
				</TransitionablePortal>
					<h1>Forecast List</h1>
					<div>
						{this.renderReports()}
					</div>
			</div>
		)
	}
}
export default ForecastList
