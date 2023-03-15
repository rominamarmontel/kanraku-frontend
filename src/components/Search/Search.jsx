import React, { useState } from 'react';
import './Search.css'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')


  return (
    <>
    
      <div className='Search'>

      <input id="search-keyword" type='text' value={searchQuery} onChange={handleSearchChange} placeholder='Search by..' /> 

      </div>
    </>
  );
}

export default Search;
