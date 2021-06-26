import React, { useState, useContext, createContext } from 'react';

const searchContext = createContext();

export function ProvideSearch({ children }) {
  const search = useProvideSearch();
  return (
    <searchContext.Provider value={search}>{children}</searchContext.Provider>
  );
}

export const useSearch = () => {
  return useContext(searchContext);
};

function useProvideSearch() {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('Latest');
  const [showMyPosts, setShowMyPosts] = useState(false);
  const [levels, setLevels] = useState(['easy', 'medium', 'hard']);
  const [isSolved, setIsSolved] = useState(['solved', 'unsolved']);
  const [filterTags, setFilterTags] = useState([
    { value: 'all', label: 'all' }
  ]);

  const onSortByChange = (val) => {
    console.log('-----> val : ', val);
    setSortBy(val);
  };

  const onShowMyPosts = (val) => {
    setShowMyPosts(val);
  };

  const onFilterLevels = (newLevels) => {
    setLevels(newLevels);
  };

  const onFilterIsSolved = (newValues) => {
    setIsSolved(newValues);
  };

  const onChangeFilterTags = (newTags) => {
    if (newTags.length == 0) {
      setFilterTags([{ value: 'all', label: 'all' }]);
    } else {
      setFilterTags(newTags);
    }
  };

  const onSearch = (e) => {
    e.preventDefault();

    const searchValue = e.target.value;
    // const valueWithoutSlash = searchValue.replace('/', '');

    setSearch(searchValue);
    return searchValue;
  };

  return {
    search,
    sortBy,
    showMyPosts,
    levels,
    isSolved,
    filterTags,
    onSortByChange, 
    onShowMyPosts,
    onFilterLevels,
    onFilterIsSolved,
    onChangeFilterTags,
    onSearch //TODO:
  };
}
