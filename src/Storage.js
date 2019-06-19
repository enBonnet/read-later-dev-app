import React, { createContext, useEffect } from "react";

export const Storage = createContext();

const initialState = {
  posts: [],
  toReadPosts: []
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_POSTS":
      return { ...state, posts: action.payload };
    case "ADD_TOREAD":
      return {
        ...state,
        toReadPosts: [...state.toReadPosts, action.payload]
      };
    case "REMOVE_TOREAD":
      return {
        ...state,
        toReadPosts: action.payload
      };
    default:
      return state;
  }
}

export function StorageProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(initialState));
  });

  return <Storage.Provider value={value}>{children}</Storage.Provider>;
}
