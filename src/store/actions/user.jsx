import { apiCall } from "../../services/api";
import { addError, removeError } from "./errors";
import { setCurrentUser, setAuthorizationToken } from "./auth";

export function getUser(id, params, action) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall(
        "get",
        `/api/v1/users/${id}${params ? `?select=${params}` : ""}`
      )
        .then(({ user, data }) => {
          dispatch(setCurrentUser(data));
          dispatch(removeError());
          resolve(data);
        })
        .catch((err) => {
          dispatch(addError(err));
          reject();
        });
    });
  };
}

export const updateUser = (data, params, config) => (dispatch, getState) => {
  let { currentUser } = getState();
  var id = currentUser.user.id;
  if (!id) {
    id = currentUser.user.user.id;
  }
  return apiCall(
    "put",
    `/api/v1/users/${id}${params ? `?select=${params}` : ""}`,
    data,
    config
  )
    .then(({ token, data, ...user }) => {
      // make an admin safe feature that is updating users without setting auth headers
      if (token) {
        localStorage.setItem("jwtToken", token);
        setAuthorizationToken(token);
        dispatch(setCurrentUser(user.user));
      } else {
        dispatch(setCurrentUser(data));
        dispatch(removeError());
      }
    })
    .catch((err) => {
      dispatch(addError(err));
    });
};
