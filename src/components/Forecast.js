import React, { Component } from "react";

class Forecast extends Component {
	constructor(props){
		super(props)
			this.state={}
		}
	render(){
		return(
		<div>
			<div >
					<div className="card-body" onClick={()=> this.props.forecastHandleClick(this.props.forecast)}>
					<h3 className="card-title">{this.props.forecast.title}</h3>
					<table className="forecast-table">
						<tbody>
						<tr>
							<th>
							</th>
							<th>
							Today:
							</th>
							<th>
							Tomorrow:
							</th>
							<th>
							Day 3:
							</th>
							<th>
							Day 4:
							</th>
							<th>
							Day 5:
							</th>
							<th>
							Day 6:
							</th>
							<th>
							Day 7:
							</th>
						</tr>
						<tr>
						<th>
						</th>
							<th>
							<img src={`https://www.skiresort.info/${this.props.forecast.today_icon}`} alt="ski-resort-img"/>
							</th>
							<th>
							<img src={`https://www.skiresort.info/${this.props.forecast.tomorrow_icon}`} alt="ski-resort-img"/>
							</th>
							<th>
							<img src={`https://www.skiresort.info/${this.props.forecast.day3_icon}`} alt="ski-resort-img"/>
							</th>
							<th>
							<img src={`https://www.skiresort.info/${this.props.forecast.day4_icon}`} alt="ski-resort-img"/>
							</th>
							<th>
							<img src={`https://www.skiresort.info/${this.props.forecast.day5_icon}`} alt="ski-resort-img"/>
							</th>
							<th>
							<img src={`https://www.skiresort.info/${this.props.forecast.day6_icon}`} alt="ski-resort-img"/>
							</th>
							<th>
							<img src={`https://www.skiresort.info/${this.props.forecast.day7_icon}`} alt="ski-resort-img"/>
							</th>
						</tr>
						<tr>
							<td>
							At Base:
							</td>
							<td>
							{this.props.forecast.today_at_base}
							</td>
							<td>
							 {this.props.forecast.tomorrow_at_base}
							</td>
							<td>
							{this.props.forecast.day3_at_base}
							</td>
							<td>
						 {this.props.forecast.day4_at_base}
							</td>
							<td>
							{this.props.forecast.day5_at_base}
							</td>
							<td>
							 {this.props.forecast.day6_at_base}
							</td>
							<td>
							 {this.props.forecast.day7_at_base}
							</td>
						</tr>


						<tr>
							<td>
							On Mountain:
							</td>
							<td>
							 {this.props.forecast.today_on_mountain}
							</td>
							<td>
							{this.props.forecast.tomorrow_on_mountain}
							</td>
							<td>
							{this.props.forecast.day3_at_base}
							</td>
							<td>
							{this.props.forecast.day4_on_mountain}
							</td>
							<td>
							 {this.props.forecast.day5_on_mountain}
							</td>
							<td>
							{this.props.forecast.day6_on_mountain}
							</td>
							<td>
							{this.props.forecast.day7_on_mountain}
							</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
			</div>

		)
	}
}


export default Forecast
