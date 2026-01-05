import React, { useState } from "react";
import CreateRecipe from "./CreateRecipe";
import DisplayRecipes from "./DisplayRecipes";
import QuickFilters from "./QuickFilters";
import { DUMMY_RECIPE_DATA } from "../../database/dummyData";

const RecipeSection = () => {
  const [recipeList, setRecipeList] = useState(DUMMY_RECIPE_DATA);
  
  return (
    <main>
      <section id="recipes-home">
        <section id="hero">
          <h1>What to cook today?</h1>
          {recipeList.length > 0 ? (
            <>
              <section id="display-recipe">
                <DisplayRecipes
                  setRecipeList={setRecipeList}
                  recipeList={recipeList}
                />
              </section>
              <section id="quick-filters">
                <QuickFilters recipeList={recipeList} />
              </section>
            </>
          ) : (
            <CreateRecipe
              setRecipeList={setRecipeList}
              recipeList={recipeList}
            />
          )}
        </section>
      </section>
    </main>
  );
};

export default RecipeSection;
