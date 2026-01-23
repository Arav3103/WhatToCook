import DisplayRecipes from "./displayRecipe";
import { recipe } from "../../constants";
import { useSelector } from "react-redux";

const RecipeSection = () => {
  const recipeList = useSelector((state) => state.recipes.recipeList);
  return (
    <main>
      <section id="recipes-home">
        <section id="hero">
          <h1>{recipe.recipeSection.title}</h1>
          {recipeList.length > 0 && (
            <>
              <section id="display-recipe">
                <DisplayRecipes recipeList={recipeList} />
              </section>
            </>
          )}
        </section>
      </section>
    </main>
  );
};

export default RecipeSection;
