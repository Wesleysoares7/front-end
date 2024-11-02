import { useState } from "react";
import { User } from "../types";
import UserContext from "./userContext";

type UserProviderProps = {
  children: React.ReactNode;
};

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>({
    email: "",
    id: 0,
    name: "",
    token: "",
  });
  const initialState = {
    user,
    setUser,
  };
  return (
    <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
