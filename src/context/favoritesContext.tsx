import { createContext } from "react";
import { Recipe } from "../types";

type FavoritesContextType = {
  favorites: Recipe[];
  setFavorites: React.Dispatch<React.SetStateAction<Recipe[]>>;
};

const FavoritesContext = createContext({} as FavoritesContextType);

export default FavoritesContext;
