import React, { useState } from "react";
import AddRecipe from "./AddRecipe";
import DisplayRecipes from "./DisplayRecipes";
import { DUMMY_RECIPE_DATA } from "../../database/dummyData";
import { recipe } from "../../constants";

const RecipeSection = () => {
  const [recipeList, setRecipeList] = useState(DUMMY_RECIPE_DATA);

  return (
    <main>
      <section id="recipes-home">
        <section id="hero">
          <h1>{recipe.recipeSection.title}</h1>
          {recipeList.length > 0 && (
            <>
              <section id="display-recipe">
                <DisplayRecipes
                  setRecipeList={setRecipeList}
                  recipeList={recipeList}
                />
              </section>
            </>
          )}
        </section>
      </section>
    </main>
  );
};

export default RecipeSection;
