import React from 'react';

const ForecastSearchBar = (props) => {
  return (
    <div>
      <br/>
      <strong>Sort:</strong>
      <label>
        <br/>
        <input type="radio" value="Alphabetically" checked={null} name="sortBy" onChange={props.sortAlphabetically}/>
        Alphabetically
          <br/>
      </label>
      <br/>
    </div>
  );
}
export default ForecastSearchBar;
