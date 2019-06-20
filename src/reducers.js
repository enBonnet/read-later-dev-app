export default function reducer(state, action) {
  switch (action.type) {
    case "FETCH_POSTS":
      return { ...state, posts: action.payload };
    case "ADD_TOREAD":
      return {
        ...state,
        toReadPosts: [...state.toReadPosts, action.payload]
      };
    case "REMOVE_TOREAD":
      return {
        ...state,
        toReadPosts: action.payload
      };
    default:
      return state;
  }
}
