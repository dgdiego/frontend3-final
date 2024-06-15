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

const API_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = {
  dentists: [],
  favs: [],
  api_url: API_URL
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
