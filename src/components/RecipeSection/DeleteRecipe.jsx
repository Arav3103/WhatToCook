import React from "react";
import { createPortal } from "react-dom";
import Button from "../Button";
import PropTypes from "prop-types";

const DeleteRecipe = ({
  recipeList,
  selectedRecipe,
  onClose: closeModal,
}) => {
  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) return;
  const handleDeleteRecipe = () => {
    const updatedList = recipeList.filter(
      (recipe) => recipe.recipeID !== selectedRecipe
    );
    // setRecipeList(updatedList);
    console.log(updatedList);
    
    closeModal();
  };
  return createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <p>Do you want to delete the recipe?</p>
        <Button onClick={handleDeleteRecipe} label={"Delete"}>
          Delete
        </Button>
        <Button onClick={closeModal} label={"Close"}></Button>
      </div>
    </div>,
    portalRoot
  );
};

DeleteRecipe.propTypes = {
  // setRecipeList: PropTypes.func.isRequired,
  recipeList: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
  selectedRecipe: PropTypes.string.isRequired,
};

export default DeleteRecipe;
