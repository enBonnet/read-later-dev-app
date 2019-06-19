import React, { useEffect, useContext } from "react";
import { Storage } from "./Storage";
import { fetchPosts } from "./actions";
import "./App.css";

export default function App({ children }) {
  const { state, dispatch } = useContext(Storage);

  useEffect(() => {
    state.posts.length === 0 && fetchPosts(dispatch);
  });

  return (
    <div className="App">
      <header>
        <nav>Read later you favotire React post from Dev.to</nav>
      </header>
      <section>{children}</section>
    </div>
  );
}
