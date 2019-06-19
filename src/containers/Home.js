import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Header from './Header'
class Home extends Component {

	render() {
		return(
			<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
			<Header />
				<h1>Powdah Hounds</h1>

				<img src="https://i0.wp.com/www.powder.com/wp-content/uploads/2019/06/Jason-Killgore1.jpg?resize=1920%2C1080&ssl=1" alt="" className="img-responsive" />

				<h3> Cant wait to Ski?</h3>
				<h4> Please Choose a Page to Browse North American Resorts</h4>

				<div className="ui three item menu">
					<button> <Link to="/resorts">Resorts</Link> </button>
					<button><Link to="/forecasts">Forecasts</Link> </button>
				<button><Link to="/snowreports">Snow Reports</Link> </button>
				</div>
			</div>
		)
	}
}



export default Home
