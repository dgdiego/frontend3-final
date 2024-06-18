import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";

const MainState = createContext();

const localFavs = localStorage.getItem("favs") ?  JSON.parse(localStorage.getItem("favs")) : [];
const localTheme = localStorage.getItem("theme") ?  JSON.parse(localStorage.getItem("theme")) : 'light';

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "ADD_FAV":
      const newFavs = [...state.favs, action.payload];
      localStorage.setItem("favs", JSON.stringify(newFavs));
      return { ...state, favs: newFavs };
    case "DELETE_FAV":
      const filteredFavs = state.favs.filter((fav) => fav.id != action.payload);
      localStorage.setItem("favs", JSON.stringify(filteredFavs));
      return { ...state, favs: filteredFavs };
    case "CHANGE_THEME":
      const newTheme = state.theme == "light" ? "dark" : "light";
      localStorage.setItem("theme", JSON.stringify(newTheme));
      return { ...state, theme: newTheme };
  }
};

const API_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = {
  dentists: [],
  favs: localFavs,
  theme: localTheme,
  api_url: API_URL,
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios(state.api_url)
      .then((res) => {
        if (res.status == 200) {
          dispatch({ type: "GET_DENTISTS", payload: res.data });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <MainState.Provider value={{ state, dispatch }}>
      {children}
    </MainState.Provider>
  );
};

export default Context;

export const useMainState = () => useContext(MainState);
