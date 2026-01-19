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
  },
});

export const { addRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
