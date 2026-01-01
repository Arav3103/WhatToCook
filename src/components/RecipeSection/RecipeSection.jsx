import React, { useState } from "react";
import CreateRecipe from "./CreateRecipe";
import DisplayRecipes from "./DisplayRecipes";
import { quickFilters } from "../../constants";

const RecipeSection = () => {
  const [recipeList, setRecipeList] = useState([]);
  return (
    <main>
      <section id="recipes-home">
        <section id="hero">
          <h1>What to cook today?</h1>
          <input
            type="text"
            name="wtcInput"
            id="wtcInput"
            placeholder="Sambar, Tomato, Brinjal, Kurma..."
          />
          <button name="wtcCtaBtn" id="wtcCtaBtn">Find</button>
        </section>
        <section>
          <h2>Quick Filters</h2>
          <div>{quickFilters}</div>
        </section>
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
