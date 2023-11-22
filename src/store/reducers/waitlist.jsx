import {
  ADD_WAITLIST,
  GET_WAITLISTS,
  GET_WAITLIST,
  GET_WAITLIST_STAT,
  UPDATE_WAITLIST,
  PAGINATE,
  GET_WAITLIST_TOTAL,
} from "../actionTypes";

const waitlist = (
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
    case ADD_WAITLIST:
      return { ...state, new: action.waitlist };
    case GET_WAITLIST:
      return { ...state, one: action.waitlist };
    case GET_WAITLISTS:
      return { ...state, all: action.waitlist };
    case GET_WAITLIST_TOTAL:
      return { ...state, total: action.total };
    case GET_WAITLIST_STAT:
      return { ...state, stat: action.waitlist };
    case UPDATE_WAITLIST:
      return { ...state, update: action.waitlist };
    case PAGINATE:
      return {
        ...state,
        paginate: { step: action.step, details: action.paginate },
      };
    default:
      return state;
  }
};

export default waitlist;
