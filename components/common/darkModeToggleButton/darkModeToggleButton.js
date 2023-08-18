"use client";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import store from "../../../redux/store";
import { setMode } from "../../../redux/features/darkOrLightMode/darkOrLightMode";

const DarkOrLightModeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    if (theme === "dark") {
      setDarkMode(true);
      store.dispatch(setMode("light"));
    } else {
      setDarkMode(false);
      store.dispatch(setMode("dark"));
    }
  };
  useEffect(() => {
    store.dispatch(setMode(localStorage.getItem("theme")));
  }, []);

  return (
    <>
      <DarkModeSwitch
        sunColor="white"
        moonColor="white"
        checked={isDarkMode}
        onMouseDown={toggleDarkMode}
        size={26}
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      />
    </>
  );
};

export default DarkOrLightModeButton;
