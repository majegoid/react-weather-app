import React, { useState } from 'react';

export const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');
  // const [timeoutId, setTimeoutId] = useState(second);

  // console.log('searchValue', searchValue);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <form id='search-form'>
      <div>
        <label htmlFor='search-input'>Search Location:</label>
        <input
          type='text'
          id='search-input'
          name='search'
          value={searchValue}
          onChange={handleChange}
          placeholder='Search Location'
        />
      </div>
    </form>
  );
};
