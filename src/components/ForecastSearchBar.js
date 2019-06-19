import React, { Component } from 'react'

class ForecastSearchBar extends Component {
  constructor(props){
    super(props)
    this.state={
    }
    this.query = React.createRef()
  }
  handleSubmit = (event) => {
     event.preventDefault();
     console.log(this.query.current.value);
     this.props.setSearch()
     this.props.handleSearch(this.query.current.value)
   };

   render() {
     return (
      <div>
        <br/>
        <strong>Sort by:</strong>
        <label>
          <br/>
          <input type="radio" value="Alphabetically" checked={null} name="sortBy" onChange={this.sortAlphabetically} />
          Alphabetically
            <br/>
        </label>

        <form onSubmit={this.handleSubmit}>
            <input type="text" name="q" ref={this.query} />
            <button>Find</button>
        </form>

        <br/>
      </div>
    );
  }
 }
export default ForecastSearchBar;
