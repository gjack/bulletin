import React, { useEffect, useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";

const LoadingAuthScreen = () => {
  const { tryLocalLogin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalLogin();
  }, []);

  return null;
};

export default LoadingAuthScreen;
