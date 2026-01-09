import PropTypes from "prop-types";
import DeleteRecipe from "./DeleteRecipe";
import ReadRecipe from "./ReadRecipe";
import { useState } from "react";
import QuickFilters from "./QuickFilters";
import AddRecipe from "./AddRecipe";
import Button from "../Button";

const DisplayRecipes = ({ recipeList, setRecipeList }) => {
  const [showModal, setShowModal] = useState(false);
  const [showAddRecipeModal, setShowAddRecipeModal] = useState(false);
  const [showDeleteRecipeModal, setDeleteRecipeModal] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [quickFilterItem, setQuickFilterItem] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState("");
  const handleSelectQuickFilter = (filterValue) => {
    setQuickFilterItem(filterValue);
  };
  const filteredRecipeList = recipeList.filter((recipe) => {
    const matchedSearch = recipe.recipeName
      .toLowerCase()
      .includes(searchItem.toLowerCase());
    const matchedFilterList =
      quickFilterItem == "" ||
      recipe.category === quickFilterItem ||
      recipe.cuisine === quickFilterItem ||
      recipe.recipeType === quickFilterItem;
    return matchedSearch && matchedFilterList;
  });
  return (
    <>
      <form>
        <input
          type="text"
          value={searchItem}
          name="recipe-search"
          id="recipe-search"
          placeholder="Find your recipe here"
          onChange={(e) => setSearchItem(e.target.value)}
        />
        {searchItem.length > 0 && (
          <button
            type="button"
            title="clearSearchInput"
            onClick={() => setSearchItem("")}
          >
            X
          </button>
        )}
        <button
          type="button"
          name="openAddRecipeModal"
          onClick={() => setShowAddRecipeModal(true)}
        >
          +{" "}
        </button>
      </form>
      <section id="quick-filters">
        <QuickFilters
          recipeList={recipeList}
          handleSelectQuickFilter={handleSelectQuickFilter}
        />
      </section>
      <ul>
        {filteredRecipeList.map((item) => (
          <li key={item.recipeID}>
            {`Recipe Name : ${item.recipeName} | Cuisine : ${item.cuisine} | Recipe Type : ${item.recipeType} | Category : ${item.category}`}

            <Button
              onClick={() => {
                setDeleteRecipeModal(true);
                setSelectedRecipe(item.recipeID);
              }}
              label="Delete"
              type="Delete"
            />
            <Button
              onClick={() => {
                setShowModal(true);
                setSelectedRecipe(item.recipeID);
              }}
              label="View"
              type="View"
            />
          </li>
        ))}
      </ul>
      {showModal && selectedRecipe && (
        <ReadRecipe
          recipeList={recipeList}
          selectedRecipe={selectedRecipe}
          onClose={() => setShowModal(false)}
        />
      )}
      {showAddRecipeModal && (
        <AddRecipe
          setRecipeList={setRecipeList}
          recipeList={recipeList}
          onClose={() => setShowAddRecipeModal(false)}
        />
      )}
      {showDeleteRecipeModal && (
        <DeleteRecipe
          recipeList={recipeList}
          setRecipeList={setRecipeList}
          selectedRecipe={selectedRecipe}
          onClose={() => setDeleteRecipeModal(false)}
        />
      )}
    </>
  );
};

DisplayRecipes.propTypes = {
  srcList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

DisplayRecipes.defaultProps = {
  srcList: [],
};

export default DisplayRecipes;
