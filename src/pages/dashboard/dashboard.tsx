import { useContext } from "react";
import useRecipes from "../../hooks/useRecipes";
import RecipeCard from "../../components/recipeCard";
import UserContext from "../../context/userContext";
import useRedirectLogin from "../../hooks/useRedirectLogin";
import RecipesContext from "../../context/recipesContext";
import { FiSearch } from "react-icons/fi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ButtonPrimary from "@/components/buttonPrimary";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { recipes } = useContext(RecipesContext);
  const { user } = useContext(UserContext);
  const { getRecipesByName } = useRecipes();
  useRedirectLogin();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    getRecipesByName(event.target.value);
  };

  console.log(recipes[0]);

  const handleFavorites = () => {
    navigate("/favorites");
  };

  return (
    <div className="flex flex-col md:items-center md:pt-10 gap-4 w-full px-2 bg-custom-bg bg-cover bg-center h-screen">
      <div className="flex flex-col gap-2 pl-6 bg-white p-4 rounded-lg">
        <div className="font-bold text-2xl">
          Hello, <span>{user.name}</span>
        </div>
        <div
          className="flex justify-between md:gap-10
         pr-4"
        >
          <div className="relative">
            <input
              placeholder="Search recipe"
              type="text"
              onChange={handleSearch}
              className="border-2 border-gray-500 rounded-lg pl-6"
            />
            <FiSearch className="absolute text-gray-500 top-1/2 left-1 -translate-y-1/2" />
          </div>
          <div>
            <ButtonPrimary
              children="Favoritos"
              width="w-auto"
              paddingX="px-5"
              height="h-7"
              onClick={handleFavorites}
            />
          </div>
        </div>
      </div>
      <Carousel className="w-full max-w-sm">
        <CarouselContent className="-ml-1">
          {recipes.map((recipe) => (
            <CarouselItem className="pl-2 basis-1/2" key={recipe.ID}>
              <RecipeCard recipe={recipe} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Dashboard;
