import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  hasErrors: false,
  recipes: [],
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    getRecipes: (state) => {
      state.loading = true;
    },
    getRecipesSuccess: (state, { payload }) => {
      state.recipes = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getRecipesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});



export const {getRecipes, getRecipesFailure, getRecipesSuccess} = recipeSlice.actions;
export const recipeSelector = state => state.recipes;
export default recipeSlice.reducer;

// Asynchronous thunk action
export function fetchRecipes() {
  return async dispatch => {
    dispatch(getRecipes());

    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      const data = await response.json()

      dispatch(getRecipesSuccess(data.meals))
    } catch (error) {
      dispatch(getRecipesFailure())
    }
  }
}
