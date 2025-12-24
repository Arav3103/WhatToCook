import React from "react";

const DeleteRecipe = ({ recipeList, setRecipeList, item }) => {
  const handleDeleteRecipe = (item) => {
    const updatedList = recipeList.filter((recipe) => recipe !== item);
    setRecipeList(updatedList);
  };
  return (
    <>
      <span>
        <button onClick={() => handleDeleteRecipe(item)}>Delete</button>
      </span>
    </>
  );
};

export default DeleteRecipe;
