import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../../components/buttonPrimary";
import { HiArrowSmRight } from "react-icons/hi";
import { homeBackground, homeIcon } from "../../constants/images.ts";

const Home = () => {
  const navigate = useNavigate();
  const redirectToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div
        className="bg-cover bg-center h-screen flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${homeBackground})` }}
      >
        <div className="m-8 flex flex-col gap-4 p-6 rounded-lg items-center text-white">
          <img src={homeIcon} alt="icone de um toque blanche" />
          <p className="text-center mb-4 text-lg mb-64">13k+ Recipes</p>
          <h1 className="font-semibold text-5xl text-center mb-6">
            Shall we cook?
          </h1>
          <p className="text-center">Find the best recipes</p>
          <ButtonPrimary onClick={redirectToLogin}>
            <span className="flex items-center justify-center gap-1">
              Start Here
            </span>
            <HiArrowSmRight />
          </ButtonPrimary>
        </div>
      </div>
    </>
  );
};

export default Home;
