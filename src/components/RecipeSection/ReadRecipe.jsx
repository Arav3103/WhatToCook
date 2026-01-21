import "./styles.css";
import Modal from "../Modal";
import PropTypes from "prop-types";

const ReadRecipe = ({ recipe, onClose, isOpen }) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ul>
        <li key={recipe.recipeID}>
          <p>Name of the Recipe : {recipe.recipeName}</p>
          <p>Category : {recipe.category}</p>
          <p>Cuisine : {recipe.cuisine}</p>
          <p> Recipe Type : {recipe.recipeType}</p>
        </li>
      </ul>
    </Modal>
  );
};

ReadRecipe.propTypes = {
  recipeList: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
  selectedRecipe: PropTypes.string.isRequired,
  isOpen: PropTypes.func.isRequired,
};

export default ReadRecipe;
