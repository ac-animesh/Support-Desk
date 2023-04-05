import { REGISTER_NOTE, GET_NOTES } from "../actions/types";

const initialState = {
  note: {},
  notes: [],
  isloading: true,
  isSuccess: false,
  isError: false,
  message: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_NOTE:
      return {
        ...state,
        isloading: false,
        isSuccess: true,
        message: payload,
      };
    case GET_NOTES:
      return {
        ...state,
        notes: payload,
        isloading: false,
        isSuccess: true,
      };

    default:
      return {
        ...state,
      };
  }
}
