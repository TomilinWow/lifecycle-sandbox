import React, { createContext, useState, useEffect, Context, ReactNode, FC } from 'react';
import { Themes } from "@/types/theme";

type IThemeContext = [Themes, React.Dispatch<React.SetStateAction<Themes>>];
export const ThemeContext = createContext<IThemeContext>([Themes.LIGHT, () => {}]);

type IThemeProvider = {
  children: ReactNode;
};

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useState<Themes>(Themes.LIGHT);

  useEffect(() => {
    const className = "dark";
    if (theme === Themes.DARK) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
