import React, { Component } from 'react'
import Header from './Header'
import {
  Grid,
  Image,
  Segment,
	Container

} from 'semantic-ui-react'

const user_API = "http://localhost:3000/users"
class User extends Component{
	constructor(props){
		super(props)
		this.state={
			person: []
		}
		fetch(user_API)
		.then(res => res.json())
		.then(person => this.setState({ person }), () => console.log(this.state.person))
}

	render(){
		return(

		<div >
		<Header />
	  	<div className="image">
	    <img src="https://s22867.pcdn.co/wp-content/uploads/2013/11/Serria-QuitiQuit-5-1024x682.jpg" alt="user-pic"></img>
	  	</div>
	  <div className="content">
	    <a className="header"></a>
			<h3 as='h3' style={{ fontSize: '2em' }}>Sofia
			</h3>
	    <div className="meta">
	      <p style={{ fontSize: '1em' }}>Member since 2019</p>
	    </div>
	    <div className="description">
	      <p style={{ fontSize: '1.33em' }}>Sweden</p>
	    </div>
	  </div>
		  <div className="extra content">
		    <a>

					<p style={{ fontSize: '1.33em' }}>
					<i className="heart outline icon"></i>
		       NUMBER of favorite resorts
					</p>
		    </a>
		  </div>
			<Segment style={{ padding: '8em 0em' }} vertical>
			<img src="http://nikolemitchell.com/wp-content/uploads/2018/02/favorites-text.png"></img>
	      <Grid container stackable verticalAlign='middle'>
	        <Grid.Row>
	          <Grid.Column width={4} style={{ paddingBottom: '5em', paddingTop: '5em' }}>
	            <h3 as='h3' style={{ fontSize: '2em' }}>
	              RESORTS
	            </h3>
							<div>
		            <p style={{ fontSize: '1.33em' }}>
		              We can give your company superpowers to do things that they never thought possible.
		              Let us delight your customers and empower your needs... through pure data analytics.
		            </p>
							</div>
	          </Grid.Column>

	          <Grid.Column floated='right' width={4} >
						<h3 as='h3' style={{ fontSize: '2em' }}>
							FORECASTS
						</h3>
						<div>
							<p style={{ fontSize: '1.33em' }}>
								We can give your company superpowers to do things that they never thought possible.
								Let us delight your customers and empower your needs... through pure data analytics.
							</p>
						</div>
	          </Grid.Column>

						<Grid.Column floated='right' width={4} >
						<h3 as='h3' style={{ fontSize: '2em' }}>
							SNOW REPORTS
						</h3>
						<div>
							<p style={{ fontSize: '1.33em' }}>
								We can give your company superpowers to do things that they never thought possible.
								Let us delight your customers and empower your needs... through pure data analytics.
							</p>
						</div>
	          </Grid.Column>

	        </Grid.Row>
	      </Grid>
	    </Segment>
	</div>

		)
	}
}

export default User
