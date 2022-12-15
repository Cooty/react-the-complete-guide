import { createContext, useState, useEffect } from "react";
import { LOGGED_IN_STORAGE_KEY } from "../config/constants";

const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem(LOGGED_IN_STORAGE_KEY, JSON.stringify(true));
  };

  useEffect(() => {
    const storedIsLoggedIn = JSON.parse(
      localStorage.getItem(LOGGED_IN_STORAGE_KEY)
    );
    if (storedIsLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem(LOGGED_IN_STORAGE_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
