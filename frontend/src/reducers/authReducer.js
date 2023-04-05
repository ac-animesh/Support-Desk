import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  USER_LOADED,
  RESET,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_USER,
} from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isLoading: true,
  isSuccess: false,
  isError: false,
  message: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        message: payload,
        isLoading: false,
        isSuccess: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        isLoading: false,
        isSuccess: true,
      };
    case REGISTER_FAILED:
    case LOGIN_FAILED:
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        isLoading: false,
        isError: true,
        message: payload,
        isSuccess: true,
      };
    case RESET:
      return {
        ...state,
        message: "",
        isSuccess: false,
        isError: false,
        isLoading: false,
      };
    default:
      return state;
  }
}
