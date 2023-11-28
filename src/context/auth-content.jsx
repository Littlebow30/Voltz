// AuthContext.js

import { createContext, useContext, useState } from "react";
import { AuthService } from "../services/auth";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(
    AuthService.isAuthenticated()
  );

  const login = async (username, password) => {
    try {
      await AuthService.login(username, password);
      setIsAuthenticated(true);
      toast("Login success!", { type: "success" });

    } catch (error) {
      console.error("Error during login:", error);

      toast(error.toString(), { type: "error" });
      throw error;
    }
  };

  const logout = () => {
    AuthService.logout();
    setIsAuthenticated(false);
    setUser(null);
  };

  const register = async (firstName, lastName, username, password) => {
    try {
      await AuthService.register(firstName, lastName, username, password);
      setIsAuthenticated(true);

      toast("Registration Success!", { type: "success" });
    } catch (error) {
      console.error("Error during registration:", error);

      toast(error.toString(), { type: "error" });
      throw error;
    }
  };

  const authContextValue = {
    user,
    isAuthenticated,
    login,
    logout,
    register,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
