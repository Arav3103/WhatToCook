import React, { useState } from "react";
import CreateRecipe from "./CreateRecipe";
import DisplayRecipes from "./DisplayRecipes";

const RecipeSection = () => {
  const [recipeList, setRecipeList] = useState([]);
  return (
    <main>
      <section id="recipes-home">
        <aside id="create-recipe">
          <CreateRecipe setRecipeList={setRecipeList} recipeList={recipeList} />
        </aside>
        <section id="display-recipe">
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
