import { apiCall } from "../../services/api";
import { addError, removeError } from "./errors";
import { setCurrentUser, setAuthorizationToken } from "./auth";
import { GET_USERS, GET_USER_TOTAL, GET_USER } from "../actionTypes";

export const getUsers = (user) => ({
  type: GET_USERS,
  user,
});

export const storeUser = (user) => ({
  type: GET_USER,
  user,
});

export const getUserTotal = (total) => ({
  type: GET_USER_TOTAL,
  total,
});

export function getUser(id, params, action) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("get", `/api/v1/users/${id}${params ? `?${params}` : ""}`)
        .then(({ user, data }) => {
          if (action) {
            dispatch(storeUser(data));
          } else {
            dispatch(setCurrentUser(data));
          }
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

export const addTime = (data) => (dispatch) => {
  return apiCall("put", `/api/v1/users/freetime`, data)
    .then(({ data }) => {
      dispatch(setCurrentUser(data));
      dispatch(removeError());
    })
    .catch((err) => {
      dispatch(addError(err));
    });
};

export const removeTime = (id) => (dispatch) => {
  return apiCall("delete", `/api/v1/users/freetime/${id}`)
    .then(({ data }) => {
      dispatch(setCurrentUser(data));
      dispatch(removeError());
    })
    .catch((err) => {
      dispatch(addError(err));
    });
};

export const getUsersFn = (params) => {
  return (dispatch) => {
    return apiCall("get", `/api/v1/users?${params ? params : ""}`)
      .then(({ data, total, count, pagination }) => {
        dispatch(getUsers(data));
        dispatch(getUserTotal(total));
        if (count !== 0) {
          dispatch(paginate(Math.ceil(total / count), pagination));
        } else {
          dispatch(paginate(1, pagination));
        }
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const getBusinessFn = (data, params) => {
  return (dispatch) => {
    return apiCall(
      "post",
      `/api/v1/users/business?${params ? params : ""}`,
      data
    )
      .then(({ data }) => {
        dispatch(getUsers(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};
