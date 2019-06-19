import React, { Fragment, useContext, Suspense, lazy } from "react";
import { Link } from "@reach/router";
import { Storage } from "./Storage";

const Post = lazy(() => import("./Post"));

export default function PostWrapper() {
  const { state } = useContext(Storage);

  return (
    <Fragment>
      {state.toReadPosts.length > 0 && (
        <p className="nav_item">
          <Link to="/toread">
            You have {state.toReadPosts.length} posts to read
          </Link>
        </p>
      )}

      <Suspense fallback={<p>Loading...</p>}>
        {state.posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </Suspense>
    </Fragment>
  );
}
