import { createContext } from 'react';

// sets initial state to light
export const INITIAL_STATE = {
  theme: "light",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      // ternary logic to decide which theme to switch to based on the current state
      const changeTheme = state.theme === "dark" ? "light" : "dark";
      return { theme: changeTheme };
    default:
      return state;
  }
};

export const setTheme = () => ({
  type: "SET_THEME"
});

export const Context = createContext()
