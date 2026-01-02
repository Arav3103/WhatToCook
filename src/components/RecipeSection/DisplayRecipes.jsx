import PropTypes from "prop-types";
import DeleteRecipe from "./DeleteRecipe";
import ReadRecipe from "./ReadRecipe";
import { useState } from "react";

const DisplayRecipes = ({ recipeList, setRecipeList }) => {
  const [showModal, setShowModal] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const filteredRecipeList = recipeList.filter((recipe) =>
    recipe.recipeName.toLowerCase().includes(searchItem.toLowerCase())
  );
  return (
    <>
      <form>
        <input
          type="text"
          value={searchItem}
          name="recipe-search"
          id="recipe-search"
          placeholder="Find your recipe here"
          onChange={(e) => setSearchItem(e.target.value)}
        />
        {searchItem.length > 0 && (
          <button type="button" title="clearSearchInput" onClick={() => setSearchItem("")}>X</button>
        )}
      </form>
      <ul>
        {filteredRecipeList.map((item, index) => (
          <li key={index}>
            {`Recipe Name : ${item.recipeName} | Cuisine : ${item.cuisine} | Recipe Type : ${item.recipeType} | Category : ${item.category}`}
            <DeleteRecipe
              recipeList={recipeList}
              setRecipeList={setRecipeList}
              item={item}
            />
            {showModal ? (
              <ReadRecipe
                recipeList={recipeList}
                item={item}
                onClose={() => setShowModal(false)}
              />
            ) : (
              <button onClick={() => setShowModal(true)}>View</button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

DisplayRecipes.propTypes = {
  srcList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

DisplayRecipes.defaultProps = {
  srcList: [],
};

export default DisplayRecipes;
