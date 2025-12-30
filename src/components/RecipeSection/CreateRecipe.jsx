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
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    if (!newRecipe) return;
    setRecipeList((prevList) => {
      return prevList.includes(newRecipe)
        ? prevList
        : [
            ...prevList,
            {
              id: recipeList.length + 1,
              recipeName: newRecipe,
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
        <h2>Add Recipe</h2>
        <fieldset>
          <label htmlFor="recipe-name">Recipe Name</label>
          <input
            ref={inputRef}
            type="text"
            name="recipe-name"
            id="recipe-name"
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
          <label htmlFor="recipe-type">Recipe Type</label>
          <select name="recipe-type" id="recipe-type" defaultValue="">
            <option value="" disabled>
              Select Type
            </option>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>
        </fieldset>
        <Button type={"submit"} label={"Add Recipe"} disabled={false} />
      </form>
    </>
  );
};

export default CreateRecipe;
