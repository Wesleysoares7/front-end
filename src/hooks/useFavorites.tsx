import axios from "axios";
import { useContext, useEffect } from "react";
import { BACK_END_URL } from "../constants";
import FavoritesContext from "../context/favoritesContext";
import UserContext from "../context/userContext";

type useFavoritesProps = {
  id: string;
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
};

const useFavorites = ({ id, value, setValue }: useFavoritesProps) => {
  const { user } = useContext(UserContext);
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const handleFavorite = async () => {
    setValue((prev) => !prev);
    try {
      const favoriteUrl = `${BACK_END_URL}/favorites/${id}`;
      const axiosAuthorization = { headers: { Authorization: user.token } };
      if (!value) {
        await axios.post(favoriteUrl, {}, axiosAuthorization);
        return;
      }
      await axios.delete(favoriteUrl, axiosAuthorization);
    } catch (error) {
      console.error(error);
    }
  };

  const getFavorites = async () => {
    try {
      if (user.token) {
        const favoriteUrl = `${BACK_END_URL}/favorites`;
        const response = await axios.get(favoriteUrl, {
          headers: { Authorization: user.token },
        });
        setFavorites(response.data.favorites);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFavorites();
  }, [value]);

  useEffect(() => {
    const isFavorite = favorites?.some((recipe) => Number(id) === recipe.ID);
    setValue(isFavorite as boolean);
  }, [favorites]);

  return {
    handleFavorite,
    getFavorites,
  };
};

export default useFavorites;
