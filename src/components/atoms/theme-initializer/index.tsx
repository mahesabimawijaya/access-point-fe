import { useThemeStore } from "@/store/theme-store";
import { useEffect } from "react";

const ThemeInitializer = () => {
  const { theme } = useThemeStore(); // Get the theme from Zustand

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]); // Apply theme on mount

  return null; // No UI, just runs the effect
};

export default ThemeInitializer;
