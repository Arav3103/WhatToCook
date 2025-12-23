import React, { useState } from "react";
import AddRecipe from "./AddRecipe";
import DisplayRecipes from "./DisplayRecipes";

const RecipeSection = () => {
  const [recipeList, setRecipeList] = useState([]);
  return (
    <main>
      <section id="recipes-home">
        <aside id="add-recipes">
          <AddRecipe setRecipeList={setRecipeList} recipeList={recipeList} />
        </aside>
        <section id="display-recipes">
          <DisplayRecipes
            setRecipeList={setRecipeList}
            recipeList={recipeList}
          />
        </section>
      </section>
    </main>
  );
};

export default RecipeSection;
