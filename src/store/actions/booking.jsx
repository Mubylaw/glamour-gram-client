import { apiCall } from "../../services/api";
import { addError, removeError } from "./errors";
import {
  ADD_BOOKING,
  GET_BOOKINGS,
  GET_BOOKING,
  GET_BOOKING_STAT,
  UPDATE_BOOKING,
  PAGINATE,
  GET_BOOKING_TOTAL,
} from "../actionTypes";

export const addBooking = (booking) => ({
  type: ADD_BOOKING,
  booking,
});

export const updateBooking = (booking) => ({
  type: UPDATE_BOOKING,
  booking,
});

export const getBookings = (booking) => ({
  type: GET_BOOKINGS,
  booking,
});

export const getBooking = (booking) => ({
  type: GET_BOOKING,
  booking,
});

export const getBookingStat = (booking) => ({
  type: GET_BOOKING_STAT,
  booking,
});

export const getBookingTotal = (total) => ({
  type: GET_BOOKING_TOTAL,
  total,
});

export const paginate = (step, paginate) => ({
  type: PAGINATE,
  step,
  paginate,
});

export const addBookingFn = (booking, config) => {
  return (dispatch) => {
    return apiCall("post", "/api/v1/bookings", booking, config)
      .then(({ data }) => {
        dispatch(addBooking(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const updateBookingFn = (booking, id, config) => {
  return (dispatch) => {
    return apiCall("put", `/api/v1/bookings/${id}`, booking, config)
      .then(({ data }) => {
        dispatch(updateBooking(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const getBookingsFn = (params) => {
  return (dispatch) => {
    return apiCall("get", `/api/v1/bookings?${params ? params : ""}`)
      .then(({ data, total, count, pagination }) => {
        dispatch(getBookings(data));
        dispatch(getBookingTotal(total));
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

export const getBookingFn = (id, params) => {
  return (dispatch) => {
    return apiCall("get", `/api/v1/bookings/${id}?${params ? params : ""}`)
      .then(({ data }) => {
        dispatch(getBooking(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const getBookingStatFn = () => {
  return (dispatch) => {
    return apiCall("get", `/api/v1/bookings/stat`)
      .then(({ data }) => {
        dispatch(getBookingStat(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const uploadBookingFn = (data, config) => {
  return (dispatch) => {
    return apiCall("post", `/api/v1/bookings/many`, data, config)
      .then(({ data }) => {
        dispatch(getBookings(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};
