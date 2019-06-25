import React, { Component } from "react";
import { Link } from 'react-router-dom'


var divStyle = {
	width: '100%',
 	height: '1000px',
 backgroundImage: `url('https://181ge72mb8rnbx7z1k119thi-wpengine.netdna-ssl.com/wp-content/uploads/2014/07/Tetons-BANG2-web-e1476286636877.jpg')`,
 backgroundPosition: 'center',
 backgroundRepeat: 'no-repeat',
 backgroundSize: 'cover',
	};

class Home extends Component {

	render() {

		return(
			<div id="home-image" style={ divStyle } >
			<br />
			<br />
			<br />
			<h1 className='centered'>Pow Tracker</h1>
			<br />
			<br />
			 <p className="home-p-tag">Keep up with your favorite resorts</p>
			 <button position="center" class="ui inverted button" id="home-pg-button"><Link to="/resorts">Check Out Resorts </Link></button>
			<br />
			<br />

			<br />
			</div>



		)
	}
}



export default Home
