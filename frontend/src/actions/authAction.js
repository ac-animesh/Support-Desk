import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  USER_LOADED,
  LOGOUT_USER,
  RESET,
} from "./types";

const API_URL = "api/users";

// Loading User
export const loadUser = () => async (dispatch) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (token) {
      config.headers["x-auth"] = token;
    }
    const res = await axios.get(`${API_URL}/getuser`, config);

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// Login User
export const login = (user) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/login`, user);
    if (res.data) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    dispatch({
      type: LOGIN_FAILED,
      payload: message,
    });
  }
};

// Register User
export const register = (user) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/register`, user);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    dispatch({
      type: REGISTER_FAILED,
      payload: message,
    });
  }
};

// Logout User
export const logout = () => async (dispatch) => {
  localStorage.removeItem("user");
  dispatch({
    type: LOGOUT_USER,
  });
};

// reset
export const reset = () => async (dispatch) => {
  dispatch({
    type: RESET,
  });
};
