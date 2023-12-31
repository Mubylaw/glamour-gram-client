import { apiCall, setTokenHeader } from "../../services/api";
import { SET_CURRENT_USER, GET_GOOGLE_URL } from "../actionTypes";
import { addError, removeError } from "./errors";

export const getUrl = (url) => ({
  type: GET_GOOGLE_URL,
  url,
});

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
}

export function setAuthorizationToken(token) {
  setTokenHeader(token);
}

export function logout() {
  return (dispatch) => {
    localStorage.clear();
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export function authUser(type, userData) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("post", `/api/v1/auth/${type}`, userData)
        .then(({ token, user }) => {
          localStorage.setItem("jwtToken", token);
          setAuthorizationToken(token);
          dispatch(setCurrentUser(user));
          dispatch(removeError());
          resolve();
        })
        .catch((err) => {
          dispatch(addError(err));
          reject();
        });
    });
  };
}

export function forgotPassword(data) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("POST", `/api/v1/auth/forgotpassword`, data)
        .then(() => {
          dispatch(removeError());
          resolve();
        })
        .catch((err) => {
          dispatch(addError(err));
          reject();
        });
    });
  };
}

export function resetPassword(token, data) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("PUT", `/api/v1/auth/resetpassword/${token}`, data)
        .then(({ token, user }) => {
          localStorage.setItem("jwtToken", token);
          setAuthorizationToken(token);
          dispatch(setCurrentUser(user));
          dispatch(removeError());
          resolve();
        })
        .catch((err) => {
          dispatch(addError(err));
          reject();
        });
    });
  };
}

export function googleUrl() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("GET", `/api/v1/auth/googleurl`)
        .then(({ data }) => {
          dispatch(getUrl(data));
          dispatch(removeError());
          resolve();
        })
        .catch((err) => {
          dispatch(addError(err));
          reject();
        });
    });
  };
}

export function googleUrlLogin() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("GET", `/api/v1/auth/googleurlLogin`)
        .then(({ data }) => {
          dispatch(getUrl(data));
          dispatch(removeError());
          resolve();
        })
        .catch((err) => {
          dispatch(addError(err));
          reject();
        });
    });
  };
}

export function googleUser(query) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("get", `/api/v1/auth/google${query}`)
        .then(({ token, user }) => {
          localStorage.setItem("jwtToken", token);
          setAuthorizationToken(token);
          dispatch(setCurrentUser(user));
          dispatch(removeError());
          resolve();
        })
        .catch((err) => {
          dispatch(addError(err));
          reject();
        });
    });
  };
}

export function uploadAvatar(data, config) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("put", `/api/v1/auth/avatar`, data, config)
        .then(({ data }) => {
          dispatch(setCurrentUser(data));
          dispatch(removeError());
          resolve();
        })
        .catch((err) => {
          dispatch(addError(err));
          reject();
        });
    });
  };
}
