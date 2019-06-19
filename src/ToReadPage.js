import React, { Fragment, useContext, Suspense, lazy } from "react";
import { Link } from "@reach/router";
import { Storage } from "./Storage";

const Post = lazy(() => import("./Post"));

export default function PostWrapper() {
  const { state } = useContext(Storage);

  return (
    <Fragment>
      <p className="nav_item">
        <p>You have {state.toReadPosts.length} left</p>
        {state.toReadPosts.length === 0 && (
          <p>
            Go <Link to="/">home</Link> and get new one
          </p>
        )}
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        {state.toReadPosts.map(post => (
          <Post post={post} />
        ))}
      </Suspense>
    </Fragment>
  );
}
