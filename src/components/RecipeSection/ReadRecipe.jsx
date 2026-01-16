import "./styles.css";
import Modal from "../Modal";

const ReadRecipe = ({ recipeList, onClose, selectedRecipe, isOpen }) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ul>
        {recipeList
          .filter((recipe) => recipe.recipeID === selectedRecipe)
          .map((recipe) => {
            return (
              <li key={recipe.recipeID}>
                <p>Name of the Recipe : {recipe.recipeName}</p>
                <p>Category : {recipe.category}</p>
                <p>Cuisine : {recipe.cuisine}</p>
                <p> Recipe Type : {recipe.recipeType}</p>
              </li>
            );
          })}
      </ul>
    </Modal>
  );
};

export default ReadRecipe;
