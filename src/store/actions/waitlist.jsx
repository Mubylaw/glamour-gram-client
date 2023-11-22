import { apiCall } from "../../services/api";
import { addError, removeError } from "./errors";
import {
  ADD_WAITLIST,
  GET_WAITLISTS,
  GET_WAITLIST,
  GET_WAITLIST_STAT,
  UPDATE_WAITLIST,
  PAGINATE,
  GET_WAITLIST_TOTAL,
} from "../actionTypes";

export const addWaitlist = (waitlist) => ({
  type: ADD_WAITLIST,
  waitlist,
});

export const updateWaitlist = (waitlist) => ({
  type: UPDATE_WAITLIST,
  waitlist,
});

export const getWaitlists = (waitlist) => ({
  type: GET_WAITLISTS,
  waitlist,
});

export const getWaitlist = (waitlist) => ({
  type: GET_WAITLIST,
  waitlist,
});

export const getWaitlistStat = (waitlist) => ({
  type: GET_WAITLIST_STAT,
  waitlist,
});

export const getWaitlistTotal = (total) => ({
  type: GET_WAITLIST_TOTAL,
  total,
});

export const paginate = (step, paginate) => ({
  type: PAGINATE,
  step,
  paginate,
});

export const addWaitlistFn = (waitlist, config) => {
  return (dispatch) => {
    return apiCall("post", "/api/v1/waitlist", waitlist, config)
      .then(({ data }) => {
        dispatch(addWaitlist(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const updateWaitlistFn = (waitlist, id, config) => {
  return (dispatch) => {
    return apiCall("put", `/api/v1/waitlist/${id}`, waitlist, config)
      .then(({ data }) => {
        dispatch(updateWaitlist(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const getWaitlistsFn = (params) => {
  return (dispatch) => {
    return apiCall("get", `/api/v1/waitlist?${params ? params : ""}`)
      .then(({ data, total, count, pagination }) => {
        dispatch(getWaitlists(data));
        dispatch(getWaitlistTotal(total));
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

export const getWaitlistFn = (id, params) => {
  return (dispatch) => {
    return apiCall("get", `/api/v1/waitlist/${id}?${params ? params : ""}`)
      .then(({ data }) => {
        dispatch(getWaitlist(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const getWaitlistStatFn = () => {
  return (dispatch) => {
    return apiCall("get", `/api/v1/waitlist/stat`)
      .then(({ data }) => {
        dispatch(getWaitlistStat(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const uploadWaitlistFn = (data, config) => {
  return (dispatch) => {
    return apiCall("post", `/api/v1/waitlist/many`, data, config)
      .then(({ data }) => {
        dispatch(getWaitlists(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};
