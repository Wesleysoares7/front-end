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
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold">Carregando receita...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-6 max-w-4xl mx-auto">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold text-center">
          {currentRecipe.title}
        </h1>
        <img
          src={getUrlImage(currentRecipe.image)}
          alt="Recipe"
          className="rounded-lg shadow-lg w-full max-w-md"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Ingredientes</h2>
        <ul className="list-disc list-inside pl-4 text-lg">
          {currentRecipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.name}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Instruções</h2>
        <p className="text-lg leading-relaxed">{currentRecipe.instructions}</p>
      </div>
    </div>
  );
};

export default Recipe;
