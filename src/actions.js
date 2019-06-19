exports.togglePostToRead = (state, post, dispatch) => {
  if (state.toReadPosts.includes(post)) {
    const postRemoved = state.toReadPosts.filter(
      toRead => toRead.id !== post.id
    );
    return dispatch({ type: "REMOVE_TOREAD", payload: postRemoved });
  }

  return dispatch({ type: "ADD_TOREAD", payload: post });
};

exports.fetchPosts = async (dispatch, page = 1, tag = "react") => {
  const data = await fetch(
    `https://dev.to/api/articles?page=${page}&tag=${tag}`
  );
  const dataJSON = await data.json();
  dispatch({ type: "FETCH_POSTS", payload: dataJSON });
};
