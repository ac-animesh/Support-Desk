import axios from "axios";

import { GET_TICKETS, GET_A_TICKET, REGISTER_TICKET } from "./types";

const API_URL = "/api/tickets/";

// Create a ticket
export const createTicket =
  ({ product, description }) =>
  async (dispatch) => {
    const user = JSON.parse(localStorage.getItem("user"));

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      if (user) {
        config.headers["x-auth"] = user.token;
      }
      const body = JSON.stringify({ product, description });
      const res = await axios.post(API_URL, body, config);
      dispatch({
        type: REGISTER_TICKET,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

// Get Tickets
export const getTickets = () => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (user) {
      config.headers["x-auth"] = user.token;
    }

    const res = await axios.get(API_URL, config);
    console.log(res.data);

    dispatch({
      type: GET_TICKETS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get a single ticket
export const getTicket = (ticketId) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("user"));
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    config.headers["x-auth"] = user.token;
    const res = await axios.get(API_URL + ticketId, config);

    console.log(res.data);

    dispatch({
      type: GET_A_TICKET,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// Close ticket
export const closeTicket = (ticketId) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("user"));
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    config.headers["x-auth"] = user.token;
    const res = await axios.put(
      API_URL + ticketId,
      { status: "Closed" },
      config
    );

    console.log(res.data);

    dispatch({
      type: GET_A_TICKET,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
