import PropTypes from "prop-types";
import Button from "../../common/Button";

const QuickFilters = ({ recipeList, handleSelectQuickFilter }) => {
  const quickFilters = [
    ...new Set(
      recipeList.flatMap((r) => [r.category, r.cuisine, r.recipeType]),
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

QuickFilters.propTypes = {
  handleSelectQuickFilter: PropTypes.func.isRequired,
  recipeList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default QuickFilters;
