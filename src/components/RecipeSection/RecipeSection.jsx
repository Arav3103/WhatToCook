import React, { useState } from "react";
import AddRecipes from "./AddRecipes";
import DisplayRecipes from "./DisplayRecipes";

const RecipeSection = () => {
  const [recipeList, setRecipeList] = useState([]);
  return (
    <main>
      <section id="recipes-home">
        <aside id="add-recipes">
          <AddRecipes setRecipeList={setRecipeList} />
        </aside>
        <section id="display-recipes">
          <DisplayRecipes srcList={recipeList} />
        </section>
      </section>
    </main>
  );
};

export default RecipeSection;
