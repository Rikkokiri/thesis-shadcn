import { useEffect, useState } from "react";

export function useDetectTheme() {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [prefersDarkMode, setPrefersDarkMode] = useState(getCurrentTheme());

  function handleDarkModePreferredChange() {
    const doesMatch = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setPrefersDarkMode(doesMatch);
  }

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleDarkModePreferredChange);

    // It's good practice ro remove listener
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleDarkModePreferredChange);
    };
  }, []);

  function setActiveTheme(isDarkMode: boolean) {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }

  return { prefersDarkMode, setActiveTheme };
}
