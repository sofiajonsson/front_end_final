import React, { Component } from 'react'

class SnowReportSearchBar extends Component {
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
         <div class="ui text menu">
            </div>
          <form onSubmit={this.handleSubmit} id="search-box">
              <input type="text" name="q" ref={this.query} placeholder="Search Snow Reports..."/>
              <button>Find</button>
            </form>
          <br/>
      </div>
    );
  }
}
export default SnowReportSearchBar;
