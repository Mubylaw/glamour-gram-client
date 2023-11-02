import {
  ADD_BOOKING,
  GET_BOOKINGS,
  GET_BOOKING,
  GET_BOOKING_STAT,
  UPDATE_BOOKING,
  PAGINATE,
  GET_BOOKING_TOTAL,
} from "../actionTypes";

const booking = (
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
    case ADD_BOOKING:
      return { ...state, new: action.booking };
    case GET_BOOKING:
      return { ...state, one: action.booking };
    case GET_BOOKINGS:
      return { ...state, all: action.booking };
    case GET_BOOKING_TOTAL:
      return { ...state, total: action.total };
    case GET_BOOKING_STAT:
      return { ...state, stat: action.booking };
    case UPDATE_BOOKING:
      return { ...state, update: action.booking };
    case PAGINATE:
      return {
        ...state,
        paginate: { step: action.step, details: action.paginate },
      };
    default:
      return state;
  }
};

export default booking;
