export enum Themes {
  LIGHT= "light",
  DARK="dark"
}

export interface IThemeContext {
  theme: Themes;
  setTheme: (theme: Themes) => void;
}
