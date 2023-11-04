import { apiCall } from "../../services/api";
import { addError, removeError } from "./errors";
import {
  ADD_TICKET,
  GET_TICKETS,
  GET_TICKET,
  GET_TICKET_STAT,
  UPDATE_TICKET,
  PAGINATE,
  GET_TICKET_TOTAL,
} from "../actionTypes";

export const addTicket = (ticket) => ({
  type: ADD_TICKET,
  ticket,
});

export const updateTicket = (ticket) => ({
  type: UPDATE_TICKET,
  ticket,
});

export const getTickets = (ticket) => ({
  type: GET_TICKETS,
  ticket,
});

export const getTicket = (ticket) => ({
  type: GET_TICKET,
  ticket,
});

export const getTicketStat = (ticket) => ({
  type: GET_TICKET_STAT,
  ticket,
});

export const getTicketTotal = (total) => ({
  type: GET_TICKET_TOTAL,
  total,
});

export const paginate = (step, paginate) => ({
  type: PAGINATE,
  step,
  paginate,
});

export const addTicketFn = (ticket, config) => {
  return (dispatch) => {
    return apiCall("post", "/api/v1/tickets", ticket, config)
      .then(({ data }) => {
        dispatch(addTicket(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const updateTicketFn = (ticket, id, config) => {
  return (dispatch) => {
    return apiCall("put", `/api/v1/tickets/${id}`, ticket, config)
      .then(({ data }) => {
        dispatch(updateTicket(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const getTicketsFn = (params) => {
  return (dispatch) => {
    return apiCall("get", `/api/v1/tickets?${params ? params : ""}`)
      .then(({ data, total, count, pagination }) => {
        dispatch(getTickets(data));
        dispatch(getTicketTotal(total));
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

export const getTicketFn = (id, params) => {
  return (dispatch) => {
    return apiCall("get", `/api/v1/tickets/${id}?${params ? params : ""}`)
      .then(({ data }) => {
        dispatch(getTicket(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const getTicketStatFn = () => {
  return (dispatch) => {
    return apiCall("get", `/api/v1/tickets/stat`)
      .then(({ data }) => {
        dispatch(getTicketStat(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const uploadTicketFn = (data, config) => {
  return (dispatch) => {
    return apiCall("post", `/api/v1/tickets/many`, data, config)
      .then(({ data }) => {
        dispatch(getTickets(data));
        dispatch(removeError());
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};
