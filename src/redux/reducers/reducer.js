const INITIAL_STATE = {
  posts: [],
  user: [],
  users: [],
  message: "",
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_POSTS_SUCCESS":
      return { ...state, posts: action.payload };

    case "GET_POSTS_ERROR":
      return { ...state, message: action.payload };

    case "GET_USER_SUCCESS":
      return { ...state, user: action.payload };

    case "GET_USER_ERROR":
      return { ...state, message: action.payload };

    case "GET_USERS_SUCCESS":
      return { ...state, users: action.payload };

    case "GET_USERS_ERROR":
      return { ...state, message: action.payload };

    default:
      return state;
  }
};
