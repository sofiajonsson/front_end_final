import React, { Component } from 'react';
import Resort from '../components/Resort'


class FaveResort extends Component {
	constructor(props){
	super(props)
	this.state ={}
}
  render() {
    return (
      <div>
        <h2>My Fave Resorts</h2>
          {
            this.props.resorts.map(resort => {
              return <Resort
                key={resort.id}
                resort={resort}
                handleClick={this.props.removeResort}
              />
            })
          }
      </div>
    );
  }

}

export default FaveResort;
