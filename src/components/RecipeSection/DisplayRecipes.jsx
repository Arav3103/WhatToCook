import PropTypes from "prop-types";
import DeleteRecipe from "./DeleteRecipe";
import ReadRecipe from "./ReadRecipe";
import { useState } from "react";

const DisplayRecipes = ({ recipeList, setRecipeList }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ul>
        {recipeList.map((item, index) => (
          <li key={index}>
            {item.name}{" "}
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
