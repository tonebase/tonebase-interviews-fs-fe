import { createContext } from 'react';

export const INITIAL_STATE = {
  theme: "dark",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      const changeTheme = state.theme === "dark" ? "light" : "dark";
      return { theme: changeTheme };
    default:
      return state;
  }
};

export const setTheme = (theme) => ({
  type: "SET_THEME",
  payload: theme,
});

export const Context = createContext()
