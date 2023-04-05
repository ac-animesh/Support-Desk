import { combineReducers } from "redux";
import auth from "./authReducer";
import tickets from "./ticketReducer";
import notes from "./noteReducer";

export default combineReducers({
  auth,
  tickets,
  notes,
});
