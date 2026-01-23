import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addRecipe } from "../../../store/recipeSlice";
import { recipe } from "../../../constants";
import Button from "../../common/Button";

const AddRecipe = ({ recipeList, onClose }) => {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const inputRef = useRef(null);

  const handleAddRecipe = (e) => {
    e.preventDefault();
    const createdDateTime = new Date(Date.now());
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    if (!data.recipeName) return;
    // setRecipeList((prevList) => {
    //   return prevList.includes(data.recipeName)
    //     ? prevList
    //     : [
    //         ...prevList,
    //         {
    //           id: recipeList.length + 1,
    //           recipeName: data.recipeName,
    //           createdDate: createdDateTime.toLocaleDateString(),
    //           createdTime: createdDateTime.toLocaleTimeString(),
    //           cuisine: data.cuisine,
    //           category: data.category,
    //           recipeType: data.recipeType,
    //         },
    //       ];
    // });
    const newRecipe = {
      id: recipeList.length + 1,
      recipeName: data.recipeName,
      createdDate: createdDateTime.toLocaleDateString(),
      createdTime: createdDateTime.toLocaleTimeString(),
      cuisine: data.cuisine,
      category: data.category,
      recipeType: data.recipeType,
    };
    dispatch(addRecipe(newRecipe));

    setShowAlert(true);
    inputRef.current.value = "";
  };

  useEffect(() => {
    if (recipeList.length <= 0) return;

    addRecipe(recipeList);
    // initQuickFilters(recipeList);
  }, [recipeList]);

  useEffect(() => {
    if (!showAlert) return;
    const interval = setTimeout(() => {
      setShowAlert(false);
    }, 1500);

    return () => {
      clearTimeout(interval);
    };
  });

  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) return;

  return createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <h3>
          {showAlert && (
            <Modal
              isOpen={showAlert}
              onClose={() => setShowAlert(false)}
              time={recipe.recipeSection.displayTime}
            >
              <AlertPopup textContent={recipe.recipeSection.addRecipeMessage} />
            </Modal>
          )}
        </h3>
        <form onSubmit={handleAddRecipe}>
          <h2>Add Recipe</h2>
          <fieldset>
            <label htmlFor="recipeName">Recipe Name</label>
            <input
              ref={inputRef}
              type="text"
              name="recipeName"
              id="recipeName"
              placeholder="Type the recipe name here"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="cuisine">Cuisine Type</label>
            <input
              type="radio"
              name="cuisine"
              id="radio-south-indian"
              value={"South Indian"}
            />
            South Indian
            <input
              type="radio"
              name="cuisine"
              id="radio-north-indian"
              value={"North Indian"}
            />
            North Indian
          </fieldset>
          <fieldset>
            <label htmlFor="category">Category</label>
            <input
              type="radio"
              name="category"
              id="radio-breakfast"
              value={"Breakfast"}
            />
            Breakfast
            <input
              type="radio"
              name="category"
              id="radio-lunch"
              value={"Lunch"}
            />
            Lunch
            <input
              type="radio"
              name="category"
              id="radio-dinner"
              value={"Dinner"}
            />
            Dinner
          </fieldset>
          <fieldset>
            <label htmlFor="recipeType">Recipe Type</label>
            <select name="recipeType" id="recipeType" defaultValue="">
              <option value="" disabled>
                Select Type
              </option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
          </fieldset>
          <Button
            type={"submit"}
            label={"Add Recipe"}
            disabled={false}
            name="addRecipeBtn"
          />
        </form>
        <Button
          name="closeAddRecipeModalBtn"
          label={"Close"}
          onClick={onClose}
        />
      </div>
    </div>,
    portalRoot,
  );
};

AddRecipe.propTypes = {
  // setRecipeList: PropTypes.func.isRequired,
  recipeList: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddRecipe;
