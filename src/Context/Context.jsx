import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";

const MainState = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, dentists: action.payload };
    default:
      return { state };
  }
};

const initialState = {
  dentists: [],
  favs: [],
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(API_URL)
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
