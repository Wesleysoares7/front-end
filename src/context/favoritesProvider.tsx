import { useState } from "react";
import FavoritesContext from "./favoritesContext";
import { Recipe } from "../types";

type FavoritesProviderProps = {
  children: React.ReactNode;
};

const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<Recipe[]>([]);
  const initialState = {
    favorites,
    setFavorites,
  };

  return (
    <FavoritesContext.Provider value={initialState}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
