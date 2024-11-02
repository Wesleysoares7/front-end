import { useContext } from "react";
import { BACK_END_URL } from "../constants";
import axios from "axios";
import RecipesContext from "../context/recipesContext";

const useRecipes = () => {
  const { setRecipes, setCurrentRecipe, setPage, fetchRecipes } =
    useContext(RecipesContext);

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    setPage((prevPage) => (prevPage === 0 ? 0 : prevPage - 1));
  };

  const getRecipeById = async (id: number) => {
    const recipeIdUrl = `${BACK_END_URL}/recipes/${id}`;
    const response = await axios.get(recipeIdUrl);
    setCurrentRecipe(response.data.recipe);
  };

  const getRecipesByName = async (search: string) => {
    if (!search) {
      fetchRecipes();
      return;
    }
    const recipeByNameUrl = `${BACK_END_URL}/recipes/search/${search}`;
    const response = await axios.get(recipeByNameUrl);
    setRecipes(response.data.recipes);
  };

  return {
    nextPage,
    previousPage,
    getRecipeById,
    getRecipesByName,
  };
};

export default useRecipes;
