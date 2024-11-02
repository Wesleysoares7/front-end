import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";

const useRedirectLogin = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const localStorageUser =
      JSON.parse(localStorage.getItem("user") as string) || {};

    if (!user.token && !localStorageUser.token) {
      navigate("/login");
    }
    if (localStorageUser.token) {
      setUser(localStorageUser);
    }
  }, []);
};

export default useRedirectLogin;
