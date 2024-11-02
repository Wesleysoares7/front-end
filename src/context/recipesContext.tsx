import { createContext } from "react";
import { Recipe } from "../types";

type RecipesContextType = {
  recipes: Recipe[];
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[] | []>>;
  currentRecipe: Recipe | undefined;
  setCurrentRecipe: React.Dispatch<React.SetStateAction<Recipe | undefined>>;
  page: Number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  fetchRecipes: () => void;
};

const RecipesContext = createContext({} as RecipesContextType);

export default RecipesContext;
