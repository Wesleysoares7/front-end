import { useContext, useEffect } from "react";
import FavoritesContext from "../../context/favoritesContext";
import RecipeCard from "../../components/recipeCard";
import useFavorites from "../../hooks/useFavorites";
import useRedirectLogin from "../../hooks/useRedirectLogin";
import UserContext from "../../context/userContext";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  const { user } = useContext(UserContext);
  console.log(user);

  const { getFavorites } = useFavorites({
    id: "",
    value: false,
    setValue: () => {},
  });
  useRedirectLogin();

  useEffect(() => {
    getFavorites();
  }, [user]);

  return (
    <div>
      <h2>Minhas Receitas Favoritas</h2>
      <div>
        {favorites.map((recipe) => (
          <RecipeCard key={recipe.ID} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
