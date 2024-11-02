import axios from "axios";
import { BACK_END_URL } from "../constants";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/userContext";

const useUser = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const handleLogin = async (data: any) => {
    try {
      const loginUrl = `${BACK_END_URL}/login`;
      const response = await axios.post(loginUrl, data);
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = async (data: any) => {
    try {
      const registerUrl = `${BACK_END_URL}/register`;
      await axios.post(registerUrl, data);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return {
    handleLogin,
    handleRegister,
  };
};

export default useUser;
