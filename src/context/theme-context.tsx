"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "default" | "purple" | "green";
type Mode = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  mode: Mode;
  setTheme: (theme: Theme) => void;
  setMode: (mode: Mode) => void;
  hydrated: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>("default");
  const [mode, setModeState] = useState<Mode>("light");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme;
    const storedMode = localStorage.getItem("mode") as Mode;

    const resolvedTheme = storedTheme || "default";
    const resolvedMode = storedMode || "light";

    setThemeState(resolvedTheme);
    setModeState(resolvedMode);

    document.documentElement.setAttribute("data-theme", resolvedTheme);
    document.documentElement.setAttribute("data-mode", resolvedMode);

    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem("theme", theme);
    localStorage.setItem("mode", mode);

    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-mode", mode);
  }, [theme, mode, hydrated]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        mode,
        setTheme: setThemeState,
        setMode: setModeState,
        hydrated,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useThemeContext must be used within ThemeProvider");
  return context;
};
