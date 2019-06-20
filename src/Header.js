import React, { useEffect, useContext } from "react";
import { Storage } from "./Storage";
import { fetchPosts } from "./actions";
import "./Header.css";

export default function Header() {
  const { state, dispatch } = useContext(Storage);

  useEffect(() => {
    state.posts.length === 0 && fetchPosts(dispatch);
  });

  return (
    <div className="App">
      <header>
        <nav>Read later you favotire React post from Dev.to</nav>
      </header>
    </div>
  );
}
