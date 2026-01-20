import { createSlice } from "@reduxjs/toolkit";
import { DUMMY_RECIPE_DATA } from "../database/dummyData";

export const initialState = {
  recipeList: DUMMY_RECIPE_DATA,
};
export const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    addRecipe(state, action) {
      state.recipeList.push(action.payload);
    },
    deleteRecipe(state, action) {
      state.recipeList = state.recipeList.filter(
        (recipe) => recipe.recipeID != action.payload,
      );
    },
  },
});

export const { addRecipe, deleteRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
