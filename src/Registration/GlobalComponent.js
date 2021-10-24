import React, { useState, createContext, useEffect } from "react";
import { app } from "../base";

export const AuthContext = createContext();

export const GlobalComponent = ({ children }) => {
  const [currentUser, setCurrentUser] = useState([]);
  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);
  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};
