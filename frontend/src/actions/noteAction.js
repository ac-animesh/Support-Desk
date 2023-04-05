import axios from "axios";
import { GET_NOTES, REGISTER_NOTE } from "./types";

const API_URL = "/api/tickets/";

// get note
export const getNotes = (id) => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    config.headers["x-auth"] = user.token;
    const res = await axios.get(`${API_URL + id}/note`, config);

    dispatch({
      type: GET_NOTES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// Create Note
export const createNote = (id, note) => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const config = {
      headers: {
        "Content/Type": "application/json",
      },
    };
    const body = JSON.stringify(note);
    config.headers["x-auth"] = user.token;
    const res = await axios.post(`${API_URL + id}.note`, body, config);

    dispatch({
      type: REGISTER_NOTE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
