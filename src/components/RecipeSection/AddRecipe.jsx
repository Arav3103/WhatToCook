import React, { useEffect, useRef, useState } from "react";
import Button from "../Button";
import AlertPopup from "../AlertPopup";
import { addRecipe } from "../../database/RecipeStore";

const AddRecipe = ({ setRecipeList, recipeList }) => {
  const [showPopup, setShowPopup] = useState(false);
  const inputRef = useRef(null);
  const handleAddRecipe = (e) => {
    e.preventDefault();
    const newRecipe = inputRef.current.value;
    if (!newRecipe) return;
    setRecipeList((prevList) => {
      return prevList.includes(newRecipe) ? prevList : [...prevList, newRecipe];
    });
    setShowPopup(true);
  };

  useEffect(() => {
    if (recipeList.length <= 0) return;
    addRecipe(recipeList);
  }, [recipeList]);

  useEffect(() => {
    if (!showPopup) return;
    const interval = setTimeout(() => {
      setShowPopup(false);
    }, 1500);

    return () => {
      clearTimeout(interval);
    };
  });

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

export default AddRecipe;
