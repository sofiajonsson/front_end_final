import React, { Component } from 'react'
import Header from './Header'
import Resort from '../components/Resort'
import Forecast from '../components/Forecast'
import SnowReport from '../components/SnowReport'


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
			<div class="ui segments">
			  <div class="ui horizontal segments">
			    <div class="ui segment">
			      <p>Top</p>
			    </div>


			    <div class="ui segment">
			      <p>Bottom</p>
			    </div>
			  </div>

			  <div class="ui segment">
			    <p>Bottom</p>
			  </div>
			</div>

  	  	<div class="ui segments">
					<div class="ui segment">
  	     		<img className="prof-pic" src="https://s22867.pcdn.co/wp-content/uploads/2013/11/Serria-QuitiQuit-5-1024x682.jpg" alt="user-pic" ></img>
  	  		</div>

      	 <div class="ui segment">
      	    <a className="header"></a>
      			   <h3 as='h3' style={{ fontSize: '2em' }}>Sofia</h3>
		      	    <div className="meta">
		      	      <p style={{ fontSize: '1em' }}>Member since 2019</p>
		      	    </div>
		      	    <div className="description">
		      	      <p style={{ fontSize: '1.33em' }}>Sweden</p>
		      	   	</div>
								<p style={{ fontSize: '1.33em' }}>
								<a><i className="heart outline icon"></i></a>
			          <br />
					       {this.props.favoriteResorts.length} Resorts
			           <br />
					       {this.props.favoriteForecasts.length} Forecasts
			           <br />
					       {this.props.favoriteSnowReports.length} Snow Reports
								</p>
	       </div>
	      </div>




			<img src="http://nikolemitchell.com/wp-content/uploads/2018/02/favorites-text.png" alt="favorites" ></img>

      <div className="ui horizontal segments">
        <div className="ui segment">
              <div className="topbar">
                <h3 as='h3' style={{ fontSize: '2em' }}>
  	              RESORTS
  	            </h3>
              </div>
		                {this.props.favoriteResorts.map(resort => {
                    return <Resort
                            key={resort.id}
                            resort={resort}
                            resortHandleClick={this.props.resortHandleClick} />
                })}
							</div>
        <div className="ui segment">
          <div className="topbar">
						<h3 as='h3' style={{ fontSize: '2em' }}>
							FORECASTS
						</h3>
          </div>

                  {this.props.favoriteSnowReports.map(favoriteSnowReport => {
                    return <SnowReport
                           key={favoriteSnowReport.id}
                           snowReport={favoriteSnowReport}
                           snowReportHandleClick={this.props.snowReportHandleClick} />
               })}
						</div>
        <div className="ui segment">
          <div className="topbar">
						<h3 as='h3' style={{ fontSize: '2em' }}>
							SNOW REPORTS
						</h3>
            </div>

                {this.props.favoriteForecasts.map(favoriteForecast => {
                  return <Forecast
                         key={favoriteForecast.id}
                         forecast={favoriteForecast}
                         forecastHandleClick={this.props.forecastHandleClick} />
             })}
						       </div>
						</div>


	</div>


		)
	}
}

export default User
