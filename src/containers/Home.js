import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Header from './Header'
import {Image} from 'react-bootstrap';


class Home extends Component {

	render() {
		var background = {backgroundSize : 'cover'};
			 var textStyle = {
				 position: 'absolute',
				 top: '50%',
				 left: '50%'
			 };
		return(
			<div className="home-page-picture">
			<Header />

				<div style={{width: 'auto', color: 'white', fontSize: '5px' }}>
          <Image
            style={background} responsive
            src='https://181ge72mb8rnbx7z1k119thi-wpengine.netdna-ssl.com/wp-content/uploads/2014/07/Tetons-BANG2-web-e1476286636877.jpg'>
          </Image>
					<div>
          <h1 style={textStyle}>Snow Tracker</h1><br/>
          <h3 style={textStyle}>Track your snow</h3>
      	</div>
      </div>
			</div>
		)
	}
}



export default Home
