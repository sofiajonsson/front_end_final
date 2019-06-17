import React from 'react';

const SnowReportSearchBar = (props) => {
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

      <br/>
    </div>
  );
}
export default SnowReportSearchBar;
