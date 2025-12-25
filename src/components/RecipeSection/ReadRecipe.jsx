import { createPortal } from "react-dom";
import "./styles.css";

const ReadRecipe = ({ recipeList, onClose, item }) => {
  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) return;
  return createPortal(
    <div className="modal-overlay">
      <div className="modal-overlay">
        <ul>
          {recipeList
            .filter((recipe) => recipe.id === item.id)
            .map((recipe) => {
              console.log(recipe);
              return (
                <li className="color-white" key={recipe.id}>
                  {recipe.name}
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
