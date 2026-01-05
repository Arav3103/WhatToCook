import React from "react";
// import { quickFilters } from '../../constants';

const QuickFilters = ({ recipeList }) => {
  const quickFilters = [
    ...new Set(
      recipeList.flatMap((r) => [r.category, r.cuisine, r.recipeType])
    ),
  ];
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
};

export default QuickFilters;
