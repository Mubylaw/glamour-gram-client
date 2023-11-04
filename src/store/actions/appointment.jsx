import { apiCall } from "../../services/api";
import { addError, removeError } from "./errors";
import {
  ADD_APPOINTMENT,
  GET_APPOINTMENTS,
  GET_APPOINTMENT,
  GET_APPOINTMENT_STAT,
  UPDATE_APPOINTMENT,
  PAGINATE,
  GET_APPOINTMENT_TOTAL,
} from "../actionTypes";

export const addAppointment = (appointment) => ({
  type: ADD_APPOINTMENT,
  appointment,
});

export const updateAppointment = (appointment) => ({
  type: UPDATE_APPOINTMENT,
  appointment,
});

export const getAppointments = (appointment) => ({
  type: GET_APPOINTMENTS,
  appointment,
});

export const getAppointment = (appointment) => ({
  type: GET_APPOINTMENT,
  appointment,
});

export const getAppointmentStat = (appointment) => ({
  type: GET_APPOINTMENT_STAT,
  appointment,
});

export const getAppointmentTotal = (total) => ({
  type: GET_APPOINTMENT_TOTAL,
  total,
});

export const paginate = (step, paginate) => ({
  type: PAGINATE,
  step,
  paginate,
});

export const addAppointmentFn = (appointment, config) => {
  return (dispatch) => {
    return apiCall("post", "/api/v1/appointments", appointment, config)
      .then(({ data }) => {
        dispatch(addAppointment(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const updateAppointmentFn = (appointment, id, config) => {
  return (dispatch) => {
    return apiCall("put", `/api/v1/appointments/${id}`, appointment, config)
      .then(({ data }) => {
        dispatch(updateAppointment(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const getAppointmentsFn = (params) => {
  return (dispatch) => {
    return apiCall("get", `/api/v1/appointments?${params ? params : ""}`)
      .then(({ data, total, count, pagination }) => {
        dispatch(getAppointments(data));
        dispatch(getAppointmentTotal(total));
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

export const getAppointmentFn = (id, params) => {
  return (dispatch) => {
    return apiCall("get", `/api/v1/appointments/${id}?${params ? params : ""}`)
      .then(({ data }) => {
        dispatch(getAppointment(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const getAppointmentStatFn = () => {
  return (dispatch) => {
    return apiCall("get", `/api/v1/appointments/stat`)
      .then(({ data }) => {
        dispatch(getAppointmentStat(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const uploadAppointmentFn = (data, config) => {
  return (dispatch) => {
    return apiCall("post", `/api/v1/appointments/many`, data, config)
      .then(({ data }) => {
        dispatch(getAppointments(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};
