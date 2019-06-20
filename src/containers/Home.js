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
			<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
			<Header />
				<h1>Powdah Hounds</h1>
				<div style={{width: 'auto', color: 'white', fontSize: '5px' }}>
                <Image
                  style={background} responsive
                  src='https://181ge72mb8rnbx7z1k119thi-wpengine.netdna-ssl.com/wp-content/uploads/2014/07/Tetons-BANG2-web-e1476286636877.jpg'>
                </Image>
                <h1 style={textStyle}>Snow Tracker</h1>
            </div>

				<h3> Cant wait to Ski?</h3>
				<h4> Please Choose a Page to Browse North American Resorts</h4>

			
			</div>
		)
	}
}



export default Home
