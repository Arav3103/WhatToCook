import { createPortal } from "react-dom";
import "./styles.css";

const ReadRecipe = ({ recipeList, onClose, selectedRecipe }) => {
  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) return;
  return createPortal(
    <div className="modal-overlay">
      <div className="modal">
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
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    portalRoot
  );
};

export default ReadRecipe;
