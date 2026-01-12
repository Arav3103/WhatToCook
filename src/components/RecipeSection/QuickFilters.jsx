import React from "react";
import Button from "../Button";
// import { quickFilters } from '../../constants';

const QuickFilters = ({ recipeList, handleSelectQuickFilter }) => {
  const quickFilters = [
    ...new Set(
      recipeList.flatMap((r) => [r.category, r.cuisine, r.recipeType])
    ),
    "All Recipes",
  ];

  return (
    <>
      <div>
        {quickFilters.map((filterKey, index) => (
          <span key={index}>
            <Button
              onClick={() => handleSelectQuickFilter(filterKey)}
              label={filterKey}
              type="button"
              name={filterKey}
            />
          </span>
        ))}
      </div>
    </>
  );
};

export default QuickFilters;
