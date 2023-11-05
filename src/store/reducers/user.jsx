import { GET_USERS, GET_USER, PAGINATE, GET_USER_TOTAL } from "../actionTypes";

const user = (
  state = {
    all: [],
    one: {},
    total: 0,
    paginate: {},
  },
  action
) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, all: action.user };
    case GET_USER:
      return { ...state, one: action.user };
    case GET_USER_TOTAL:
      return { ...state, total: action.total };
    case PAGINATE:
      return {
        ...state,
        paginate: { step: action.step, details: action.paginate },
      };
    default:
      return state;
  }
};

export default user;
