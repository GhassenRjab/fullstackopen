import React from 'react'

const Filter = ({ search, updateSearch }) => {
  const onSearchChange = (event) => {
    updateSearch(event.target.value);
  };

  return (
    <div>
      filter shown with <input value={search} onChange={onSearchChange} />
    </div>
  )
}

export default Filter;
