import {
  ADD_TICKET,
  GET_TICKETS,
  GET_TICKET,
  GET_TICKET_STAT,
  UPDATE_TICKET,
  PAGINATE,
  GET_TICKET_TOTAL,
} from "../actionTypes";

const ticket = (
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
    case ADD_TICKET:
      return { ...state, new: action.ticket };
    case GET_TICKET:
      return { ...state, one: action.ticket };
    case GET_TICKETS:
      return { ...state, all: action.ticket };
    case GET_TICKET_TOTAL:
      return { ...state, total: action.total };
    case GET_TICKET_STAT:
      return { ...state, stat: action.ticket };
    case UPDATE_TICKET:
      return { ...state, update: action.ticket };
    case PAGINATE:
      return {
        ...state,
        paginate: { step: action.step, details: action.paginate },
      };
    default:
      return state;
  }
};

export default ticket;
