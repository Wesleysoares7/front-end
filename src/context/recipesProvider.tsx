import { useEffect, useState } from "react";
import { Recipe } from "../types";
import RecipesContext from "./recipesContext";
import { BACK_END_URL } from "../constants";
import axios from "axios";

type RecipesProviderProps = {
  children: React.ReactNode;
};

const RecipesProvider = ({ children }: RecipesProviderProps) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | undefined>();
  const [page, setPage] = useState(0);

  const fetchRecipes = async () => {
    try {
      const getRecipesByPageUrl = `${BACK_END_URL}/recipes/page/${page}`;
      const response = await axios.get(getRecipesByPageUrl);
      setRecipes(response.data.recipes);
    } catch (error) {
      console.error(error);
    }
  };

  const initialState = {
    recipes,
    setRecipes,
    currentRecipe,
    setCurrentRecipe,
    page,
    setPage,
    fetchRecipes,
  };

  useEffect(() => {
    fetchRecipes();
  }, [page]);

  return (
    <RecipesContext.Provider value={initialState}>
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
