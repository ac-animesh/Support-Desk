import { REGISTER_TICKET, GET_TICKETS, GET_A_TICKET } from "../actions/types";

const initialState = {
  ticket: {},
  tickets: [],
  isloading: true,
  isSuccess: false,
  isError: false,
  message: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_TICKET:
      return {
        ...state,
        isloading: false,
        isSuccess: true,
        message: payload,
      };
    case GET_TICKETS:
      return {
        ...state,
        tickets: payload,
        isloading: false,
        isSuccess: true,
      };
    case GET_A_TICKET:
      return {
        ...state,
        ticket: payload,
        isloading: false,
        isSuccess: true,
      };
    default:
      return {
        ...state,
      };
  }
}
