import React from 'react';

const ResortSearchBar = (props) => {
  return (
    <div>
      <br/>
      <strong>Sort by:</strong>
      <label>
        <br/>
        <input type="radio" value="Alphabetically" checked={null} name="sortBy" onChange={props.sortAlphabetically}/>
        Alphabetically
          <br/>
      </label>
      <label>
        <input type="radio" value="Price" checked={null} name="sortBy" onChange={props.sortByPrice}/>
        Price
      </label>
      <br/>
    </div>
  );
}
export default ResortSearchBar;
