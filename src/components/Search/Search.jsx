import React from 'react';
import './Search.css'

function Search({ handleInputChange, searchKeyword }) {
  return (
    <>
      <div>
        <div className='Search-box'>
          <label htmlFor="search-keyword">Search</label>
          <input
            id="search-keyword"
            value={searchKeyword}
            type="text"
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
}

export default Search;
