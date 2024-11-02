import { useContext } from "react";
import useRecipes from "../../hooks/useRecipes";
// import ButtonPrimary from "../../components/buttonPrimary";
import RecipeCard from "../../components/recipeCard";
import UserContext from "../../context/userContext";
import useRedirectLogin from "../../hooks/useRedirectLogin";
import RecipesContext from "../../context/recipesContext";
// import InputField from "../../components/inputField";
import { FiSearch } from "react-icons/fi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Dashboard = () => {
  const { recipes } = useContext(RecipesContext);
  // const { nextPage, previousPage } = useRecipes();
  const { user } = useContext(UserContext);
  const { getRecipesByName } = useRecipes();
  useRedirectLogin();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    getRecipesByName(event.target.value);
  };
  console.log(recipes[0]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 pl-6">
        <div className="font-bold text-2xl">
          Hello, <span>{user.name}</span>
        </div>
        <div className="relative">
          <input
            placeholder="Search recipe"
            type="text"
            onChange={handleSearch}
            className="border-2 border-gray-500 rounded-lg pl-6"
          />
          <FiSearch className="absolute text-gray-500 top-1/2 left-1 -translate-y-1/2" />
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
      {/* <div className="flex gap-2">
        <ButtonPrimary
          children="Anterior"
          onClick={previousPage}
        ></ButtonPrimary>
        <ButtonPrimary children="Próximo" onClick={nextPage}></ButtonPrimary>
      </div> */}
    </div>
  );
};

export default Dashboard;
