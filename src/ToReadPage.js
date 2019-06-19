import React, { Fragment, useContext, Suspense, lazy } from "react";
import { Link } from "@reach/router";
import { Storage } from "./Storage";

const Post = lazy(() => import("./Post"));

export default function PostWrapper() {
  const { state } = useContext(Storage);

  return (
    <Fragment>
      <p>
        <Link to="/">Home</Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        {state.toReadPosts.map(post => (
          <Post post={post} />
        ))}
      </Suspense>
    </Fragment>
  );
}
