import { Link } from "react-router-dom";
import { Recipe } from "../types";
import { getUrlImage } from "../util/utils";
import CheckBoxFavorites from "./checkBoxFavorites";
import { useState } from "react";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="border-2 border-gray-500 rounded-md p-1 w-44 h-60 flex flex-col justify-between">
      <CheckBoxFavorites
        id={String(recipe.ID)}
        value={isFavorite}
        setValue={setIsFavorite}
      />
      <Link to={`/recipe/${recipe.ID}`} className="flex flex-col h-full">
        <img
          className="object-cover w-full h-28 rounded-t-md"
          src={getUrlImage(recipe.image)}
          alt="Recipe Image"
        />
        <div className="bg-black bg-opacity-50 text-white text-center py-1">
          <h2 className="text-sm">{recipe.title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;
