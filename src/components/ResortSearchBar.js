import React, { Component } from 'react'

class ResortSearchBar extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  handleSubmit = (event) => {
     event.preventDefault();
     const output = document.createElement('div');
     const data = [...event.target.elements].reduce((data, element) => {
       if (element.title && element.value) {
         data[element.title] = element.value;
       }
       return data;
     }, {});
     output.textContent = JSON.stringify(data);
     document.body.appendChild(output);
   };
   render() {
     return (
      <div>
        <br/>
        <strong>Sort by:</strong>
        <label>
          <br/>
          <input type="radio" value="Alphabetically" checked={null} name="sortBy" onChange={this.sortAlphabetically}/>
          Alphabetically
            <br/>
        </label>
          <form action="/search" onSubmit={this.handleSubmit}>
            <button>Find</button>
          </form>
        <br/>
      </div>
    );
  }
}
export default ResortSearchBar;
