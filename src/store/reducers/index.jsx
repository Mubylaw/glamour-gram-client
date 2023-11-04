import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import payment from "./payment";
import review from "./review";
import booking from "./booking";
import authUrl from "./auth";
import appointment from "./appointment";
import ticket from "./ticket";
import user from "./user";

const rootReducer = combineReducers({
  currentUser,
  errors,
  review,
  payment,
  booking,
  authUrl,
  appointment,
  ticket,
  user,
});

export default rootReducer;
