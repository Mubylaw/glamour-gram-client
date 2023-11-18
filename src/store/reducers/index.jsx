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
import chat from "./chat";

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
  chat,
});

export default rootReducer;
