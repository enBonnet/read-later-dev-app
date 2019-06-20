import React, { createContext, useEffect, useReducer } from "react";
import reducer from "./reducers";

export const Storage = createContext();

const getInitialState = () => {
  if (localStorage.getItem("state")) {
    return JSON.parse(localStorage.getItem("state"));
  }

  return {
    posts: [],
    toReadPosts: []
  };
};

export function StorageProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, getInitialState());
  const value = { state, dispatch };

  useEffect(() => {
    if (localStorage.getItem("state")) {
      localStorage.setItem("state", JSON.stringify(state));
    } else {
      localStorage.setItem("state", JSON.stringify(getInitialState()));
    }
  });

  return <Storage.Provider value={value}>{children}</Storage.Provider>;
}
