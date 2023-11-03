import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import payment from "./payment";
import review from "./review";
import booking from "./booking";
import authUrl from "./auth";

const rootReducer = combineReducers({
  currentUser,
  errors,
  review,
  payment,
  booking,
  authUrl,
});

export default rootReducer;
