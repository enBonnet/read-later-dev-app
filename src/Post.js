import React, { useContext } from "react";
import { togglePostToRead } from "./actions";
import { Storage } from "./Storage";

export default function Post({ post }) {
  const { state, dispatch } = useContext(Storage);

  return (
    <div className="card">
      {post.cover_image && (
        <img className="cover_image" alt={post.title} src={post.cover_image} />
      )}
      <a className="title" href={post.url}>
        {post.title}
      </a>
      <p>{post.description}</p>
      <button
        className="read"
        onClick={() => togglePostToRead(state, post, dispatch)}
      >
        {state.toReadPosts.find(toRead => toRead.id === post.id)
          ? "Readed!"
          : "Read later"}
      </button>
    </div>
  );
}
