import React from "react";
import PropTypes from "prop-types";

const DisplayRecipes = ({ recipeList, setRecipeList }) => {
  const handleDeleteRecipe = (item) => {
    const updatedList = recipeList.filter((recipe) => recipe !== item);
    setRecipeList(updatedList);
  };
  return (
    <ul>
      {recipeList.map((item, index) => (
        <li key={index}>
          {item}
          <span>
            <button onClick={() => handleDeleteRecipe(item)}>Delete</button>
          </span>
        </li>
      ))}
    </ul>
  );
};

DisplayRecipes.propTypes = {
  srcList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

DisplayRecipes.defaultProps = {
  srcList: [],
};

export default DisplayRecipes;
