import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRecipes from "../../hooks/useRecipes";
import { getUrlImage } from "../../util/utils";
import RecipesContext from "../../context/recipesContext";

const Recipe = () => {
  const { id } = useParams();
  const { getRecipeById } = useRecipes();
  const { currentRecipe } = useContext(RecipesContext);

  useEffect(() => {
    getRecipeById(Number(id));
  }, [id]);

  if (!currentRecipe) {
    return null; //colocar efeito carregando
  }

  return (
    <div className="flex flex-col gap-2 p-6 bg-red-200 mb-3">
      <h1>{currentRecipe?.title}</h1>
      <img src={getUrlImage(currentRecipe?.image)} alt="Recipe image" />
      <h2>INGREDIENTS:</h2>
      <ul>
        {currentRecipe?.ingredients.map((ingredients, index) => (
          <li key={index}>{ingredients.name}</li>
        ))}
      </ul>
      <h2>INSTRUCTIONS</h2>
      <p>{currentRecipe?.instructions}</p>
    </div>
  );
};

export default Recipe;
