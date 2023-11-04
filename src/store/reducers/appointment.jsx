import {
  ADD_APPOINTMENT,
  GET_APPOINTMENTS,
  GET_APPOINTMENT,
  GET_APPOINTMENT_STAT,
  UPDATE_APPOINTMENT,
  PAGINATE,
  GET_APPOINTMENT_TOTAL,
} from "../actionTypes";

const appointment = (
  state = {
    new: {},
    all: [],
    total: 0,
    one: {},
    stat: {},
    update: {},
    paginate: {},
  },
  action
) => {
  switch (action.type) {
    case ADD_APPOINTMENT:
      return { ...state, new: action.appointment };
    case GET_APPOINTMENT:
      return { ...state, one: action.appointment };
    case GET_APPOINTMENTS:
      return { ...state, all: action.appointment };
    case GET_APPOINTMENT_TOTAL:
      return { ...state, total: action.total };
    case GET_APPOINTMENT_STAT:
      return { ...state, stat: action.appointment };
    case UPDATE_APPOINTMENT:
      return { ...state, update: action.appointment };
    case PAGINATE:
      return {
        ...state,
        paginate: { step: action.step, details: action.paginate },
      };
    default:
      return state;
  }
};

export default appointment;
