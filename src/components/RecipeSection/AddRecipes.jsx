import React, { useEffect, useRef, useState } from "react";
import Button from "../Button";
import AlertPopup from "../AlertPopup";
import { addRecipe } from "../../database/RecipeStore";

const AddRecipes = ({ setRecipeList }) => {
  const [showPopup, setShowPopup] = useState(false);
  const inputRef = useRef(null);
  const handleAddRecipe = (e) => {
    e.preventDefault();
    const newIngredient = inputRef.current.value;
    if (!newIngredient) return;
    addRecipe([newIngredient]);
    setRecipeList((prevList) => {
      const updatedIngredientList = prevList.includes(newIngredient)
        ? prevList
        : [...prevList, newIngredient];
      if (updatedIngredientList.length === prevList.length + 1)
        setShowPopup(true);
      console.log(updatedIngredientList);
      return updatedIngredientList;
    });
  };

  useEffect(() => {
    if (showPopup) {
      const interval = setTimeout(() => {
        setShowPopup(false);
      }, 1500);

      return () => {
        clearTimeout(interval);
      };
    }
  }, [showPopup]);

  return (
    <>
      <form onSubmit={handleAddRecipe}>
        <h2>Add Recipes</h2>
        <input
          ref={inputRef}
          type="text"
          name="recipe-input"
          id="recipe-input"
          placeholder="Type the recipe name here"
        />
        <Button type={"submit"} label={"Add Recipe"} disabled={false} />
      </form>
      {showPopup && <AlertPopup />}
    </>
  );
};

export default AddRecipes;
