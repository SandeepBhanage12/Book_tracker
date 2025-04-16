import React from 'react';

const FilterSortBar = ({ filter, setFilter, sort, setSort }) => {
  return (
    <div className="filter-bar">
      <div>
        <label>Status:</label>
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Read">Read</option>
          <option value="Unread">Unread</option>
        </select>
      </div>
      <div>
        <label>Sort By:</label>
        <select value={sort} onChange={e => setSort(e.target.value)}>
          <option value="Title">Title</option>
          <option value="Status">Status</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSortBar;
