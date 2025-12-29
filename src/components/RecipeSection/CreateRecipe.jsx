import React, { useEffect, useRef, useState } from "react";
import Button from "../Button";
import AlertPopup from "../AlertPopup";
import { addRecipe } from "../../database/RecipeStore";

const CreateRecipe = ({ setRecipeList, recipeList }) => {
  const [showAlert, setShowAlert] = useState(false);
  const inputRef = useRef(null);
  const handleCreateRecipe = (e) => {
    e.preventDefault();
    const newRecipe = inputRef.current.value;
    const createdDateTime = new Date(Date.now());
    if (!newRecipe) return;
    setRecipeList((prevList) => {
      return prevList.includes(newRecipe)
        ? prevList
        : [
            ...prevList,
            {
              id: recipeList.length + 1,
              name: newRecipe,
              createdDate: createdDateTime.toLocaleDateString(),
              createdTime: createdDateTime.toLocaleTimeString(),
            },
          ];
    });
    setShowAlert(true);
    inputRef.current.value = "";
  };

  useEffect(() => {
    if (recipeList.length <= 0) return;

    addRecipe(recipeList);
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

  return (
    <>
      <h3>{showAlert && <AlertPopup />}</h3>
      <form onSubmit={handleCreateRecipe}>
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
    </>
  );
};

export default CreateRecipe;
