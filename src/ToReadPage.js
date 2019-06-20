import React, { Fragment, useContext, Suspense, lazy } from "react";
import { Link } from "@reach/router";
import { Storage } from "./Storage";

const Post = lazy(() => import("./Post"));

export default function PostWrapper() {
  const { state } = useContext(Storage);

  return (
    <Fragment>
      <p className="nav_item">
        {state.toReadPosts.length > 0 && (
          <p>You have {state.toReadPosts.length} left</p>
        )}
        <p>
          Go <Link to="/">home</Link> and get new one
        </p>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        {state.toReadPosts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </Suspense>
    </Fragment>
  );
}
