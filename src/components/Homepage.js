
import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return <div>
      <h1>Welcome to Seattle Cool Theater</h1>
      <p>Check out all of our wide selection of cool movies.</p>
    </div>
  }
}
export default Homepage;
