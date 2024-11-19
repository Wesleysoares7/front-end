import { useContext, useEffect } from "react";
import FavoritesContext from "../../context/favoritesContext";
import RecipeCard from "../../components/recipeCard";
import useFavorites from "../../hooks/useFavorites";
import useRedirectLogin from "../../hooks/useRedirectLogin";
import UserContext from "../../context/userContext";
import ButtonPrimary from "@/components/buttonPrimary";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const navigate = useNavigate();
  const { favorites } = useContext(FavoritesContext);
  const { user } = useContext(UserContext);
  const { getFavorites } = useFavorites({
    id: "",
    value: false,
    setValue: () => {},
  });

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  useRedirectLogin();

  useEffect(() => {
    getFavorites();
  }, [user]);

  return (
    <div className="flex flex-col md:px-72 md:pt-10 gap-4 w-full px-2 bg-custom-bg bg-contain bg-center h-screen">
      <div className="flex flex-col gap-2 pl-6">
        <div className="flex justify-between items-center font-bold text-2xl bg-white p-2 rounded-lg">
          Favorite
          <div className="text-base">
            <ButtonPrimary
              children="To Back"
              width="w-auto"
              paddingX="px-5"
              onClick={handleDashboard}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favorites.length > 0 ? (
          favorites.map((recipe) => (
            <RecipeCard key={recipe.ID} recipe={recipe} />
          ))
        ) : (
          <div className="text-center col-span-full">
            <p>No favorite recipes found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
