import React, { Fragment } from "react";

export default function PostWrapper({ posts }) {
  return (
    <Fragment>
      {posts.map(post => (
        <div className="card" key={post.id}>
          {post.cover_image && (
            <img
              className="cover_image"
              alt={post.title}
              src={post.cover_image}
            />
          )}
          <a className="title" href={post.url}>
            {post.title}
          </a>
          <p>{post.description}</p>
          <button className="read">Read later</button>
        </div>
      ))}
    </Fragment>
  );
}
