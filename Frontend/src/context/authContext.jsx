import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  let initialUser = null;

  try {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      initialUser = JSON.parse(storedUser);
    }
  } catch (error) {
    console.error("Error parsing stored user data:", error);
  }
  
  const [currentUser, setCurrentUser] = useState(initialUser);

  const Login = async(input) => {
    const res=await axios.post('http://localhost:3000/api/auth/login',input,{
      withCredentials:true,
    })
    console.log(res,">>>>>>>>>>..ddad")
    if (res && res.data) {
      setCurrentUser(res.data);
    } else {
      console.error("Invalid response format:", res);
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, Login }}>
      {children}
    </AuthContext.Provider>
  );
};
