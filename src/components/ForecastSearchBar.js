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
         <div class="ui text menu">
           <div class="header item">Sort</div>
             <a class="active item" onChange={this.sortAlphabetically}>
                Alphabetically
            </a>
            </div>
          <form onSubmit={this.handleSubmit}>
              <input type="text" name="q" ref={this.query} placeholder="Search..."/>
              <button>Find</button>
            </form>
          <br/>
      </div>
    );
  }
 }
export default ForecastSearchBar;
