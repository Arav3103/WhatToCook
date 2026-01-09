import React from "react";
import { createPortal } from "react-dom";

const DeleteRecipe = ({
  recipeList,
  setRecipeList,
  selectedRecipe,
  onClose: closeModal,
}) => {
  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) return;
  const handleDeleteRecipe = () => {
    const updatedList = recipeList.filter(
      (recipe) => recipe.recipeID !== selectedRecipe
    );
    setRecipeList(updatedList);
    closeModal();
  };
  return createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <p>Do you want to delete the recipe?</p>
        <button onClick={handleDeleteRecipe}>Delete</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </div>,
    portalRoot
  );
};

export default DeleteRecipe;
