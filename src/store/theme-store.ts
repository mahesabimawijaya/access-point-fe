import { create } from "zustand";

interface ThemeState {
  theme: "light" | "dark";
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark") => void;
}

// ✅ Zustand Store with Theme State & LocalStorage Persistence
export const useThemeStore = create<ThemeState>((set) => ({
  theme: (typeof window !== "undefined" && (localStorage.getItem("theme") === "dark" ? "dark" : "light")) || "light",

  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return { theme: newTheme };
    }),

  setTheme: (theme) =>
    set(() => {
      localStorage.setItem("theme", theme);
      document.documentElement.classList.toggle("dark", theme === "dark");
      return { theme };
    }),
}));
