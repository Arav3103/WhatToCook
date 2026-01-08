import React from "react";
// import { quickFilters } from '../../constants';

const QuickFilters = ({ recipeList, handleSelectQuickFilter }) => {
  const quickFilters = [
    ...new Set(
      recipeList.flatMap((r) => [r.category, r.cuisine, r.recipeType])
    ),
  ];

  return (
    <>
      <div>
        {quickFilters.map((filterKey, index) => (
          <span key={index}>
            <button
              type="button"
              name={filterKey}
              onClick={() => handleSelectQuickFilter(filterKey)}
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
