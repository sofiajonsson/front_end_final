import React, { Component } from "react";

class User extends Component{
	constructor(props){
		super(props)
			this.state={}
	}

	render(){
		return(

		<div className="ui card">
	  	<div className="image">
	    <img src="https://s22867.pcdn.co/wp-content/uploads/2013/11/Serria-QuitiQuit-5-1024x682.jpg" alt="user-pic"></img>
	  	</div>
	  <div className="content">
	    <a className="header">Insert Name </a>
	    <div className="meta">
	      <span className="date">Joined in 2019</span>
	    </div>
	    <div className="description">
	      Insert Home Country
	    </div>
	  </div>
		  <div className="extra content">
		    <a>
		      <i className="heart outline icon"></i>
		      count number of favorite resorts
		    </a>
		  </div>
	</div>

		)
	}
}

export default User
