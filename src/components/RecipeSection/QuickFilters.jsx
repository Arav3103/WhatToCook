import React from 'react'
import { quickFilters } from '../../constants';

const QuickFilters = () => {
    const handleQuickFilter = (e) => {
      console.log(e.currentTarget.name);
    };
  return (
    <>
      <h2>Quick Filters</h2>
      <div>
        {quickFilters.map((filterKey, index) => (
          <span key={index}>
            <button
              type="button"
              name={filterKey}
              onClick={(e) => handleQuickFilter(e)}
            >
              {filterKey}
            </button>
          </span>
        ))}
      </div>
    </>
  );
}

export default QuickFilters