import classNames from 'classnames';
import { useCallback, useContext, useEffect, useState } from 'react';
import { AppContext } from '../contexts/AppContext';

export const SearchInput = ({ searchResultList = [], handleSearch }) => {
  const appContext = useContext(AppContext);
  const { searchTerm } = appContext.state;
  const { setSearchTerm } = appContext.actions;

  const [searchText, setSearchText] = useState('');
  const [timeoutId, setTimeoutId] = useState(undefined);

  const searchDelayMs = 300;

  // filter search result list by search term
  const displaySearchResultList = () => {
    return searchTerm !== ''
      ? searchResultList.filter((result) => {
          return result.toLowerCase().includes(searchTerm.toLowerCase());
        })
      : [];
  };

  const searchResultCount = displaySearchResultList().length;
  const isSearchBoxEmpty = [0, 1].includes(searchResultCount);
  console.log({ searchResultCount, isSearchBoxEmpty });

  const handleChange = (e) => {
    setSearchText(e.target.value);
    startDelayedSearchResultsUpdate(e);
  };

  const startDelayedSearchResultsUpdate = (e) => {
    const newTimeoutId = setTimeout(() => {
      setSearchTerm(e.target.value);
    }, searchDelayMs);
    setTimeoutId(newTimeoutId);
  };
  const cancelDelayedSearchResultsUpdate = useCallback(() => {
    clearTimeout(timeoutId);
  }, [timeoutId]);

  /* Maps the listToDisplay to JSX. */
  const renderSearchResultList = () => {
    const resultList = displaySearchResultList();
    if (isSearchBoxEmpty) {
      return null;
    }
    return resultList
      .map((searchResult, i) => (
        <p
          key={i}
          className='searchResult'
          onClick={() => {
            cancelDelayedSearchResultsUpdate();
            setSearchText(searchResult);
            setSearchTerm(searchResult);
          }}
        >
          {searchResult}
        </p>
      ))
      .slice(0, 10);
  };

  /* When the search value changes, cancel the last delayed handleChange call. */
  useEffect(() => {
    return cancelDelayedSearchResultsUpdate;
  }, [cancelDelayedSearchResultsUpdate]);

  return (
    <div className='search-input-container'>
      <input
        type='text'
        value={searchText}
        onChange={handleChange}
        placholder='Search Location'
      />
      <button onClick={handleSearch}>Search</button>
      <div
        className={classNames({
          'search-results-container': true,
          hidden: isSearchBoxEmpty,
        })}
      >
        {renderSearchResultList()}
      </div>
    </div>
  );
};
