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
      // document.body.classList.add("dark-theme");
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      // document.body.classList.remove("dark-theme");
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }

  return { prefersDarkMode, setActiveTheme };
}
