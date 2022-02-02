import axios from "axios";

const BASE_URL = "https://dummyapi.io/data/v1";
const APP_ID = process.env.REACT_APP_APP_ID;

export const getPosts = () => (dispatch) => {
  axios
    .get(`${BASE_URL}/post?limit=10`, {
      headers: {
        "app-id": APP_ID,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((res) =>
      dispatch({ type: "GET_POSTS_SUCCESS", payload: res.data.data })
    )
    .catch((err) => dispatch({ type: "GET_POSTS_ERROR", payload: err }));
};

export const getUserDetail = (id) => (dispatch) => {
  axios
    .get(`${BASE_URL}/user/${id}`, {
      headers: {
        "app-id": APP_ID,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((res) => dispatch({ type: "GET_USER_SUCCESS", payload: res.data }))
    .catch((err) => dispatch({ type: "GET_USER_ERROR", payload: err }));
};

export const getUsers = () => (dispatch) => {
  axios
    .get(`${BASE_URL}/user?limit=10`, {
      headers: {
        "app-id": APP_ID,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((res) =>
      dispatch({ type: "GET_USERS_SUCCESS", payload: res.data.data })
    )
    .catch((err) => dispatch({ type: "GET_USERS_ERROR", payload: err }));
};
