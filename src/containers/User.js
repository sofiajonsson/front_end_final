import React, { Component } from 'react'
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
  	  	<div className="ui segments" id="user-top">
					<div className="ui horizontal segments" id="user-mid">
						<div className="ui segment" id="user-bottom">
  	     			<img className="prof-pic" src="https://s22867.pcdn.co/wp-content/uploads/2013/11/Serria-QuitiQuit-5-1024x682.jpg" alt="user-pic" ></img>
  	  			</div>

	      	 <div className="ui segment" id="user-bottom">
	      	    <a className="header"></a>
	      			   <h3 as='h3' style={{ fontSize: '4em' }}>Sofia</h3>
			      	    <div className="meta">
									<br />
			      	      <p style={{ fontSize: '2em' }}>Member since 2019</p>
			      	    </div>
									<br />
			      	    <div className="description">
			      	      <p style={{ fontSize: '2.3em' }}>Home Country:
											<a> Sweden</a>
										</p>
			      	   	</div>
										<br />
									<p style={{ fontSize: '1.33em' }}>
										<a>
											<i className="heart outline icon">Favorites</i>
										</a>
				          <br />
						       {this.props.favoriteResorts.length} Resorts
				           <br />
						       {this.props.favoriteForecasts.length} Forecasts
				           <br />
						       {this.props.favoriteSnowReports.length} Snow Reports
									</p>
			       </div>
		      </div>

					<div className="ui segment" id="user-bottom" position="center">
						<img src="http://nikolemitchell.com/wp-content/uploads/2018/02/favorites-text.png" alt="favorites" ></img>
					 </div>
				 </div>

      <div className="ui horizontal segments" id="user-mid">>
        <div className="ui segment" id="user-bottom">
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
        <div className="ui segment" id="user-bottom">
          <div className="topbar">
						<h3 as='h3' style={{ fontSize: '2em' }}>
							SNOW REPORTS
						</h3>
          </div>

                  {this.props.favoriteSnowReports.map(favoriteSnowReport => {
                    return <SnowReport
                           key={favoriteSnowReport.id}
                           snowReport={favoriteSnowReport}
                           snowReportHandleClick={this.props.snowReportHandleClick} />
               })}
						</div>
        <div className="ui segment" id="user-bottom">
          <div className="topbar">
						<h3 as='h3' style={{ fontSize: '2em' }}>
							FORECASTS
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
