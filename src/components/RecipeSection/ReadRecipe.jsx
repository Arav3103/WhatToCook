import { createPortal } from "react-dom";
import "./styles.css";

const ReadRecipe = ({ recipeList, handleClose, item }) => {
  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) return;
  return createPortal(
    <div className="modal-overlay">
      <div className="modal-overlay">
        <ul>
          {recipeList.map((recipe) => recipe === item && <li>{recipe}</li>)}
        </ul>
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>,
    portalRoot
  );
};

export default ReadRecipe;
