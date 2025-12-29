import PropTypes from "prop-types";
import DeleteRecipe from "./DeleteRecipe";
import ReadRecipe from "./ReadRecipe";
import { useState } from "react";

const DisplayRecipes = ({ recipeList, setRecipeList }) => {
  const [showModal, setShowModal] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const filteredRecipeList = recipeList.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchItem)
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
      </form>
      <ul>
        {filteredRecipeList.map((item, index) => (
          <li key={index}>
            {`Recipe Name : ${item.name} `}
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
