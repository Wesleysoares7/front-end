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
    <>
      <div className="border-2 border-grey-500 rounded-md p-1">
        <CheckBoxFavorites
          id={String(recipe.ID)}
          value={isFavorite}
          setValue={setIsFavorite}
        />
        <Link to={`/recipe/${recipe.ID}`} className="flex flex-col">
          <img
            className=""
            src={getUrlImage(recipe.image)}
            alt="Recipe Image"
          />
          <div className="bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            <h2 className="text-lg font-bold">{recipe.title}</h2>
          </div>
        </Link>
      </div>
    </>
  );
};

export default RecipeCard;
