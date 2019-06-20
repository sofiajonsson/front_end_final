import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Home extends Component {

	render() {

		return(
			<div id="home-image" >
			<img src='https://181ge72mb8rnbx7z1k119thi-wpengine.netdna-ssl.com/wp-content/uploads/2014/07/Tetons-BANG2-web-e1476286636877.jpg'></img>
			 <div className="centered">Snow Tracker
			 <br />
			<br />
			<br />
			<br />
			<br />
			 <p className="home-p-tag">Keep up with your favorite resorts</p>
			 <button position="center" class="ui button">Check Out Resorts </button>
			<br />
			<br />

			<br />
			</div>

		</div>

		)
	}
}



export default Home
