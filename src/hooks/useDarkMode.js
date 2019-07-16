import React, { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkModeKey");

  useEffect(() => {
    let body = document.getElementsByTagName("body");
    darkMode
      ? body.classList.add("dark-mode")
      : body.classList.remove("dark-mode");
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
