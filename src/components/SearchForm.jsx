import React from 'react';

export const SearchForm = () => {
  return (
    <form id='search-form'>
      <div>
        <label htmlFor='search-input'>Search Location:</label>
        <input
          type='text'
          id='search-input'
          name='search'
          value=''
          onChange={() => {}}
          placeholder='Search Location'
        />
      </div>
    </form>
  );
};
