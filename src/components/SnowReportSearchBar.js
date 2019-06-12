import React from 'react';

const SnowReportSearchBar = (props) => {
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
    </div>
  );
}
export default SnowReportSearchBar;
