import React from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteRecipe } from "../../../store/recipeSlice";
import Button from "../../common/Button";

const DeleteRecipe = ({ selectedRecipe, onClose: closeModal }) => {
  const dispatch = useDispatch();
  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) return;
  const handleDeleteRecipe = () => {
    dispatch(deleteRecipe(selectedRecipe));
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
    portalRoot,
  );
};

DeleteRecipe.propTypes = {
  // setRecipeList: PropTypes.func.isRequired,
  recipeList: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
  selectedRecipe: PropTypes.string.isRequired,
};

export default DeleteRecipe;
