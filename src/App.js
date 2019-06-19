import React, { useState, useEffect, Suspense, lazy } from "react";
import "./App.css";

const PostsWrapper = lazy(() => import("./PostsWrapper"));

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async (page = 1, tag = "react") => {
    const data = await fetch(
      `https://dev.to/api/articles?page=${page}&tag=${tag}`
    );
    const dataJSON = await data.json();
    setPosts(dataJSON);
  };

  useEffect(() => {
    posts.length === 0 && fetchPosts();
  });

  return (
    <div className="App">
      {console.log(posts)}
      <header>
        <nav>Read later you favotire React post from Dev.to</nav>
      </header>
      <section>
        <Suspense fallback={<div>Loading...</div>}>
          <PostsWrapper posts={posts} />
        </Suspense>
      </section>
    </div>
  );
}

export default App;
