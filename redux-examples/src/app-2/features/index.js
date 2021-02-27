import { combineReducers } from "redux";

import recipesReducer from "./recipeSlice";

const rootReducer = combineReducers({
  recipes: recipesReducer,
});

export default rootReducer;
